/**
 * Determines whether speech synthesis is supported or not
 * @returns {Boolean}
 */
export const isSpeechSynthesisSupported = () => "speechSynthesis" in window;

/**
 * Reads the text to the user
 */
export const activateSpeech = (message) => {
  if (isSpeechSynthesisSupported()) {
    // Speech Synthesis supported 🎉
    var msg = new SpeechSynthesisUtterance();
    msg.text = message;
    console.log(message);
    window.speechSynthesis.speak(msg);
  } else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }
};

/**
 * Returns news api key
 */
export const getNewsApiKey = () => process.env.VUE_APP_NEWS_APP_API_KEY;
