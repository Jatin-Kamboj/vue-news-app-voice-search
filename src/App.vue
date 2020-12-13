<template>
  <Header />
  <!-- Vue Router -->
  <router-view />
</template>

<script>
import { Header } from "@/components/layout";
import "@/assets/styles/main.scss";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss"></style>
