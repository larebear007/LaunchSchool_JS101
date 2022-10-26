// calculator.js
  // added feature: repeat calculator prompting
  // added feature: json file dependency - prompt messages
  // added feature: spanish language option


const LANGUAGE = 'es';
const MESSAGES = require('./calculator_messages.json');
const RLSYNC = require('readline-sync');

let prompt = (lang, key, extraMessage) => {
  if (String(extraMessage)) {
    console.log(`=> ${MESSAGES[lang][key]}` + extraMessage + '.');
  } else {
  console.log(`=> ${MESSAGES[lang][key]}`);
  }
}

// let prompt = (lang, [key]) => {
//   console.log(`=> ${MESSAGES[lang][key]}`);
// }
let invalidNumber = (num) => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};
let invalidOperation = (operation) => {
  let validOperations = [1, 2, 3, 4];
  return !validOperations.includes(Number(operation));
};

let repeat = true;
while (repeat) {
  prompt(LANGUAGE, 'welcome');

  let numOne = RLSYNC.question(prompt(LANGUAGE, 'firstNumber'));
  while (invalidNumber(numOne)) {
    prompt(LANGUAGE, 'validNumber');
    numOne = RLSYNC.question(prompt(LANGUAGE, 'firstNumber'));
  }

  let numTwo = RLSYNC.question(prompt(LANGUAGE, 'secondNumber'));
  while (invalidNumber(numTwo)) {
    prompt(LANGUAGE, 'validNumber');
    numTwo = RLSYNC.question(prompt(LANGUAGE, 'secondNumber'));
  }

  let operation = RLSYNC.question(prompt(LANGUAGE, 'operation'));
  while (invalidOperation(operation)) {
    prompt(LANGUAGE, 'validOperation');
    operation = RLSYNC.question(prompt(LANGUAGE, 'operation'));
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

  prompt(LANGUAGE, 'result', answer);

  calcAgain = RLSYNC.question(prompt(LANGUAGE, 'repeat'));
  
  switch (LANGUAGE) {
    case 'en':
      if (calcAgain === 'yes' || calcAgain === 'y') {
        repeat = true;
        continue;
      } else if (calcAgain === 'no' || calcAgain === 'n') {
        repeat = false;
        prompt(LANGUAGE, 'goodbye');
      } else {
        repeat = false;
        prompt(LANGUAGE, 'badInputGoodbye');
      };
      break;
    case 'es':
      if (calcAgain === 'si' || calcAgain === 's') {
        repeat = true;
        continue;
      } else if (calcAgain === 'no' || calcAgain === 'n') {
        repeat = false;
        prompt(LANGUAGE, 'goodbye');
      } else {
        repeat = false;
        prompt(LANGUAGE, 'badInputGoodbye');
      };
      break;
  }
  
}

/* the project specs did not ask me to handle multi-language input, 
specifically when the program asks the user if they'd like to perform
another calculation. I added a switch statement to handle the 'en' or
'es' language cases. This should be noted in the solution for the 
assignment */