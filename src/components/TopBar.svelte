<script lang="ts">
	import type { TArticle } from "../assets/types/TArticle";
	export let articles: TArticle[] = [];
	export let currentArticleId: string;

</script>
{#if articles.length}
<nav class="top-bar">
	<ul>
		{#each articles as article}
			<li>
				<a href="#{article.id}" class="{currentArticleId === article.id ? 'active' : ''}" data-title="{article.name}">
					{article.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>
{/if}

