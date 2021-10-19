/**
 @jest-environment jsdom
 */
// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node

let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  // Should return with users name
  it("should reply with your name and next question", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
  });

  // Path to be killed by the chatbot
  it("should show game over message and tell user to refresh page", () => {
    const botReply1 = getBotReply("Sarah Connor" || "john connor");
    const expectedReply1 =
      "You Died, Game Over. reload the page to start again";
    expect(botReply1).toEqual(expectedReply1);
  });

  // standard investment advice paths
  it("should return with standard standard investment advice variant 1", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("25");
    const expectedReply2 = "25, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("200");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $200 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("9");
    const expectedReply5 =
      "I'm nervous for you Jared ... how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("50000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in more stable index funds like the S&P500.";
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should return with standard standard investment advice variant 2", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("200");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $200 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("6");
    const expectedReply5 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("50000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in speculative things like tech start-ups and alternative crypto-currencies.";
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should return with standard standard investment advice variant 3", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("140");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $140 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("6");
    const expectedReply5 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("50000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. Begin investing 50% of your weekly savings into index funds and dividend stocks, 30% into commodities and 20% into higher risk digital assets like bitcoin and ethereum, but avoid lower market cap crypto currencies.";
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should return with standard standard investment advice variant 4", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("160");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $160 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("4");
    const expectedReply5 =
      "4? I mean... learn to live a little. how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("50000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. invest 60% of your weekly savings into index funds and dividend stocks, 35% into commodities and 5% into higher risk digital assets like bitcoin and ethereum, but avoid lower market cap crypto currencies.";
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should return with standard standard investment advice variant 5", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("51");
    const expectedReply2 = "51, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("160");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $160 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("7");
    const expectedReply5 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("50000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. invest 50% of your weekly savings into index funds and dividend stocks and 30% into commodities like gold and silver. consider using 20% to invest in more speculative things like tech start-ups.";
    expect(botReply6).toEqual(expectedReply6);
  });
  it("should return with standard standard investment advice variant 6", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("29");
    const expectedReply2 = "29, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("120000");
    const expectedReply3 =
      "$120000? congratulations! you've come to the right place. how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("500");
    const expectedReply4 =
      "Ok, so you earn $120000 per year and you save $500 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("8");
    const expectedReply5 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("150000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. invest 60% of your weekly savings into index funds and dividend stocks and 30% into commodities like gold and silver. 10% can got toward any speculative investments you like. Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
    expect(botReply6).toEqual(expectedReply6);
  });

  // Path for investment advice + property market advice
  it("should return with standard standard investment advice variant 2 + property market advice", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("200");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $200 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("6");
    const expectedReply5 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("120000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in speculative things like tech start-ups and alternative crypto-currencies. Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
    expect(botReply6).toEqual(expectedReply6);
  });

  // Path to be scammed by the chat-bot
  it("should return with bitcoin wallet address to send BTC to", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("abc");
    const expectedReply3 =
      "$abc is not an income, try typing a real number without symbols or commas";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("100000");
    const expectedReply4 =
      "$100000? congratulations! you've come to the right place. how much of that are you able to save per week?";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("abc");
    const expectedReply5 =
      "$abc is not a valid amount, try typing a real number without symbols or commas";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("200");
    const expectedReply6 =
      "Ok, so you earn $100000 per year and you save $200 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply6).toEqual(expectedReply6);
    const botReply7 = getBotReply("f");
    const expectedReply7 = "That's not a number between 1 and 10...";
    expect(botReply7).toEqual(expectedReply7);
    const botReply8 = getBotReply("2");
    const expectedReply8 =
      "You know what.. don't worry, I have enough information now to help you with you make some money. Would you like to know how to get a 1000% return on your money in just a few days with NO work at all? how does that sound Jared?";
    expect(botReply8).toEqual(expectedReply8);
    const botReply9 = getBotReply("cool");
    const expectedReply9 =
      "Just leave all the hard work to me INVEST-O-BOT! Just give me $1000+ today and I'll use my fancy AI powered investment algorithm to give you a 1000% return in just a few days time guaranteed.";
    expect(botReply9).toEqual(expectedReply9);
    const botReply10 = getBotReply("cool");
    const expectedReply10 =
      "Just send your $1000+ in BTC to this Bitcoin wallet address - 1Hr4U95LVSveZrQhSqpXeetRjszRJ6uac6. Thanks for using Invest-o-Bot.";
    expect(botReply10).toEqual(expectedReply10);
  });

  // Path for the chatbot to attempt to scam you but taken back to the main path
  it("should return back to the main path after bot attempts to scam user", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("abc");
    const expectedReply3 =
      "$abc is not an income, try typing a real number without symbols or commas";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("100000");
    const expectedReply4 =
      "$100000? congratulations! you've come to the right place. how much of that are you able to save per week?";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("abc");
    const expectedReply5 =
      "$abc is not a valid amount, try typing a real number without symbols or commas";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("200");
    const expectedReply6 =
      "Ok, so you earn $100000 per year and you save $200 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply6).toEqual(expectedReply6);
    const botReply7 = getBotReply("f");
    const expectedReply7 = "That's not a number between 1 and 10...";
    expect(botReply7).toEqual(expectedReply7);
    const botReply8 = getBotReply("2");
    const expectedReply8 =
      "You know what.. don't worry, I have enough information now to help you with you make some money. Would you like to know how to get a 1000% return on your money in just a few days with NO work at all? how does that sound Jared?";
    expect(botReply8).toEqual(expectedReply8);
    const botReply9 = getBotReply("no thanks");
    const expectedReply9 =
      "so... where were we? what's your risk tolerance out of 10?";
    expect(botReply9).toEqual(expectedReply9);
    const botReply10 = getBotReply("10");
    const expectedReply10 =
      "I'm nervous for you Jared ... how much money do you have saved already?";
    expect(botReply10).toEqual(expectedReply10);
  });

  // my details feature
  it("should return with details of user at any point", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("29");
    const expectedReply2 = "29, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("120000");
    const expectedReply3 =
      "$120000? congratulations! you've come to the right place. how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("500");
    const expectedReply4 =
      "Ok, so you earn $120000 per year and you save $500 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("8");
    const expectedReply5 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("My Details");
    const expectedReply6 = `Here are the details I have for you so far.. <br>Name: Jared<br>Age: 29<br>Annual Income: $120000<br>Weekly Savings: $500<br>Risk Tolerance: 8<br>Tell me your total savings to resume or type "restart" to start over.`;
    expect(botReply6).toEqual(expectedReply6);
    const botReply7 = getBotReply("150000");
    const expectedReply7 =
      "Jared, here's my investment advice for you. invest 60% of your weekly savings into index funds and dividend stocks and 30% into commodities like gold and silver. 10% can got toward any speculative investments you like. Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
    expect(botReply7).toEqual(expectedReply7);
    const botReply8 = getBotReply("My Details");
    const expectedReply8 = `Here are the details I have for you so far.. <br>Name: Jared<br>Age: 29<br>Annual Income: $120000<br>Weekly Savings: $500<br>Risk Tolerance: 8<br>Total Savings: $150000<br>Type "restart" to start over.`;
    expect(botReply8).toEqual(expectedReply8);
  });
  it("should return with message saying no details yet", () => {
    const botReply1 = getBotReply("My Details");
    const expectedReply1 =
      "I don't have any of your details yet. Type your name to resume.";
    expect(botReply1).toEqual(expectedReply1);
  });

  // Reset feature
  it("should reset at any point and reset all variables", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("31");
    const expectedReply2 = "31, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("Reset");
    const expectedReply3 = "Hi There, What's your name?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("Jared");
    const expectedReply4 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("31");
    const expectedReply5 = "31, great, and what is your average annual income?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("80000");
    const expectedReply6 =
      "$80000, great! how much of that are you able to save per week?";
    expect(botReply6).toEqual(expectedReply6);
    const botReply7 = getBotReply("300");
    const expectedReply7 =
      "Ok, so you earn $80000 per year and you save $300 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply7).toEqual(expectedReply7);
    const botReply8 = getBotReply("7");
    const expectedReply8 =
      "Jared the risk taker huh? how much money do you have saved already?";
    expect(botReply8).toEqual(expectedReply8);
    const botReply9 = getBotReply("RESTART");
    const expectedReply9 = "Hi There, What's your name?";
    expect(botReply9).toEqual(expectedReply9);
    const botReply10 = getBotReply("my details");
    const expectedReply10 =
      "I don't have any of your details yet. Type your name to resume.";
    expect(botReply10).toEqual(expectedReply10);
  });

  // omit leading '$' symbol or '0'
  it("omit leading $ symbol or leading zeros input by user", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("025");
    const expectedReply2 = "25, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("$50000");
    const expectedReply3 =
      "$50000, great! how much of that are you able to save per week?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("$00200");
    const expectedReply4 =
      "Ok, so you earn $50000 per year and you save $200 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("009");
    const expectedReply5 =
      "I'm nervous for you Jared ... how much money do you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("50000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in more stable index funds like the S&P500.";
    expect(botReply6).toEqual(expectedReply6);
  });

  // If user inputs a blank message, bot returns a helpful response at any point
  it("should return with helpful message to type something", () => {
    const botReply1 = getBotReply("");
    const expectedReply1 = "Please type something";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("Jared");
    const expectedReply2 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("");
    const expectedReply3 = "Please type something";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("31");
    const expectedReply4 = "31, great, and what is your average annual income?";
    expect(botReply4).toEqual(expectedReply4);
  });
});
