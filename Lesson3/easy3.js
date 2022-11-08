// Question 1

console.log('-- Question 1 --');
let numbers = [1, 2, 3, 4];
for (i = numbers.length - 1; i >= 0; i -= 1) {
  numbers.shift();
}
console.log(numbers); // decrement for loop with .shift()

numbers = [1, 2, 3, 4];
for (i = numbers.length - 1; i >= 0; i -= 1) {
  numbers.pop();
}
console.log(numbers); // decrement for loop with .pop()

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers); // .splice()

numbers = [1, 2, 3, 4];
numbers.length = 0
console.log(numbers); // array.length = 0

console.log('Q1 ANSWER: .shift(), .pop(), .splice(), array.length = 0');


// Question 2

console.log('\n-- Question 2 --');
console.log([1, 2, 3] + [4, 5]);
console.log('Q2 GUESS: I\'m actually not sure what the output would be. I will guess\
that it outputs [1, 2, 3, [4, 5]], with the second operand added as a nested array.');
console.log('Q2 ANSWER: It coverts both arrays to strings and concatenates them as strings.');

// Quesitons 3

console.log('\n-- Question 3 --');
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
console.log('Q3 GUESS: str1 will output "hello there". Strings are immutable in JS\
so a change to a copy of str1 will not mutate str1.');
console.log('Q3 ANSWER: ^ guess was correct!');

// Question 4

console.log('\n-- Question 4 --');
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
console.log('Q4 GUESS: arr1 will output its original content bc .slice() created a\
shallow copy of an arr1 rather than a reference or pointer to arr1\'s value');
console.log('Q4 ANSWER: arr1\'s value is changed bc .slice() only creates a shallow\
copy, and still references the original object of any objects present in the array.');

// Question 5

console.log('\n-- Question 5 --');
function isColorValid(color) {
  return color === "blue" || color === "green";
}
console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('red'));

console.log('Q5 ANSWER: return color === "blue" || color === "green"');