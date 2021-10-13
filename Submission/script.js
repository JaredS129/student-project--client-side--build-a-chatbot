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
let risk;
let savings;

const getBotReply = (msg) => {
  if (msg.toLowerCase() === "restart" || msg.toLowerCase() === "reset") {
    level = 1;
    dumb = 0;
    name = undefined;
    age = undefined;
    annual = undefined;
    weekly = undefined;
    risk = undefined;
    savings = undefined;
    return "Hi There, What's your name?";
  }
  if (msg.toLowerCase() === "my details") {
    const nameStr = `Name: ${name}`;
    const ageStr = `, Age: ${age}`;
    const annualStr = `, Annual Income: $${annual}`;
    const weeklyStr = `, Weekly Savings: $${weekly}`;
    const riskStr = `, Risk Tolerance: ${risk}`;
    const savingsStr = `, Total Savings: $${savings}`;
    if (name === undefined) {
      return "I don't have any of your details yet. Type your name to resume.";
    }
    if (age === undefined) {
      return `Here are the details I have for you so far.. ${nameStr}. Tell me your age to resume or type "restart" to start over.`;
    }
    if (annual === undefined) {
      return `Here are the details I have for you so far.. ${nameStr}${ageStr}. Tell me your annual income to resume or type "restart" to start over.`;
    }
    if (weekly === undefined) {
      return `Here are the details I have for you so far.. ${nameStr}${ageStr}${annualStr}. Tell me how much you save per week to resume or type "restart" to start over.`;
    }
    if (risk === undefined) {
      return `Here are the details I have for you so far.. ${nameStr}${ageStr}${annualStr}${weeklyStr}. Tell me your Risk Tolerance (1 - 10) to resume or type "restart" to start over.`;
    }
    if (savings === undefined) {
      return `Here are the details I have for you so far.. ${nameStr}${ageStr}${annualStr}${weeklyStr}${riskStr}. Tell me your total savings to resume or type "restart" to start over.`;
    }
    return `Here are the details I have for you so far.. ${nameStr}${ageStr}${annualStr}${weeklyStr}${riskStr}${savingsStr}. Type "restart" to start over.`;
  }
  if (
    (level === 1 && msg.toLowerCase() === "sarah connor") ||
    (level === 1 && msg.toLowerCase() === "john connor")
  ) {
    window.alert("You Died, Game Over.");
    window.location.reload();
  }
  // converts dollar amount to number if user inputs $ symbol at start of string
  if (msg.charAt(0) === "$") {
    msg = msg.substr(1);
  }
  // converts to base 10 number if number starts with zeros
  if (msg.charAt(0) === "0") {
    msg = parseInt(msg, 10);
  }
  if (level === 1) {
    level = 2;
    // assign name variable
    name = msg;
    return `Nice to meet you ${name}. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?`;
  }
  if (level === 2 && msg > 10 && msg < 130) {
    level = 3;
    // assign age variable
    age = msg;
    return `${age}, great, and what is your average annual income?`;
  }
  if (level === 2 && msg >= 0 && msg <= 10) {
    level = 3;
    age = msg;

    return `${age}... do you think you might be a little young to be investing? anyhow, how much do you earn per year?`;
  }
  if (level === 2) {
    age = msg;
    dumb++;
    return `huh? ${age}?? I said tell me HOW OLD YOU ARE.`;
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
    dumb++;
    // assign weekly variable
    return `That doesn't quite make sense, your weekly savings should be less than your annual income divided by 52`;
  }
  if (dumb === 3) {
    dumb++;
    return `You know what.. don't worry, I have enough information now to help you with you make some money. Would you like to know how to get a 1000% return on your money in just a few days with NO work at all? how does that sound ${name}?`;
  }
  if (dumb === 4) {
    if (msg.toLowerCase() === "yes") {
      dumb++;
      return `Just leave all the hard work to me INVEST-O-BOT! Just give me $1000+ today and I'll use my fancy AI powered investment algorithm to give you a 1000% return in just a few days time guaranteed.`;
    }
    dumb = 0;
    if (level === 3) {
      return "so... where were we? how much was your annual income?";
    }
    if (level === 4) {
      return "so... where were we? how much are you able to save per week?";
    }
    if (level === 5) {
      return "so... where were we? what's your risk tolerance out of 10?";
    }
    if (level === 6) {
      return "so... where were we? how much do you have saved in total?";
    }
  }
  if (dumb === 5) {
    return `Just send your $1000+ in BTC to this Bitcoin wallet address - 1Hr4U95LVSveZrQhSqpXeetRjszRJ6uac6. Thanks for using Invest-o-Bot.`
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
  if (level === 5 && msg <= 1) {
    level = 6;
    risk = msg;
    // assign risk variable
    return "OK Mr Krabs... how much money do you have saved already?";
  }
  if (level === 5 && msg <= 5) {
    level = 6;
    risk = msg;
    // assign risk variable
    return `${risk}? I mean... learn to live a little. how much money do you have saved already?`;
  }
  if (level === 5 && msg <= 8) {
    level = 6;
    risk = msg;
    // assign risk variable
    return `${name} the risk taker huh? how much money to you have saved already?`;
  }
  if (level === 5 && msg <= 10) {
    level = 6;
    risk = msg;
    // assign risk variable
    return `I'm nervous for you ${name} ... how much money to you have saved already?`;
  }
  if (level === 5) {
    dumb++;
    // assign risk variable
    return `That's not a number between 1 and 10...`;
  }
  if ((level === 6 && msg < 0) || (level === 6 && isNaN(msg))) {
    dumb++;
    return "That's not an amount... try typing a more basic number without symbols or commas.";
  }
  if (level === 6) {
    // assign savings variable
    savings = msg;
    let finalOutput;
    if (level === 6 && msg >= 0 && risk >= 9 && age < 30 && savings < 70000) {
      level = 7;
      finalOutput = `${name}, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in more stable index funds like the S&P500.`;
      return finalOutput;
    }
    if (
      level === 6 &&
      msg >= 0 &&
      weekly <= 150 &&
      age < 40 &&
      savings < 70000
    ) {
      level = 7;
      finalOutput = `${name}, here's my investment advice for you. Begin investing 50% of your weekly savings into index funds and dividend stocks, 30% into commodities and 20% into higher risk digital assets like bitcoin and ethereum, but avoid lower market cap crypto currencies.`;
      return finalOutput;
    }
    if (level === 6 && msg >= 0 && weekly > 150 && risk < 5 && age < 50) {
      level = 7;
      finalOutput = `${name}, here's my investment advice for you. invest 60% of your weekly savings into index funds and dividend stocks, 35% into commodities and 5% into higher risk digital assets like bitcoin and ethereum, but avoid lower market cap crypto currencies.`;
      if (savings >= 100000) {
        finalOutput =
          finalOutput +
          " Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
      }
      return finalOutput;
    }
    if (level === 6 && msg >= 0 && weekly > 150 && risk >= 5 && age >= 50) {
      level = 7;
      finalOutput = `${name}, here's my investment advice for you. invest 50% of your weekly savings into index funds and dividend stocks and 30% into commodities like gold and silver. consider using 20% to invest in more speculative things like tech start-ups.`;
      if (savings >= 100000) {
        finalOutput =
          finalOutput +
          " Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
      }
      return finalOutput;
    }
    if (level === 6 && msg >= 0 && risk >= 6 && age > 30) {
      level = 7;
      finalOutput = `${name}, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in speculative things like tech start-ups and alternative crypto-currencies.`;
      if (savings >= 100000) {
        finalOutput =
          finalOutput +
          " Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
      }
      return finalOutput;
    }
    if (level === 6) {
      level = 7;
      finalOutput = `${name}, here's my investment advice for you. invest 60% of your weekly savings into index funds and dividend stocks and 30% into commodities like gold and silver. 10% can got toward any speculative investments you like.`;
      if (savings >= 100000) {
        finalOutput =
          finalOutput +
          " Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
      }
      return finalOutput;
    }
  }
  if (level === 7) {
    return "type restart to start over";
  }

  return "I didn't quite get that, try a more simple response.";
};

export { getBotReply };
