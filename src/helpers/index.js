/**
 * getVoiceCommand
 * @description returns the voice commands object
 * @param {String} input Input voice command
 * @param {String} output Output voice
 * @returns {Object} Voice commands object
 */
export const getVoiceCommand = (input, output = null) => ({ input, output });
