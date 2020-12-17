<template>
  <div class="mic-container">
    <div class="micBtn-root">
      <!-- <styled-title /> -->
      <div class="micBtn pulse-container">
        <div
          class="micBtn-img"
          :class="{ 'pulse blue': isUserSpeaking }"
          data-tooltip="Click to search"
          @mousedown="onBtnMouseDown"
          @click="onMicClick"
        >
          <div class="icon">
            <img
              src="/assets/images/microphone.svg"
              style="color:white"
              alt="Microphone"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { StyledTitle } from "./styledComponents";
import soundMp3 from "../assets/sound/mic_click_sound.mp3";
export default {
  components: {
    // StyledTitle,
  },
  data() {
    return {
      isUserSpeaking: false,
      recognition: null,
    };
  },
  methods: {
    onBtnMouseDown() {
      // console.log("onBtnMouseDown", event);
    },
    onMicClick() {
      // If user is speaking an clicks the mic icon again
      // the we will stop the voice recognition
      if (this.isUserSpeaking) {
        this.stopSpeechRecognition();
        return;
      }
      
      //Play's sound
      this.playMicVoice();

      // Starts speech recognition
      this.onSpeech();

      this.setIsUserSpeaking(true);
    },
    /**
     * Starts user speech recognition
     */
    onSpeech() {
      try {
        var SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        // const recognition = new window.webkitSpeechRecognition();
        this.recognition.continuous = true;

        /**
         * If false, the recording will stop after a few seconds of silence.
         * When it is set to true, the silence period is longer approx 15 seconds),
         *  allows us to keep recording even when the user pauses.
         */
        this.recognition.start();

        /**
         * Runs every time the Speech APi captures a line
         */
        this.recognition.onresult = (event) => {
          // We only need the current one.
          var current = event.resultIndex;
          const speechToText = event.results[current][0].transcript;
          console.log("speechToText :>> ", speechToText);
        };

        /**
         * When speech recognition starts
         */
        this.recognition.onstart = function() {
          console.log(
            "Voice recognition activated. Try speaking into the microphone."
          );
        };

        /**
         * When speech recognition ends
         */
        this.recognition.onspeechend = function() {
          this.isUserSpeaking = false;
          console.log(
            "You were quiet for a while so voice recognition turned itself off."
          );
        };

        /**
         * When a n error is occured while voice recognition is working
         */
        this.recognition.onerror = function(event) {
          if (event.error == "no-speech") {
            console.error("No speech was detected. Try again.");
          }
        };
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
    /**
     * Stops user voice recognition
     * @description stops the voice recognition
     */
    stopSpeechRecognition() {
      this.recognition.stop();
      this.setIsUserSpeaking(false);
    },
    /**
     * Sets isUserSpeaking property of the component
     * @param {Boolean} val Value to set for isUserSpeaking property
     */
    setIsUserSpeaking(val) {
      if (typeof val !== "boolean") return;
      this.isUserSpeaking = val;
    },
    /**
     * Plays mic audio sound when user clicks on the mic icon
     */
    playMicVoice() {
      var sound = new Audio(soundMp3);
      sound.play();
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

.pulse-container {
  display: flex;

  @keyframes pulse-blue {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
    }
  }

  .pulse {
    background: black;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 10px;
    height: 64px;
    width: 64px;
    transform: scale(1);
    animation: pulse-black 2s infinite;
  }

  .pulse.blue {
    background: rgba(52, 172, 224, 1);
    box-shadow: 0 0 0 0 rgba(52, 172, 224, 1);
    animation: pulse-blue 2s infinite;
  }
}
</style>
