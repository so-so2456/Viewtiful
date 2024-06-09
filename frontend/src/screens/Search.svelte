<script>
  // Svelte 컴포넌트가 로드될 때 onMount를 사용하여 초기화 작업 수행
  import { onMount } from 'svelte';
  import arrowLeft from 'svelte-awesome/icons/arrowLeft'; // 왼쪽 화살표 아이콘
  import Icon from 'svelte-awesome/components/Icon.svelte';

  // api 주소
  const API = process.env.api;
	console.log(API.API_URL);

  // 부모 컴포넌트에서 전달받은 함수 및 변수
  export let onBack;
  export let pageState;
  
  // 영화 정보를 저장할 변수 선언
  let movieInfo = null;
  let reviews = [];
  let query = '';

  // 영화 정보를 API에서 가져오는 비동기 함수
  async function fetchMovieInfo(title) {
    try {
      // 영화 제목을 쿼리로 사용하여 API 요청
      const response = await fetch(`${API.API_URL}/api/search?query=${title}`);
      const data = await response.json();
      // 첫 번째 결과를 movieInfo 변수에 저장
      movieInfo = data[0];
      // 영화 ID로 리뷰를 가져오는 함수 호출
      if (movieInfo) {
        await fetchReviews(movieInfo.id);
      } else {
        movieInfo = null;
      }
    } catch (error) {
      // 에러 발생 시 콘솔에 에러 메시지 출력
      console.error('Error fetching movie info:', error);
    }
  }

  // 영화 리뷰를 API에서 가져오는 비동기 함수
  async function fetchReviews(movieId) {
    try {
      // 영화 ID를 사용하여 API 요청
      const response = await fetch(`${API.API_URL}/api/movie_reviews/${movieId}`);
      const data = await response.json();
      // 리뷰 데이터를 reviews 변수에 저장
      reviews = data;
    } catch (error) {
      // 에러 발생 시 콘솔에 에러 메시지 출력
      console.error('Error fetching movie reviews:', error);
    }
  }

  // 컴포넌트가 마운트될 때 fetchMovieInfo 함수 호출
  onMount(() => {
    if (pageState) {
      movieInfo = pageState;
      query = pageState.title;
      fetchReviews(pageState.id);
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
      <button on:click={onBack}><Icon data={arrowLeft} scale="2" color="#FFFFFF"/></button>
      <h1>🎬 Viewtiful 🎬</h1>
    </div>
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
        <hr>
        <!-- 리뷰 섹션 -->
        <h3 class="reviews_heading">리뷰</h3>
        <section class="reviews">
          {#if reviews.length > 0}
            <ul class="reviews_list">
              {#each reviews as review}
                <li class="review_item">
                  <div class="review_text">
                    <h4 class="review_author">{review.author}</h4>
                    <p class="review_content">{@html review.content}</p>
                  </div>
                </li>
              {/each}
            </ul>
          {:else}
            <p>리뷰가 없습니다.</p>
          {/if}
        </section>
      </div>
      <!-- 영화 포스터 -->
      <div class="movie_poster">
        <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.original_title} />
      </div>
    </section>
  {:else}
  <section class="movie_error">
    <h2>검색결과가 없습니다..</h2>
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

  .movie_error {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
  }

  .home__header { /* 헤더 스타일 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #1A1C23;
    max-width: 1200px;
  }

  .home_title { /* 타이틀 스타일 */
    display: flex;
    align-items: center;
    gap: 10px; /* Home과 Viewtiful 간격 */
  }

  .home_title button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  .home_title h1 { /* 타이틀 텍스트 스타일 */
    color: #A56CEF;
    margin: 0 10px;
    white-space: nowrap;
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
    justify-content: space-between;
    border: none;
    outline: none;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 16px;
    margin: 0;
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
    min-width: 250px;
  }

  .movie_poster img { /* 영화 포스터 이미지 스타일 */
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .title_section { /* 제목 섹션 스타일 */
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 15px;
    margin-bottom: 15px;
  }

  .title_section h2 { /* 제목 텍스트 스타일 */
    font-size: 2.5em;
    margin: 0;
    white-space: nowrap;
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

  .reviews { /* 리뷰 섹션 스타일 */
    max-height: 300px; /* 스크롤이 가능하게 하기 위해 최대 높이를 설정 */
    overflow-y: auto; /* 스크롤이 가능하게 설정 */
    padding: 10px;
    border-top: 1px solid #999;
  }

  /* 스크롤바 스타일링 시작 */
  .reviews::-webkit-scrollbar {
    width: 3px; /* 스크롤바의 너비 */
  }

  .reviews::-webkit-scrollbar-thumb {
    background: #ccc; /* 스크롤바의 색상 */
    border-radius: 10px; /* 스크롤바의 모서리를 둥글게 */
  }

  .reviews::-webkit-scrollbar-track {
    background: #1A1C23; /* 스크롤바 트랙의 색상 */
  }

  .reviews_heading { /* 리뷰 헤딩 스타일 */
    font-size: 2em;
    margin-bottom: 15px;
  }

  .reviews_list { /* 리뷰 리스트 스타일 */
    list-style: none;
    padding: 0;
  }

  .review_item { /* 리뷰 아이템 스타일 */
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .review_text { /* 리뷰 텍스트 스타일 */
    flex: 1;
  }

  .review_author { /* 리뷰 작성자 스타일 */
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
  }

  .review_content { /* 리뷰 내용 스타일 */
    font-size: 1em;
    color: #ccc;
  }
</style>
