<script lang="ts">
	import type { TArticle } from "../assets/types/TArticle";
	import { fade } from "svelte/transition";
	export let article: TArticle;
	export let isViewing: boolean;
</script>

{#if isViewing}
	<div class="article" transition:fade={{ duration: 195, delay: 75 }}>
		<div></div>
		<div>
			<hgroup>
				<h1>{article.name}</h1>
				<h2>{article.headline}</h2>
			</hgroup>
			<section>
				{#each article.attributes as attribute}
					<div class="pill small">{attribute.name}</div>
				{/each}
			</section>
			<div class="my-5">
				<a class="pill contained large font-light" href={article.link1}>{article.text1}</a>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.article {
		padding: 0 1rem;
		display: grid;
		grid-auto-rows: 1fr 1.5fr;
		text-align:center;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		pointer-events: none;
	}

</style>
