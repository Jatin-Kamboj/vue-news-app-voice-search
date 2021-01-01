<template>
  <app-layout />
  <!-- Vue Router -->
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { AppLayout } from "@/layout";
import "@/assets/styles/main.scss";

export default {
  components: {
    AppLayout,
  },
};
</script>

<style lang="scss"></style>
