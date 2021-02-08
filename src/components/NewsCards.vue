<template>
  <div class="news-cards row">
    <template v-if="hasArticles">
      <news-card
        v-for="(newsArticle, i) in newsArticles"
        :newsArticle="newsArticle"
        :key="newsArticle.id"
        :index="i"
    /></template>

    <div class="row py-3" v-else>
      <template v-for="infoCard in infoCards" :key="infoCard.title">
        <div class="col-md-4 py-3">
          <info-cards :infoCard="infoCard" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import InfoCards from "./InfoCards.vue";
import { infoCards } from "@/constants/news";

export default {
  name: "NewsCards",
  components: {
    NewsCard,
    InfoCards,
  },
  props: {
    newsArticles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      infoCards,
    };
  },
  computed: {
    hasArticles() {
      return this.newsArticles && this.newsArticles.length;
    },
  },
};
</script>