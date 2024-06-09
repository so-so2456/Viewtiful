<script>
	export let onSubmit; // App.svelte에서 정의한 onSubmit 함수

	// 이미지 외부 링크
	const img_url = "https://image.tmdb.org/t/p/w185";
	
	// 인기 영화 api 호출
	async function getPopularMovies() {
		const url = `https://viewtiful-e9ffcb9f81a6.herokuapp.com/api/popular_movies`;
		return await fetch(url).then((res) => res.json());
	}

	let moviesRequest = getPopularMovies();

	let query = ''; // 검색어
	let preResults = []; // blink 현상을 방지하기 위해, 전에 검색 결과를 따로 저장해놓음

	// query에 따른 영화 검색 api 호출
	async function searchMoviesWithQuery(query) {
	const url = `https://viewtiful-e9ffcb9f81a6.herokuapp.com/api/search?query=${query}`;
	return await fetch(url).then((res) => res.json())
	.then((data) => preResults = data);
	}
	// 변수인 query에 의해 값이 변경되므로 $ statement 사용
	$: searchRequest = searchMoviesWithQuery(query);

	const search = "https://cdn-icons-png.freepik.com/512/2311/2311526.png";
	const film = "https://cdn-icons-png.freepik.com/256/1179/1179120.png"

</script>

<!-- class 이름이 곧 주석 -->
<main class="home">
<header class="home__header">
	<section class="home__header__title">
		<h1>🎬 Viewtiful 🎬</h1>
		<h5>Find your best movie!</h5>
	</section>
</header>
<form class="home__search" on:submit|preventDefault={() => {onSubmit(preResults[0])}}>
	<section class="home__search__bar">
		<img src={film} alt="영화" class="film-icon" width="30" height="30">
		<input class="home__search__bar__input" type="text" bind:value={query}>
		<button class="home__search__bar__search_button"on:click={() => {onSubmit(preResults[0])}}>
			<img src={search} alt="영화 검색" class="search-icon" width="30" height="30">
		</button>
	</section>
	<section class="home__search__result">
		{#await searchRequest}
			{#each preResults as result}
				<article class="home__search__result_container">
					<p class="home__search__result_container__title">{result.title}</p>
				</article>
			{/each}
		{:then results}
			{#if results}
				{#each results as result}
					<article class="home__search__result_container" on:click={() => {onSubmit(result)}}>
						<img class="home__search__result_container__img" src={img_url + result.poster_path} alt="{result.title}" width="94" height="150" />
						<p class="home__search__result_container__title">{result.title}</p>
					</article>
				{/each}
			{/if}
		{/await}
	</section>
</form>
<section class="home__popular_movie">
	<h1>인기영화 Top 3</h1>
	<section class="home__popular_movie__container">
		{#await moviesRequest}
			<p>Loading...</p>
		{:then movies}
			{#each movies as movie}
				<article class="home__popular_movie__container__movie" on:click={() => {onSubmit(movie)}}>
					<img class="home__popular_movie__container__movie__img" src={img_url + movie.poster_path} alt="{movie.title}" width="185" height="300" />
					<p class="home__popular_movie__container__movie__title">{movie.title}</p>
				</article>
			{/each}
		{:catch error}
			<p>{error}</p>
		{/await}
	</section>
</section>
</main>
<style>
	.search-icon {
		cursor: pointer;
	}
	.home__search__bar__search_button {
		margin: 0;
		padding: 0;
		background: none;
		border: none;
	}
	.home__search__result_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		border-bottom: solid 1px grey;
		cursor: pointer;
	}
	.home__popular_movie__container__movie {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.home__popular_movie {
		margin: 64px 0;
	}
	.home__popular_movie > h1 {
		color: white;
		font-weight: 400;
		margin-bottom: 40px;
	}
	.home__search__bar__input {
		border: none;
		margin: 0px 24px;
		width: 100%;
		font-size: 16px;
	}
	.home__search__bar__input:focus {
		outline: none;
	}
	.home__search__bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: solid 1px #A56CEF;
		background-color: white;
		border-radius: 25px;
		width: 500px;
		height: 30px;
		padding: 10px 30px;
	}
	.home__header__title {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.home__header__title > h1 {
		color: #A56CEF;
		font-size: 48px;
		margin: 40px 0px 10px 0px;
		white-space: nowrap;
	}
	.home__header__title > h5 {
		color: grey;
		font-weight: 300;
		font-size: 16px;
		margin: 0px 0px 30px 0px ;
	}
	.home__search {
		display: flex;
		flex-direction: column;
	}
	.home {
		color: white;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 0;
		width: 100vw;
		height: 100vh;
	}
	.home__popular_movie__container__movie__img {
		width: 185;
		height: 185;
	}
	.home__popular_movie {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.home__popular_movie__container {
		display: flex;
		gap: 48px;
	}
</style>