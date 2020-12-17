<template>
  <div class="micBtn-root">
    <div class="micBtn">
      <div
        class="micBtn-img"
        data-tooltip="Click to search"
        @click="getUserMedia"
        @mousedown="onBtnMouseDown"
      >
        <span class="icon">
          <img
            src="/assets/images/microphone.svg"
            style="color:white"
            alt="Microphone"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import annyang from "annyang";

export default {
  methods: {
    onBtnMouseDown(event) {
      console.log("onBtnMouseDown", event);
    },
    /**
     * Listens to the user speech
     */
    getUserMedia() {
      const commands = {
        hello: () => {
          alert("Hello world!");
        },
      };

      // Add commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
    },
    getNews(source) {
      console.log("getNews :>> ", source);
    },
  },
};
</script>

<style lang="scss" scoped>
.micBtn-root {
  right: 40px;
  bottom: 40px;
  position: fixed;

  .micBtn {
    bottom: 37px;
    position: fixed;
    transition: all 300ms ease 0s;
    right: 57px;

    .micBtn-img {
      width: 64px;
      min-width: 64px;
      max-width: 64px;
      min-height: 64px;
      height: 64px;
      max-height: 64px;
      color: rgb(255, 255, 255);
      position: absolute;
      bottom: 0px;
      right: 0px;
      border-radius: 50%;
      box-shadow: rgba(0, 75, 144, 0.35) 0px 8px 10px 0px;
      text-align: center;
      transition: all 0.4s ease-in-out 0s;
      z-index: 4;
      background-image: linear-gradient(
        122deg,
        rgb(34, 203, 255),
        rgb(25, 149, 255)
      );
      cursor: pointer;

      &:hover {
        transform: scale(1.11111);
        background-image: linear-gradient(
          122deg,
          rgba(0, 70, 255, 0.95),
          rgba(0, 156, 255, 0.95)
        );
      }

      img {
        min-height: 60%;
        height: 80%;
        max-height: 60%;
        min-width: 100%;
        width: 100%;
        max-width: 100%;
        top: 20%;
        left: 0%;
        position: absolute;
        pointer-events: none;
        border-radius: 50%;
        opacity: 1;
      }
    }
  }
}
</style>
