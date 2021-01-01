<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3" :title="newsArticle.title">
          <a :href="newsArticle.url" target="_blank">
            <img :src="newsArticle.urlToImage" :alt="newsArticle.title" />
          </a>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://image.flaticon.com/icons/png/512/21/21601.png"
                alt="News"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ newsArticle.author }}</p>
            <p class="subtitle is-6">{{ newsArticle.author }}</p>
          </div>
        </div>

        <div class="content">
          {{ newsArticle.title }}
          <br />
          <time :datetime="articleDate">{{ articleDate }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    newsArticle: {
      type: Object,
      required: true,
    },
  },
  computed: {
    articleDate() {
      return new Date(this.newsArticle.publishedAt).toDateString();
    },
  },
  mounted() {},
};
</script>

<style>
</style>