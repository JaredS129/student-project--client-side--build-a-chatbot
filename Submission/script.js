/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let level = 1;

const getBotReply = (msg) => {
  let name;
  let age;
  if (
    (level === 1 && msg.toLowerCase() === "sarah connor") ||
    (level === 1 && msg.toLowerCase() === "john connor")
  ) {
    window.alert("You Died, Game Over.");
    window.location.reload();
  }
  if (level === 1) {
    level = 2;
    // assign name variable
    name = msg;
    return `Nice to meet you ${name}. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?`;
  }
  if (level === 2) {
    level = 3;
    // assign age variable
    age = msg;
    return `${age}, great, and what is your average annual income?`;
  }

  return "Error unknown...";
};

export { getBotReply };
