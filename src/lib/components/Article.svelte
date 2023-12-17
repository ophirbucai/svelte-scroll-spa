<script lang="ts">
	import type { TArticle } from "../articles/article";
	import { fade } from "svelte/transition";
	export let isViewing: boolean;
	export let article: TArticle;
</script>

{#if isViewing}
	<div class="article" transition:fade={{ duration: 200, delay: 75 }} style="color: {article.textColor}">
		<div></div>
		<div>
			<hgroup>
				<h1>{article.name}</h1>
				<h2>{article.headline}</h2>
			</hgroup>
			<section>
				{#each article.attributes as attribute}
					<div class="pill">{attribute.name}</div>
				{/each}
			</section>
		</div>
	</div>
{/if}

<style>
	.pill {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border-radius: 10em;
		border: 1px solid currentColor;
		margin-right: 0.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	.article {
		position: fixed;
		top: 0;
		padding: 0 1rem;
		display: grid;
		grid-auto-rows: 1fr 1.5fr;
		height: 100%;
		pointer-events: none;
	}
</style>
