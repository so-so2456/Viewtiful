<script>
    import Home from './screens/Home.svelte';
    import Search from './screens/Search.svelte';

    const pages = [Home, Search]; // 모든 레이아웃
    let page = 0; // 현재 레이아웃 인덱스
    let pageState = null; // 임시로 영화 정보 저장
    
    // Home에서 검색을 했을때 Search로 넘어가게 함
    function onSubmit(values) {
        if (page === pages.length - 1) {
            pageState = values;
        } else {
			pageState = values;
			page +=1;
        }
    }

    // Search에서 Home으로 넘어가게 함
    function onBack(values) {
        pageState = null;
        page -= 1;
    }
</script>

<!-- https://svelte.dev/repl/8eb738732cf74edd86f680c53e6ba253?version=3.44.2 참고 -->
<svelte:component 
    this={pages[page]}
    {onSubmit}
    {onBack}
    pageState={pageState}
/>

<style>
	:global(body) {   
		background-color: #1A1C23;  
		margin: 0;
		padding: 0; 
		overflow-x: hidden
	}
</style>