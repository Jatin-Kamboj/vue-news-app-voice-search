/**
 * getVoiceCommand
 * @description returns the voice commands object
 * @param {String} input Input voice command
 * @param {String} output Output voice
 * @returns {Object} Voice commands object
 */
const getVoiceCommand = (input, output = null) => ({ input, output });

/**
 * All the voice commands understandable to the applications
 * @type {Object}
 */
const voiceCommands = {
  appIntroduction: getVoiceCommand(
    "What does this app do",
    "This an voice activated news app You can search for news over here"
  ),
  searchNews: getVoiceCommand(
    "Give me the news from *tag",
    "Here are the latest news from"
  ),
};

export default voiceCommands;
