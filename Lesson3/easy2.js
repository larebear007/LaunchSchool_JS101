// Question 1

console.log('-- Question 1 --');
let advice = "Few things in life are as important as house training your pet dinosaur.";
let newAdvice = advice.replaceAll('important', 'urgent');
console.log(newAdvice);
console.log('Q1 ANSWER: .replaceAll() or .replace()');

// Question 2

console.log('\n-- Question 2 --');
let numbers = [1, 2, 3, 4, 5];
let solution1 = [];
for (i = 0; i < numbers.length; i += 1) {
  solution1.push(numbers[i]);
}
solution1.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(solution1);

numbers = [1, 2, 3, 4, 5];
let solution2 = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(solution2);

numbers = [1, 2, 3, 4, 5];
let solution3 = Array.from(numbers).reverse();
console.log(numbers);
console.log(solution3);

numbers = [1, 2, 3, 4, 5];
let solution4 = numbers.slice().reverse();
console.log(numbers);
console.log(solution4);

console.log('Q2 ANSWER: (1) copy with for loop and .push() then mutate,\
(2) ... spread syntax, (3) Array.from(), (4) .slice()');

// Question 3

console.log('\n-- Question 3 --');
let numbers3 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;
let number2 = 95; 
console.log(numbers3.includes(number1)); // false
console.log(numbers3.includes(number2)); // true
console.log('Q3 ANSWER: .includes()');

// Question 4

console.log('\n-- Question 4 --');
let famousWords = "seven years ago...";
let fourScoreStart = 'Four score and ';
console.log(fourScoreStart + famousWords);
console.log(fourScoreStart.concat(famousWords));
console.log('Q4 ANSWER: + string operator or string.concat()');

// Question 5

console.log('\n-- Question 5 --');
let array = [1, 2, 3, 4, 5];
array.splice(2, 1);
console.log(array);
console.log('Q5 ANSWER: .splice()');

// Question 6

console.log('\n-- Question 6 --');
let flintstones1 = ["Fred", "Wilma"];
flintstones1 = flintstones1.concat(...[["Barney", "Betty"], ["Bambam", "Pebbles"]]);
console.log(flintstones1); // spread syntax + array.concat()

let flintstones2 = ["Fred", "Wilma"];
["Barney", "Betty"].forEach( elem => flintstones2.push(elem));
["Bambam", "Pebbles"].forEach( elem => flintstones2.push(elem));
console.log(flintstones2); // .forEach()

let flintstones3 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(flintstones3.reduce((accum, elem) => accum.concat(elem), [])); // .reduce()

let flintstones4 = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(flintstones4.flat()); // .flat()

console.log('Q6 ANSWER: (1) spread syntax + array.concat.(), (2) .forEach(), (3) .reduce(),\
(4) .flat()');

// Question 7

console.log('\n-- Question 7 --');
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstones).filter(array => array[0] === 'Barney').flat();
console.log(barney);
console.log('Q7 ANSWER: Object.entries(), .filter(), .flat()');

// Question 8

console.log('\n-- Question 8 --');
let numbers8 = [1, 2, 3, 4]; 
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Array.isArray(numbers8));
console.log(Array.isArray(table));
console.log('Q8 ANSWER: Array.isArray()');

// Question 9

console.log('\n-- Question 9 --');
let title = "Flintstone Family Members";
let targetLength = 40;
let titleLength = title.length
let padding = targetLength - titleLength;
let paddedTitle = title.padStart(titleLength + (padding / 2), ' ');
paddedTitle = paddedTitle.padEnd(40, ' ');
console.log(paddedTitle)
console.log('Q9 ANSWER: .padStart() and .padEnd()');

// Question 10

console.log('\n-- Question 10 --');
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
console.log(statement1.split('').filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);
console.log('Q10 ANSWER: .split() + .filter() + .length');