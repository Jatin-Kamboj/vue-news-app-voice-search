<template>
  <!------------------------  Vue Router  -------------------------->
  <!-- <router-view /> -->
  <div class="field">
    <div class="control">
      <input class="input is-primary" type="text" placeholder="Primary input" />
    </div>
  </div>
</template>

<script>
// import alanBtn from "@alan-ai/alan-sdk-web";
import "@/assets/styles/main.scss";

export default {
  beforeMount() {
    if ("speechSynthesis" in window) {
      // Speech Synthesis supported 🎉
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Good Morning";
      window.speechSynthesis.speak(msg);
    } else {
      // Speech Synthesis Not Supported 😣
      alert("Sorry, your browser doesn't support text to speech!");
    }
  },
  methods: {
    initialiseAlan() {
      // /**
      //  * Integerates alan api and adds alan button
      //  */
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

<style lang="scss"></style>
