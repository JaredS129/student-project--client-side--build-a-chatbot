/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

const getBotReply = (msg) => {
  let level = 1;
  let name;
  if (level === 1) {
    level = 2;
    // assign name variable
    name = msg;
    return `Nice to meet you ${name}. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?`;
  }
  return "Error unknown...";
};

export { getBotReply };
