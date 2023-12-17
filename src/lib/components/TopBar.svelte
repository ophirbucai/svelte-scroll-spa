<script lang="ts">
	import type { TArticle } from "../articles/article";
	export let articles: TArticle[];
	export let currentArticleId: string;

</script>
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

