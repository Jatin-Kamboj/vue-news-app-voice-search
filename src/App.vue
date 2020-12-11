<template>
  <!------------------------  Vue Router  -------------------------->
  <!-- <router-view /> -->
  <div>App</div>
</template>

<script>
import alanBtn from "@alan-ai/alan-sdk-web";
export default {
  beforeMount() {
    alanBtn({
      key: process.env.VUE_APP_ALAN_API_KEY,
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  },
};
</script>

<style lang="scss"></style>
