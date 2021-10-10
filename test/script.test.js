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
});
