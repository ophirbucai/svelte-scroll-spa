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

<div class="container" style="color: {currentArticle.textColor}; background-color: {currentArticle.color};">
	<header>
		<TopBar {articles} currentArticleId={currentArticle?.id} />
	</header>
	<main style="grid-template-rows: repeat({articles.length}, 100vh);">
		<Articles {articles} currentArticle={currentArticle} {onChangeArticle} />
	</main>
</div>

<style lang="scss">
	.container {
		position: relative;
		height: 100vh;
		header {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
		}
		main {
			width: 100%;
			background: #000;
			display: grid;
			overflow-y: scroll;
			scroll-snap-type: y mandatory;
			-webkit-overflow-scrolling: touch;
			//&::-webkit-scrollbar {
			//	display: none;
			//}
		}
	}
</style>
