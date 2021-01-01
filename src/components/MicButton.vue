<template>
  <div class="mic-container position-relative">
    <div class="micBtn-root">
      <!-- <styled-title /> -->
      <div class="micBtn pulse-container">
        <div
          class="micBtn-img"
          :class="{ 'pulse blue': isUserSpeaking }"
          data-tooltip="Click to search"
          @click="onMicClick"
        >
          <div class="icon">
            <img
              src="/assets/images/microphone.svg"
              style="color: white"
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
import { getUserVoiceCommand } from "../helpers";

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
    onMicClick() {
      // If user is speaking and clicks the mic button again
      // then we will stop the voice recognition
      if (this.isUserSpeaking) {
        this.stopSpeechRecognition();
        return;
      }

      //Play's mic sound
      this.playMicVoice();

      // Starts speech recognition
      this.onSpeech();

      this.setIsUserSpeaking(true);
    },
    /**
     * Voice Recognition
     * @description Starts user speech recognition
     */
    onSpeech() {
      try {
        var SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;

        // Initialise speech recognition
        this.recognition = new SpeechRecognition();

        //
        this.recognition.continuous = true;

        /**
         * If false, the recording will stop after a few seconds of silence.
         * When it is set to true, the silence period is longer approx 15 seconds),
         *  allows us to keep recording even when the user pauses.
         */
        this.recognition.start();

        /**
         * Runs every time when speech api captures user audion into text line
         */
        this.recognition.onresult = (event) => {
          // We only need the current (Latest) one.
          var current = event.resultIndex;

          const speechToText = event.results[current][0].transcript;
          getUserVoiceCommand(speechToText);
          console.log("speechToText :>> ", speechToText);
        };

        /**
         * When speech recognition starts
         */
        this.recognition.onstart = function () {
          console.log(
            "Voice recognition activated. Try speaking into the microphone."
          );
        };

        /**
         * When speech recognition ends
         */
        this.recognition.onspeechend = () => {
          this.setIsUserSpeaking(false);
          console.log(
            "You were quiet for a while so voice recognition turned itself off."
          );
        };

        /**
         * When an error is occured while speech recognition is working
         */
        this.recognition.onerror = (event) => {
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
     * Sets isUserSpeaking data property of the component
     * @param {Boolean} val - Boolean value to set for isUserSpeaking property
     */
    setIsUserSpeaking(val) {
      if (typeof val !== "boolean") return;
      this.isUserSpeaking = val;
    },
    /**
     * Plays mic audio sound when user clicks on the mic button
     */
    playMicVoice() {
      var sound = new Audio(soundMp3);
      sound.play();
    },
  },
};
</script>

<style lang="scss" scoped></style>
