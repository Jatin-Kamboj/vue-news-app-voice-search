<template>
  <section>
    <mic-button />
    <news-cards :newsArticles="newsArticles" />
  </section>
</template>

<script>
import { MicButton } from "@/components";
import { NewsCards } from "../components";
import { getTopHeadlines } from "../services/apis/news.js";

export default {
  components: {
    NewsCards,
    MicButton,
  },
  data() {
    return {
      newsArticles: [],
      newsCountry: "in",
    };
  },
  async mounted() {
    try {
      const params = {
        country: this.newsCountry,
      };

      const {
        data: { articles },
      } = await getTopHeadlines(params);

      this.newsArticles = articles;
    } catch (error) {
      console.log("getTopHeadlines error :>> ", error);
    }
  },
};
</script>

<style lang="scss"></style>
