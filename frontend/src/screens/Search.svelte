<script>
  // Svelte 컴포넌트가 로드될 때 onMount를 사용하여 초기화 작업 수행
  import { onMount } from 'svelte';
  
  // 부모 컴포넌트에서 전달받은 함수 및 변수
  export let onBack;
  export let pageState;
  
  // 영화 정보를 저장할 변수 선언
  let movieInfo = null;
  let query = '';

  // 영화 정보를 API에서 가져오는 비동기 함수
  async function fetchMovieInfo(title) {
    try {
      // 영화 제목을 쿼리로 사용하여 API 요청
      const response = await fetch(`http://localhost:8000/api/search?query=${title}`);
      const data = await response.json();
      // 첫 번째 결과를 movieInfo 변수에 저장
      movieInfo = data[0];
    } catch (error) {
      // 에러 발생 시 콘솔에 에러 메시지 출력
      console.error('Error fetching movie info:', error);
    }
  }

  // 컴포넌트가 마운트될 때 fetchMovieInfo 함수 호출
  onMount(() => {
    if (pageState) {
      movieInfo = pageState;
      query = pageState.title;
    }
  });

  // 검색 아이콘 이미지 URL
  const img_url = "https://cdn-icons-png.freepik.com/512/2311/2311526.png";
</script>

<!-- 메인 컨텐츠 영역 -->
<main class="search_result">
  <!-- 헤더 섹션 -->
  <header class="home__header">
    <!-- 타이틀과 Home 버튼 -->
    <div class="home_title">
      <button on:click={onBack}>Home</button>
      <h1>🎬 Viewtiful 🎬</h1>
    </div>
    <!-- 내비게이션 링크 -->
    <nav class="nav_links">
      <a href="#">Page</a>
      <a href="#">Movie</a>
      <a href="#">Page</a>
    </nav>
    <!-- 검색바 -->
    <form class="search-bar" on:submit|preventDefault={() => fetchMovieInfo(query)}>
      <input bind:value={query} placeholder="영화 제목을 입력하세요">
      <button type="submit">
        <img src={img_url} alt="검색 아이콘" class="search-button-icon">
      </button>
    </form>
  </header>

  <!-- 영화 정보 섹션 (영화 정보가 존재할 경우에만 표시) -->
  {#if movieInfo}
    <section class="movie_info">
      <div class="movie_details">
        <!-- 영화 제목, 평점, 장르 섹션 -->
        <div class="title_section">
          <h2>{movieInfo.title}</h2>
          <span class="rating">평점: {movieInfo.vote_average}</span>
          <span class="genre">장르: {movieInfo.genre_names.join(', ')}</span>
        </div>
        <!-- 개봉일 -->
        <div class="release_date">
          <span>개봉일: {movieInfo.release_date}</span>
        </div>
        <hr>
        <!-- 영화 개요 -->
        <h3 class="summary_heading">개요</h3>
        <p>{movieInfo.overview}</p>
      </div>
      <!-- 영화 포스터 -->
      <div class="movie_poster">
        <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.original_title} />
      </div>
    </section>
  {/if}
</main>

<style>
  :global(body) { /* 전체 페이지 스타일 */
    background-color: #1A1C23;
    color: white;
    margin: 0px;
    font-family: Arial, sans-serif;
  }

  .home__header { /* 헤더 스타일 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #1A1C23;
    max-width: 1200px;
    margin: 0 auto;
  }

  .home_title { /* 타이틀 스타일 */
    display: flex;
    align-items: center;
    gap: 10px; /* Home과 Viewtiful 간격 */
  }

  .home_title h1 { /* 타이틀 텍스트 스타일 */
    color: #A56CEF;
    margin: 0 10px;
  }

  .nav_links { /* 내비게이션 링크 스타일 */
    display: flex;
    gap: 20px;
    margin-left: auto; /* 오른쪽 정렬 */
    margin-right: 20px; /* 검색바와 간격 추가 */
  }

  .nav_links a { /* 내비게이션 링크 텍스트 스타일 */
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  .search-bar { /* 검색바 스타일 */
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: white;
    border-radius: 30px;
    padding: 3px 8px;
    width: 100%;
    max-width: 320px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #A56CEF;
  }

  .search-bar input { /* 검색 인풋 스타일 */
    flex: 1;
    border: none;
    outline: none;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 16px;
  }

  .search-bar button { /* 검색 버튼 스타일 */
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  .search-bar button img { /* 검색 버튼 아이콘 스타일 */
    width: 24px;
    height: 24px;
  }

  .movie_info { /* 영화 정보 섹션 스타일 */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    max-width: 1200px;
    margin: 20px auto;
    gap: 40px;
  }

  .movie_details { /* 영화 정보 디테일 섹션 스타일 */
    flex: 3;
    padding-right: 20px;
  }

  .movie_poster { /* 영화 포스터 섹션 스타일 */
    flex: 2;
    text-align: right;
  }

  .movie_poster img { /* 영화 포스터 이미지 스타일 */
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .title_section { /* 제목 섹션 스타일 */
    display: flex;
    align-items: baseline;
    gap: 15px;
  }

  .title_section h2 { /* 제목 텍스트 스타일 */
    font-size: 2.5em;
    margin: 0;
  }

  .title_section .rating, .title_section .genre { /* 평점 및 장르 텍스트 스타일 */
    font-size: 1em;
    color: #ccc;
  }

  .release_date { /* 개봉일 텍스트 스타일 */
    margin-top: 5px;
    font-size: 1.1em;
    color: #ccc;
  }

  hr { /* 구분선 스타일 */
    border: none;
    border-top: 1px solid #999;
    margin: 15px 0;
  }

  .summary_heading { /* 개요 텍스트 스타일 */
    font-size: 2em;
    margin-bottom: 10px;
  }
</style>
