<script>
	const img_url = "https://image.tmdb.org/t/p/w185";
	
	async function getPopularMovies() {
		const url = "http://localhost:8000/api/popular_movies";
		return await fetch(url).then((res) => res.json());
	}
	let moviesRequest = getPopularMovies();

	let query = '';
	let preResults = [];
	async function searchMoviesWithQuery(query) {
	const url = `http://localhost:8000/api/search?query=${query}`;
	return await fetch(url).then((res) => res.json())
	.then((data) => preResults = data);
	}
	$: searchRequest = searchMoviesWithQuery(query);

</script>
<main class="home">
<nav class="home__navigator">
	<p class="home__navigator-page1">Page</p>
	<p class="home__navigator-movie">Movie</p>
	<p class="home__navigator-page2">Page</p>
</nav>
<header class="home__header">
	<section class="home__header-title">
		<h1>🎬 Viewtiful 🎬</h1>
		<h5>find your best movie!</h5>
	</section>
</header>
<section class="home__search_bar">
	<input type="text" bind:value={query}>
	{#await searchRequest}
		{#each preResults as result}
			<article class="home__search_bar__result_container">
				<p class="home__search_bar__result_container__title">{result.title}</p>
			</article>
		{/each}
	{:then results}
		{#if results}
			{#each results as result}
				<article class="home__search_bar__result_container">
					<p class="home__search_bar__result_container__title">{result.title}</p>
				</article>
			{/each}
		{/if}
	{/await}
</section>
<section class="home__popular_movie">
	<h1>인기영화 Top 3</h1>
	<section class="home__popular_movie__container">
		{#await moviesRequest}
			<p>Loading...</p>
		{:then movies}
			{#each movies as movie}
				<article class="home__popular_movie__container__movie">
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
	.home__search_bar {
		display: flex;
		flex-direction: column;
	}
	.home {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 0;
		width: 100%;
		height: 100%;
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
	.home__navigator {
		display: flex;
		gap: 48px;
	}
	.home__popular_movie__container {
		display: flex;
		gap: 48px;
	}
</style>