// added feature: json file with message configurations

const MESSAGES = require('./calculator_messages.json');

const rlsync = require('readline-sync');
let prompt = (message) => console.log(`=> ${message}`);
let invalidNumber = (num) => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};
let invalidOperation = (operation) => {
  let validOperations = [1, 2, 3, 4];
  return !validOperations.includes(Number(operation));
};

let repeat = true;
while (repeat) {
  prompt(MESSAGES['welcome']);

  let numOne = rlsync.question(prompt(MESSAGES['firstNumber']));
  while (invalidNumber(numOne)) {
    prompt(MESSAGES['validNumber']);
    numOne = rlsync.question(prompt(MESSAGES['firstNumber']));
  }

  let numTwo = rlsync.question(prompt(MESSAGES['secondNumber']));
  while (invalidNumber(numTwo)) {
    prompt(MESSAGES['validNumber']);
    numTwo = rlsync.question(prompt(MESSAGES['secondNumber']));
  }

  let operation = rlsync.question(prompt(MESSAGES['operation']));
  while (invalidOperation(operation)) {
    prompt(MESSAGES['validOperation']);
    operation = rlsync.question(prompt(MESSAGES['operation']));
  }

  let answer;
  switch (operation) {
    case '1':
      answer = Number(numOne) + Number(numTwo);
      break;
    case '2':
      answer = Number(numOne) - Number(numTwo);
      break;
    case '3':
      answer = Number(numOne) * Number(numTwo);
      break;
    case '4':
      answer = Number(numOne) / Number(numTwo);
      break;
  }

  prompt(`The result is ${answer}`);

  calcAgain = rlsync.question(prompt(MESSAGES['repeat']));
  if (calcAgain === 'yes' || calcAgain === 'y') {
    repeat = true;
    continue;
  } else if (calcAgain === 'no' || calcAgain === 'n') {
    repeat = false;
    prompt(MESSAGES['goodbye']);
  } else {
    repeat = false;
    prompt(MESSAGES['badInputGoodbye']);
  }
}