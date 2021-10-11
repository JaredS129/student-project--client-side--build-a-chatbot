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
  it("should reply with your name and next question", () => {
    const botReply1 = getBotReply("Jared");
    const expectedReply1 =
      "Nice to meet you Jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?";

    // Uncomment the following line and update your expectation
    expect(botReply1).toEqual(expectedReply1);
  });
  it("should return with standard standard investment advice", () => {
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
  });
  // it("should show window alert and refresh page", () => {
  //   const botReply1 = getBotReply("Sarah Connor");
  //   const expectedReply1 =
  //   window.alert("You Died, Game Over.");
  //   window.location.reload();
  //   // Uncomment the following line and update your expectation
  //   expect(botReply1).toEqual(expectedReply1);
  // });
});
