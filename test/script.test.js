// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
/**
 * @jest-environment jsdom
 */
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with your name and next question", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
  });
  it("should reset conversation and variables", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply1).toEqual(expectedReply1);
    const botReply2 = getBotReply("35");
    const expectedReply2 = "35, great, and what is your average annual income?";
    expect(botReply2).toEqual(expectedReply2);
    const botReply3 = getBotReply("Reset" || "Restart");
    const expectedReply3 = "Hi There, What's your name?";
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("Bob");
    const expectedReply4 =
      "Nice to meet you Bob. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";
    expect(botReply4).toEqual(expectedReply4);
    const botReply5 = getBotReply("50");
    const expectedReply5 = "50, great, and what is your average annual income?";
    expect(botReply5).toEqual(expectedReply5);
  });

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
      "I'm nervous for you Jared ... how much money to you have saved already?";
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
      "Jared the risk taker huh? how much money to you have saved already?";
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
      "Jared the risk taker huh? how much money to you have saved already?";
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
      "Jared the risk taker huh? how much money to you have saved already?";
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
      "Jared the risk taker huh? how much money to you have saved already?";
    expect(botReply5).toEqual(expectedReply5);
    const botReply6 = getBotReply("150000");
    const expectedReply6 =
      "Jared, here's my investment advice for you. invest 60% of your weekly savings into index funds and dividend stocks and 30% into commodities like gold and silver. 10% can got toward any speculative investments you like. Also consider investing in property if the market in your area permits a low interest and short term mortgage.";
    expect(botReply6).toEqual(expectedReply6);
  });
});

// it("should show window alert and refresh page", () => {
//   const botReply1 = getBotReply("Sarah Connor");
//   const expectedReply1 =
//   window.alert("You Died, Game Over.");
//   window.location.reload();
//   // Uncomment the following line and update your expectation
//   expect(botReply1).toEqual(expectedReply1);
// });
