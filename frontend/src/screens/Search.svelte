<script>
  // Svelte 컴포넌트가 로드될 때 onMount를 사용하여 초기화 작업 수행
  import { onMount } from 'svelte';

  // 영화 제목과 영화 정보를 저장할 변수 선언
  let movieTitle = '';
  let movieInfo = null;

  // 검색 아이콘 이미지 URL
  const img_url = "https://cdn-icons-png.freepik.com/512/2311/2311526.png";

  // 영화 정보를 API에서 가져오는 비동기 함수
  async function fetchMovieInfo() {
    try {
      // 영화 제목을 쿼리로 사용하여 API 요청
      const response = await fetch(`http://localhost:8000/api/search?query=${movieTitle}`);
      const data = await response.json();
      console.log(data); // 디버깅 용도

      // 첫 번째 결과를 movieInfo 변수에 저장
      movieInfo = data[0];
    } catch (error) {
      // 에러 발생 시 콘솔에 에러 메시지 출력
      console.error('Error fetching movie info:', error);
    }
  }

  // 컴포넌트가 마운트될 때 fetchMovieInfo 함수 호출
  onMount(fetchMovieInfo);
</script>

<!-- 메인 컨텐츠 영역 -->
<main class="search_result">
  <!-- 헤더 섹션 -->
  <header class="home__header">
    <!-- 타이틀 -->
    <div class="home_title">
      <h1>🎬 Viewtiful 🎬</h1>
    </div>
    <!-- 내비게이션 링크 -->
    <nav class="nav_links">
      <a href="#">Page</a>
      <a href="#">Movie</a>
      <a href="#">Page</a>
    </nav>
    <!-- 검색바 -->
    <div class="search-bar">
      <input bind:value={movieTitle} placeholder="영화 제목을 입력하세요">
      <button type="button" on:click={fetchMovieInfo}>
        <img src={img_url} alt="검색 아이콘" class="search-button-icon">
      </button> 
    </div>
  </header>

  <!-- 영화 정보 섹션 (영화 정보가 존재할 경우에만 표시) -->
  {#if movieInfo}
    <section class="movie_info">
      <div class="movie_details">
        <!-- 영화 제목, 평점, 장르 섹션 -->
        <div class="title_section">
          <h2>{movieInfo.original_title}</h2>
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

  .home__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #1A1C23;
      max-width: 1200px; /* 최대 너비 설정 */
      margin: 0 auto; /* 가운데 정렬 */
  }

  .home_title {
      display: flex;
      align-items: center;
  }

  .home_title h1 {
      color: #A56CEF;
      margin: 0 10px;
  }

  .nav_links {
      display: flex;
      gap: 20px;
      margin-left: auto; /* nav_links 요소를 오른쪽으로 이동 */
      margin-right: 20px; /* search-bar와의 간격 추가 */
  }

  .nav_links a {
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
      padding: 3px 8px; /* 높이를 줄이기 위해 패딩 값을 줄임 */
      width: 100%;
      max-width: 320px; /* 검색바의 최대 너비 설정 */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border: 2px solid #A56CEF; /* 얇은 보라색 테두리 추가 */
  }

  .search-bar input {
      flex: 1;
      border: none;
      outline: none;
      padding: 5px 10px; /* 높이를 줄이기 위해 패딩 값을 줄임 */
      border-radius: 30px;
      font-size: 16px;
  }

  .search-bar button { /* 버튼  */
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin: 0;
  }

  .search-bar button img { /*아이콘 크기 조절 */
      width: 24px;
      height: 24px;
  }

  /* 영화 정보 섹션 스타일 */
  .movie_info {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 20px;
      max-width: 1200px;
      margin: 20px auto; /* 위아래 여백 추가 */
      gap: 40px; /* 포스터와 정보 사이의 간격 추가 */
  }

  .movie_details {
      flex: 3; /* 정보 영역 설정 */
      padding-right: 20px;
  }

  .movie_poster { 
      flex: 2; /* 포스터 영역 설정 */
      text-align: right;
  }

  .movie_poster img {  /*포스터 스타일 */
      width: 100%;
      height: auto;
      border-radius: 10px;
  }

  /* 제목 섹션 스타일 */
  .title_section {
      display: flex;
      align-items: baseline;
      gap: 15px;
  }

  .title_section h2 {
      font-size: 2.5em; /* 제목을 더 크게 설정 */
      margin: 0;
  }

  .title_section .rating,
  .title_section .genre {
      font-size: 1em;
      color: #ccc;
  }

  .release_date {
      margin-top: 5px;
      font-size: 1.1em;
      color: #ccc;
  }

  hr { /*구분선 스타일*/
      border: none;
      border-top: 1px solid #999;
      margin: 15px 0;
  }

  .summary_heading {
      font-size: 2em; /* 개요를 영화 제목보다 작게 설정 */
      margin-bottom: 10px;
  }
</style>