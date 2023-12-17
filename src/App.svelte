<script lang="ts">
	import { onMount } from "svelte";
	import { articles } from './lib/articles';
	import Article from "./lib/components/Article.svelte";
	import Navigation from "./lib/components/TopBar.svelte";
	import viewport from "./lib/hooks/useInViewport";
	import type { TArticle } from "./lib/articles/article";
	function loadArticle(): TArticle {
		const articleId = location.hash.slice(1);
		return articles.find(article => article.id === articleId) || articles[0];
	}
	let currentArticle: TArticle = loadArticle();
	onMount(() => {
		const elArticle = document.getElementById(currentArticle.id);
		if (elArticle) {
			elArticle.scrollIntoView({ behavior: "instant" });
		}
	});
</script>

<div class="container" style="grid-template-rows: repeat({articles.length}, 100vh); color: {currentArticle?.textColor};">
	<Navigation {articles} currentArticleId={currentArticle.id} />
	{#each articles as article}
		<div
			use:viewport
			on:inView={() => {
				currentArticle = article;
			}}
			style="background-color: {article.color};"
			id={article.id}
		>
			<Article {article} isViewing="{article.id === currentArticle?.id}" />
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;
		background: #000;
		display: grid;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		//-webkit-overflow-scrolling: touch;
		//&::-webkit-scrollbar {
		//	display: none;
		//}
		& > * {
			scroll-snap-align: start;
		}
	}
</style>
