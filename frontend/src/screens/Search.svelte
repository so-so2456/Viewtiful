<script>

  let movieTitle = '';
  let movieInfo = null;

  async function fetchMovieInfo() {
      const response = await fetch(`http://localhost:8000/api/search?query=${movieTitle}`);
      const data = await response.json();
      console.log(data); 
      movieInfo = data[0]; 
  }

</script>

<main class="search_result">
  <header class="home__header">
    <div class="home_title">
      <h1>🎬 Viewtiful 🎬</h1>
    </div>
    <nav class="nav_links">
      <a href="#">Page</a>
      <a href="#">Movie</a>
      <a href="#">Page</a>
    </nav>
    <div class="search-bar">
      <input bind:value={movieTitle} placeholder="영화 제목을 입력하세요">
      <button type="button" on:click={fetchMovieInfo}>검색</button>
    </div>
  </header>
</main>

<style>
  :global(body) {
      background-color: #1A1C23;
      color: white;
      margin: 0px;
      font-family: Arial, sans-serif;
  }

  header {
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

  .search-bar {
      display: flex;
      align-items: center;
      gap: 10px;
  }

  input {
      padding: 5px 30px;
      border-radius: 20px;
      border: 1px solid #ccc;
  }

  button {
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      background-color: #A56CEF;
      color: white;
      cursor: pointer;
  }

  button:hover {
      background-color: #8e52d9;
  }
</style>
