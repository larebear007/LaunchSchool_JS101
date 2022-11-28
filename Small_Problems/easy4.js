// 1. How old is Teddy?
console.log('-- Question 1 --');

let randomAge = (min, max) => {
  return Math.round(Math.random() * (max + 1 - min) + min);
} 

console.log(`Teddy is ${randomAge(20, 120)} years old!`);

// 2. Searching 101 -- commented out
console.log('\n-- Question 2 --');

const rlsync = require('readline-sync');

// let searchNumbers = (num) => {
  // let numArray = [];
  // let lastEntry;
  // for (i = 1; i <= num; i += 1) {
  //   let input = rlsync.question('Enter a number: ');
  //   if (i === num) {
  //     lastEntry = input;
  //     break;
  //   }
  //   numArray.push(input);
  // }

  // if (numArray.includes(lastEntry)) {
  //   return `The number ${lastEntry} appears in ${numArray}`;
  // } else {
  //   return `The number ${lastEntry} does not appears in ${numArray}.`;
  // }
// }

// console.log(searchNumbers(6));

// 3. When will I retire?
console.log('\n-- Question 3 --');

// let displayRetirement = () => {
//   let currentYear = parseInt(rlsync.question('What year is it? '));
//   let currentAge = parseInt(rlsync.question('What is your age? '));
//   let retirementAge = parseInt(rlsync.question('At what age would you like to retire? '));
//   let yearDiff = retirementAge - currentAge;
  
//   let retirementMessage = `It is ${currentYear}. You will retire in \
// ${currentYear + yearDiff}.\nYou have only ${yearDiff} years of work to go!`;

//   console.log(retirementMessage);
// }

// displayRetirement();

// 4. Palindromic Strings (part 1)
console.log('\n-- Question 4 --');

let isPalindrome = (string) => string === string.split('').reverse().join('');

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));

// 5.
console.log('\n-- Question 5 --');

// 6.
console.log('\n-- Question 6 --');

// 7.
console.log('\n-- Question 7 --');

// 8.
console.log('\n-- Question 8 --');

// 9.
console.log('\n-- Question 9 --');

// 10.
console.log('\n-- Question 10 --');