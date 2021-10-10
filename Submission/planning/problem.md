# Invest-O-Bot

## Problem statement

Invest-o-bot will give investment advice to anybody based on variables like age, risk tolerance, annual income, weekly savings amount and total amount already saved.

## Inputs, processes and outputs

- if name is not Sarah Connor or John Connor, bot should reply with your name.
- if name is Sarah Connor or John Connor, and alert will be displayed letting you know you died. image of the bot will also change.
- if you complete the standard path, bot should give you some investment advice based on your age, annual salary, weekly savings and total savings.
- if you have already saved more than $100k bot should also suggest looking at the property market in addition to the standard investment advice.
- if you answer too many questions with invalid answers, bot will attempt to scam you because it believes you're dumb.

## Test scenarios

### Path for standard investment advice

- Start: Hi There, What's your name?
- Input: Jared
- Output: Nice to meet you jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?
- Input: 31
- Output: 31, great, and what is your average annual income?
- Input: $80,000
- Output: $80,000, great! how much of that are you able to save per week?
- Input: $300
- Output: Ok, so you earn $80,000 per year and you save $300 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick.)
- Input: 7
- Output: Jared the risk taker huh? how much money to you have saved already?
- Input: $50,000
- Final Output: ${name}, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in speculative things like tech start-ups and alternative crypto-currencies

### Path for investment advice + property market advice

- Start: Hi There, What's your name?
- Input: Jared
- Output: Nice to meet you jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?
- Input: 31
- Output: 31, great, and what is your average annual income?
- Input: $80,000
- Output: $80,000, great! how much of that are you able to save per week?
- Input: $300
- Output: Ok, so you earn $80,000 per year and you save $300 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick.)
- Input: 7
- Output: Jared the risk taker huh? how much money to you have saved already?
- Input: $100,000
- Final Output: ${name}, here's my investment advice for you. Feel free to invest in meme stocks like GameStop and AMC as well as very high risk digital assets like dogecoin, but only with 10% of your weekly savings at most. 45% can be invested mildly volatile things like tech stocks and 30% in more stable crypto currencies like bitcoin. The remaining 20% can be invested in speculative things like tech start-ups and alternative crypto-currencies. Also consider investing in property if the market in your area permits a low interest and short term mortgage.

### Path to be scammed by the chat-bot

- Start: Hi There, What's your name?
- Input: Jared
- Output: Nice to meet you jared. I'm Invest-o-bot (not a financial advisor). I'd like to assist you with some investment advice. First I will need some information about you. To start, how old are you?
- Input: ABC
- Output: huh? ABC?? That's not an age. Try typing a number.
- Input: 31
- Output: 31, great, and what is your average annual income?
- Input: ABC
- Output: ABC is not a income.. ... try typing a real number without letters or symbols
- Input: $80,000
- Output: $80,000, great! how much of that are you able to save per week?
- Input: $300
- Output: Ok, so you earn $80,000 per year and you save $300 of that per week. now for the more personal questions... on a scale from 1 - 10, how much do you enjoy taking risks? (10 = show me the meme stocks, 1 = losing $1 makes me feel sick.)
- Input: ABC
- Output: ... That's not a number between 1 and 10
- Input: 5
- Output: You know what.. don't worry, I have enough information now to help you with you make some money. Would you like to know how to get a 1000% return on your money in just a few days with NO work at all? how does that sound Jared?
- Input: Yes
- Output: Just leave all the hard work to me INVEST-O-BOT! Just give me $1000+ today and I'll use my fancy AI powered investment algorithm to give you a 1000% return in just a few days time.
- Input: OK
- Output: Just send your $1000+ in BTC to this Bitcoin wallet address. Thanks for using Invest-o-Bot.

### Path to be killed by the chat bot

- Start: Hi There, What's your name?
- Input: Sarah Connor
- Output: (alert) You Died, Game Over.
