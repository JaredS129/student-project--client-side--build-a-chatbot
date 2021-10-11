/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let level = 1;
let dumb = 0;
let name;
let age;
let annual;
let weekly;

const getBotReply = (msg) => {
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
  if (level === 2 && msg >= 0 && msg < 130) {
    level = 3;
    // assign age variable
    age = msg;
    return `${age}, great, and what is your average annual income?`;
  }
  if (level === 2) {
    age = msg;
    dumb++;
    return `huh? ${age}?? I said tell me HOW OLD YOU ARE.`;
  }
  // converts dollar amount to number if user inputs $ symbol at start of string
  if (msg.charAt(0) === "$") {
    msg = msg.substr(1);
  }
  if (level === 3 && msg >= 0 && msg <= 20000) {
    level = 4;
    // assign annual variable
    annual = msg;
    return `$${annual}, hmm... maybe consider talking with a financial advise bot first and coming back later. How much are you able to save per week?`;
  }
  if (level === 3 && msg < 100000) {
    level = 4;
    // assign annual variable
    annual = msg;
    return `$${annual}, great! how much of that are you able to save per week?`;
  }
  if (level === 3 && msg >= 100000) {
    level = 4;
    // assign annual variable
    annual = msg;
    return `$${annual}? congratulations! you've come to the right place. how much of that are you able to save per week?`;
  }
  if (level === 3) {
    // assign annual variable
    annual = msg;
    dumb++;
    return `$${annual} is not an income, try typing a real number without symbols or commas`;
  }
  if (level === 4 && msg >= 0 && msg >= annual / 52) {
    weekly = msg;
    dumb++
    // assign weekly variable
    return `That doesn't quite make sense, your weekly savings should be less than your annual income divided by 52`;
  }
  if (level === 4 && msg >= 0) {
    level = 5;
    weekly = msg;
    // assign weekly variable
    return `Ok, so you earn $${annual} per year and you save $${weekly} of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick`;
  }
  if (level === 4) {
    weekly = msg;
    dumb++;
    return `$${weekly} is not a valid amount, try typing a real number without symbols or commas`;
  }

  return "Error unknown...";
};

export { getBotReply };
