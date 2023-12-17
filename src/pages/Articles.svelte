<script lang="ts">
    import { onMount } from "svelte";
    import { viewport } from "../lib/hooks/viewport";
    import type { TArticle } from "../assets/types/TArticle";
    import Article from "../components/Article.svelte";
    export let articles: TArticle[] = [];
    export let currentArticle: TArticle;
    export let onChangeArticle: (article: TArticle) => void;

    onMount(() => {
        const elArticle = document.getElementById(currentArticle.id);
        if (elArticle) {
            elArticle.scrollIntoView({ behavior: "instant" });
        }
    });
</script>

{#if articles.length}
    {#each articles as article}
        <section
            use:viewport
            on:inView={() => onChangeArticle(article)}
            style="background-color: {article.color};"
            id={article.id}
        >
            <Article {article} isViewing="{article.id === currentArticle?.id}" />
        </section>
    {/each}
{/if}

<style>
    section {
        scroll-snap-align: start;
    }
</style>