import { getVoiceCommand } from "@/helpers";
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

export default Object.freeze(voiceCommands);
