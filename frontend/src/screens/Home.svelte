<script>
	import search from 'svelte-awesome/icons/search';
	import film from 'svelte-awesome/icons/film';
	import Icon from 'svelte-awesome/components/Icon.svelte';

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

	function goToSearch(id) {
		if (!id) return;
		const url = `http://localhost:8080/#/search?id=${id}`;
		window.location.href = url;
	}

</script>
<main class="home">
<nav class="home__navigator">
	<a href="#" class="home__navigator__page1">Page</a>
	<a href="#" class="home__navigator__movie">Movie</a>
	<a href="#" class="home__navigator__page2">Page</a>
</nav>
<header class="home__header">
	<section class="home__header__title">
		<h1>🎬 Viewtiful 🎬</h1>
		<h5>Find your best movie!</h5>
	</section>
</header>
<form class="home__search" on:submit|preventDefault={() => {goToSearch(preResults[0].id)}}>
	<section class="home__search__bar">
		<Icon class="home__search__bar__film" data={film} scale="2" color="#1A1C23"/>
		<input class="home__search__bar__input" type="text" bind:value={query}>
		<Icon class="home__search__bar__search" data={search} scale="2" color="#1A1C23"/>
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
					<article class="home__search__result_container" on:click={()=>goToSearch(result.id)}>
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
				<article class="home__popular_movie__container__movie" on:click={()=>goToSearch(movie.id)}>
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
	.home__search__result_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		border-bottom: solid 1px grey;
	}
	.home__popular_movie__container__movie {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.home__popular_movie {
		margin: 64px 0;
	}
	.home__popular_movie > h1 {
		color: white;
		font-weight: 400;
		margin-bottom: 40px;
	}
	.home__navigator {
		margin: 20px 0 10px 0;
	}
	.home__navigator > a {
		text-decoration: none;
		color: white;
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
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.home__header__title > h1 {
		color: #A56CEF;
		font-size: 48px;
		margin: 40px 0px 10px 0px;
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
	.home__navigator {
		display: flex;
		gap: 48px;
	}
	.home__popular_movie__container {
		display: flex;
		gap: 48px;
	}
</style>