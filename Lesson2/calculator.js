// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const rlsync = require('readline-sync');
let prompt = (message) => console.log(`=> ${message}`);
let invalidNumber = (num) => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};
let invalidOperation = (operation) => {
  let validOperations = [1, 2, 3, 4];
  return !validOperations.includes(Number(operation));
};

prompt('Welcome to Calculator!');

let numOne = rlsync.question(prompt('What\'s the first number?  '));
while (invalidNumber(numOne)) {
  prompt('Please enter a valid number.');
  numOne = rlsync.question(prompt('What\'s the first number?  '));
}

let numTwo = rlsync.question(prompt('What\'s the second number?  '));
while (invalidNumber(numTwo)) {
  prompt('Please enter a valid number.');
  numTwo = rlsync.question(prompt('What\'s the second number?  '));
}

let operation = rlsync.question(prompt('What operation would you like to perform?\n\
1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide\n'));
while (invalidOperation(operation)) {
  prompt('Please enter a valid operation option: 1, 2, 3, or 4.');
  operation = rlsync.question(prompt('What operation would you like to perform?\n\
  1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide\n'));
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
  default:
    prompt('I didn\'t understand your numbers or operation. Try that again.');
}


prompt(`The result is ${answer}.`);