/**
 * Determines whether speech synthesis is supported or not
 * @returns {Boolean}
 */
export const isSpeechSynthesisSupported = () => "speechSynthesis" in window;

/**
 * Reads the text to the user
 */
export const activateSpeech = () => {
  if (isSpeechSynthesisSupported()) {
    // Speech Synthesis supported 🎉
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Good Morning";
    window.speechSynthesis.speak(msg);
  } else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }
};
