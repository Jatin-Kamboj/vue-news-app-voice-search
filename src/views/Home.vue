<template>
  <section><MicButton /></section>
</template>

<script>
import alanBtn from "@alan-ai/alan-sdk-web";
import { MicButton } from "@/components";

export default {
  components: {
    MicButton,
  },
  beforeMount() {
    this.initialiseAlan();
  },
  methods: {
    initialiseAlan() {
      /**
       * Integerates alan api and adds alan button
       */
      // alanBtn({
      //   key: process.env.VUE_APP_ALAN_API_KEY,
      //   onCommand: ({ command }) => {
      //     // Call the client code that will react to the received command
      //     if (command === "testcommand") {
      //       alert("Played");
      //     }
      //   },
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
