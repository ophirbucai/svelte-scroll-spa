<script lang="ts">
	import TopBar from "./components/TopBar.svelte";
	import Articles from "./pages/Articles.svelte";
	import { articles } from './assets/constants/articles';
	import type { TArticle } from "./assets/types/TArticle";

	let currentArticle: TArticle = loadCurrentArticle();
	function loadCurrentArticle(): TArticle {
		const articleId = location.hash.slice(1);
		return articles.find(article => article.id === articleId) || articles[0];
	}
	function onChangeArticle(article: TArticle) {
		currentArticle = article;
	}
</script>

<div style="color: {currentArticle.textColor}; background-color: {currentArticle.color};">
	<header class="navigation">
		<TopBar {articles} currentArticleId={currentArticle?.id} />
	</header>
	<main class="container" style="grid-template-rows: repeat({articles.length}, 100vh);">
		<Articles {articles} currentArticle={currentArticle} {onChangeArticle} />
	</main>
</div>

<style lang="scss">
	main.container {
		width: 100%;
		height: 100vh;
		background: #000;
		display: grid;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		-webkit-overflow-scrolling: touch;
		//&::-webkit-scrollbar {
		//	display: none;
		//}
	}
	header.navigation {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}
</style>
