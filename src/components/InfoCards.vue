<template>
  <div class="card">
    <div class="card-content" :style="style">
      <div class="media">
        <div class="media-content has-text-centered">
          <p class="title is-size-3">{{ infoCard.title }}</p>
          <p class="title font-weight-bold is-size-4">
            {{ infoCard.title.split(" ")[2] ?? ":" }}
          </p>

          <p class="subtitle pt-3 font-weight-bold">
            <strong>
              {{ infoCard.info }}
            </strong>
          </p>
        </div>
      </div>

      <span class="is-size-5 font-weight-bold my-2"> Try Saying : </span>
      <div class="content">
        <span class="is-size-5">
          <i> {{ infoCard.text }}</i>
        </span>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCards",
  props: {
    infoCard: {
      type: Object,
      required: true,
    },
  },
  computed: {
    style() {
      return { backgroundColor: this.infoCard.color };
    },
  },
};
</script>
<style scoped>
* {
  color: #ffffff !important;
}
</style>