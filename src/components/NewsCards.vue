<template>
  <div class="news-cards columns is-mobile">
    <news-card
      v-for="newsArticle in newsArticles"
      :newsArticle="newsArticle"
      :key="newsArticle.id"
    />
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";

export default {
  name: "NewsCards",
  components: {
    NewsCard,
  },
  props: {
    newsArticles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>