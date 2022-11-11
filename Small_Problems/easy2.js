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