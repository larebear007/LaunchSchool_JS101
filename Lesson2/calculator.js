// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

console.log('Welcome to Calculator!');

const rlsync = require('readline-sync');

let numOne = rlsync.question('What\'s the first number?  ');
let numTwo = rlsync.question('What\'s the second number?  ');
let operation = rlsync.question('What operation would you like to perform?\n\
1 - Add\n2 - Subtract\n3 - Multiply\n4 - Divide\n');

let answer;
if (operation === '1') {
  answer = Number(numOne) + Number(numTwo);
} else if (operation === '2') {
  answer = Number(numOne) - Number(numTwo);
} else if (operation === '3') {
  answer = Number(numOne) * Number(numTwo);
} else if (operation === '4') {
  answer = Number(numOne) / Number(numTwo);
} else {
  console.log('I didn\'t understand your numbers or operation. Try that again.');
}

console.log(`The result is ${answer}.`);