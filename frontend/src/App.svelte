<script>
	import Router from 'svelte-spa-router';
	import Home from './screens/Home.svelte';
	import Search from './screens/Search.svelte';
  import Navigator from './widgets/Navigator.svelte';

	/*
	use:link 속성을 사용한 경우는 항상 /# 문자가 선행되도록 경로가 만들어진다.
	웹 페이지에서 어떤 경로가 /#으로 시작하면 브라우저는 이 경로를 하나의 페이지로 인식한다.
	이러한 것을 해시 기반 라우팅(hash based routing)이라고 한다.
	*/
	const routes = {
		'/': Home,
		'/search': Search,
	};

</script>

<body>
	<Navigator />
	<Router {routes} />
</body>