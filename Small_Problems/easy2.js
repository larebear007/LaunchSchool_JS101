// 1. Welcome Stranger
console.log('-- Question 1 --');

let greeting = (array, object) => {
  let name = array.join(' ');
  let title = object.title;
  let occupation = object.occupation;
  let article = 'a';
  if (['a', 'e', 'i', 'o', 'u'].includes(title[0].toLowerCase())) {
    article = 'an';
  }

  console.log(`Hello, ${name}! It\'s nice to meet ${article} ${title} ${occupation}.`);
}

greeting(['Laren', 'Ann', 'Cozart'], {title: 'Lead', occupation: 'Montessori Guide'});
// Hello, Laren Ann Cozart! It's nice to meet a Lead Montessori Guide.
greeting(['Yayoi', 'Kusama'], {title: 'Internationally Renowned', occupation: 'Artist'});
// Hello, Yayoi Kusama! It's nice to meet an Internationally Renowned Artist.

// 2. Greeting a user
console.log('\n-- Question 2 --');

let greetUser = () => {
  let rlsync = require('readline-sync');
  let name = rlsync.question('Enter your name: ');
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greetUser();

// 3. Multiplying Two Numbers
console.log('\n-- Question 3 --');

let multiply = (num1, num2) => num1 * num2;

console.log(multiply(5, 5));
console.log(multiply(0, 1));
console.log(multiply(1, 34900));

// 4. Squaring an Argument
console.log('\n-- Question 4 --');

let square = (num) => multiply(num , num);

console.log(square(0));
console.log(square(1));
console.log(square(2));
console.log(square(5));

// 5. Arithmetic Integer
console.log('\n-- Question 5 --');

let displayOperations = () => {
  let rlsync = require('readline-sync');
  let num1 = parseInt(rlsync.question('Enter the first integer: '));
  let num2 = parseInt(rlsync.question('Enter the second integer: '));

  console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`Product: ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`Quotient: ${num1} / ${num2} = ${num1 / num2}`);
  console.log(`Remainder: ${num1} % ${num2} = ${num1 % num2}`);
  console.log(`Power: ${num1} ** ${num2} = ${num1 ** num2}`);
}

displayOperations();

// 6. The End is Near But Not Here
console.log('\n-- Question 6 --');

let penultimate = (text) => {
  let words = text.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('Accentos pueden estar en la uúltima, penúltima, y esdrújula sílaba.'));
console.log(penultimate('Ultimate penultimate antepenultimate'));
console.log(penultimate('Hola mundo'));

// 7. Exclusive Or
console.log('\n-- Question 7 --');

let xor = (arg1, arg2) => {
  if (arg1 && arg2) {
    return false;
  } else if (arg1 || arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(0, 1)); // true
console.log(xor(true, false)); // true
console.log(xor('', [])); // true
console.log(xor(undefined, null)); // false
console.log(xor('hello', 10)); // false 

// 8. Odd Lists
console.log('\n-- Question 8 --');

let oddLists = (array) => {
  return array.filter( (element) => array.indexOf(element) % 2 === 1);
}

console.log(oddLists([1, 2, 3, 4, 5]));
console.log(oddLists([0, -1 , 0, -1, 0])); 
console.log(oddLists(['odd', 'even', 'odd', 'even']));