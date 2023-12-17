<script lang="ts">
	import { onMount } from "svelte";
	import { articles } from './lib/articles';
	import viewport from "./lib/hooks/useInViewport";
	import Article from "./lib/components/Article.svelte";
	import Navigation from "./lib/components/TopBar.svelte";
	let currentArticleId: string;

	function loadCurrentArticleId(): string {
		const hash = location.hash.slice(1);
		if (articles.map(({ id }) => id).includes(hash)) {
			return hash;
		} else {
			return articles[0].id;
		}
	}

	function scrollToArticle(smooth = true) {
		const hash = loadCurrentArticleId();
		if (hash === currentArticleId) return;
		document.getElementById(hash)?.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
	}
	onMount(() => {
		scrollToArticle(false);

		window.addEventListener("hashchange", () => scrollToArticle());

	    return () => {
			window.removeEventListener("hashchange", () => scrollToArticle());
		}
	})
	function updateCurrentArticleId(id: Article["id"]) {
		currentArticleId = id;
		location.hash = id;
	}

</script>

<div class="container" style="grid-template-rows: repeat({articles.length}, 100vh)">
	<Navigation {articles} {currentArticleId} />
	{#each articles as article}
		<article class="article" style="background: {article.color}" id="{article.id}" use:viewport on:inView={() => updateCurrentArticleId(article.id)}>
			<Article {article} isViewing={article.id === currentArticleId} />
		</article>
	{/each}

</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory;
		background: #000;
		display: grid;
	}
	article.article {
		height: 100%;
		scroll-snap-align: start;
	}
</style>
