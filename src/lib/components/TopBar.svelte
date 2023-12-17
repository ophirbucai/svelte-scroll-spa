<script lang="ts">
	import type { TArticle } from "../articles/article";
	import "../../assets/css/top-bar.scss";
	export let articles: TArticle[];
	export let currentArticleId: TArticle["id"];
	$: currentTextColor = articles.find((article) => article.id === currentArticleId)?.textColor;
</script>
<nav style="color: {currentTextColor}" class="top-bar">
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
