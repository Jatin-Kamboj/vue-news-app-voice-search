<template>
  <div class="news-card-container">
    News Cards
    <div class="news-cards">
      <news-card v-for="article in articles" :key="article.id" />
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard";
export default {
  name: "NewsCards",
  components: {
    NewsCard,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
