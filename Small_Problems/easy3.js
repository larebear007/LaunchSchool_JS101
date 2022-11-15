// 1. ddaaiillyy ddoouubbllee
console.log('-- Question 1--');

let crunch = (string) => {
  let stringArray = [];
  for (i = 0; i < string.length; i += 1) {
    let char = string[i];
    let previousChar = string[i - 1];

    if (char === previousChar) {
      continue;
    } else {
      stringArray.push(char);
    }
  }

  return stringArray.join('');
}

console.log(crunch('haaahaaahaa'));
console.log(crunch('mmmmmhm'));

// 2. Bannerizer
console.log('\n-- Question 2--');

let bannerizer = (string) => {
  let length = string.length;
  console.log(`+-${'-'.repeat(length)}-+\n\
| ${' '.repeat(length)} |\n\
| ${string} |\n\
| ${' '.repeat(length)} |\n\
+-${'-'.repeat(length)}-+`);
}

bannerizer('Hello, World!');
bannerizer('Fall Festival');
bannerizer('Happy Thanksgiving!');

// 3. Stringy Strings
console.log('\n-- Question 3--');

let stringy = (number) => {
  let array = [];
  array.length = number;
  if (number < 1) return array.join('');

  for (idx = 0; idx < number; idx += 1) {
    if (idx % 2 === 0) {
      array[idx] = 1;
    } else if (idx % 2 === 1) {
      array[idx] = 0;
    }
  }
  
  return array.join('');
}

console.log(stringy(0));
console.log(stringy(1));
console.log(stringy(2));
console.log(stringy(10));

// 4. Fibonacci Number Location By Length
console.log('\n-- Question 4--');

let memo = {};

let fibonacci = (num) => {
  if (memo[num]) return memo[num];
  if (num === 1n || num === 2n) {
    return 1n;
  }

  return memo[num] = fibonacci(num - 1n) + fibonacci(num - 2n);
}

let findFibonacciIndexByDigits = (digits) => {

  let fibonacciArray = [0];
  let fibNum;

  let num = 1n;
  while (true) {
    fibNum = fibonacci(num);
    fibonacciArray.push(fibNum);
    
    if (fibNum >= (10n ** (digits - 1n))) {
      return fibonacciArray.indexOf(fibNum);
    }

    num += 1n;
  }

}


console.log(findFibonacciIndexByDigits(2n)) //=== 7n;    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByDigits(3n)) //=== 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByDigits(10n)) //=== 45n;
console.log(findFibonacciIndexByDigits(16n)) //=== 74n;
console.log(findFibonacciIndexByDigits(100n)) //=== 476n;
console.log(findFibonacciIndexByDigits(1000n)) //=== 4782n;
// console.log(findFibonacciIndexByDigits(10000n)) //=== 47847n;


// 5. Right Triangles
console.log('\n-- Question 5--');

let displayTriangle = (number) => {

  let starArray = [];
  starArray.length = number;
  for (i = starArray.length -1; i > -1; i -= 1) {
    starArray[i] = '*'
    starArray.fill(' ', 0, i);
    console.log(starArray.join(''));
  }
}

displayTriangle(5);
displayTriangle(9);

// 6. Mad Libs
console.log('\n-- Question 6--');

// let playMadLibs = () => {
//   const RLSYNC = require('readline-sync');

//   let noun = RLSYNC.question('Enter a noun: ');
//   let name1 = RLSYNC.question('Enter a name: ');
//   let name2 = RLSYNC.question('Enter another name: ');
//   let adj = RLSYNC.question('Enter an adjective: ');
//   let foods = RLSYNC.question('Enter an food (plural): ');
//   let animal = RLSYNC.question('Enter an animal: ');
//   let country = RLSYNC.question('Enter a fictional country: ');

//   let madLibs1 = `There once was a ${adj} ${animal} named, ${name1}. \n\
// It lived in the country ${country}, and for all its life it had \n\
// always grazed on ${foods}. How peaceful . . . yet boring. The end.`

//   let madLibs2 = `Once there was a ${noun} named ${name1}. ${name1} \n\
// lived in a big ${adj} house with its grandmother, Grandma ${name2}. \n\
// One day the ${noun} ${name1} and ${noun} Grandma ${name2} wanted to go out. \n\
// "Where do you want to go today, ${name1}?", asked Grandma ${name2}. I want \n\
// to go to ${country}," said ${name1}. And then they did go to ${country}. \n\
// They surely, surely did.`

//   console.log('\n' + 'Madlibs1: ' + madLibs1 + '\n');
//   console.log('Madlibs1: ' + madLibs2);
// }

// playMadLibs();

// 7. Double Doubles
console.log('\n-- Question 7--');

let isDoubleNumber = (candidate) => {
  let trueOrFalse = false;
  let candidateString = String(candidate);

  if (candidateString.length % 2 === 0) {
    let midPointIndex = (candidateString.length / 2);
    let firstHalf = candidateString.slice(0, midPointIndex);
    let secondHalf = candidateString.slice(midPointIndex);

    if (firstHalf === secondHalf) {
      trueOrFalse = true;
    }
  }
  
  return trueOrFalse;
}

let twice = (number) => {
  let newNumber;

  if (isDoubleNumber(number)) {
    newNumber = number;
  } else {
    newNumber = number * 2;
  }

  return newNumber;
}

console.log(twice(44));
console.log(twice(103103));
console.log(twice(333));

// 8. Grade Book
console.log('\n-- Question 8--');

let getGrades = (grade1, grade2, grade3) => {
  let average = (grade1 + grade2 + grade3) / 3;
  let letterGrade;

  if (average > 89) {
    letterGrade = 'A';
  } else if (average > 79) {
    letterGrade = 'B';
  } else if (average > 69) {
    letterGrade = 'C';
  } else if (average > 59) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return letterGrade;
}

console.log(getGrades(90, 91, 99));
console.log(getGrades(80, 89, 84));
console.log(getGrades(50, 54, 87));

// 9. Clean Up the Words
console.log('\n-- Question 9--');

let cleanUp = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  let cleanArray = [];
  
  for (i = 0; i < string.length; i += 1) {
    if (!alphabet.includes(string[i])) {
      cleanArray.push(' ');
      if (cleanArray[i] === cleanArray[i - 1]) {
      cleanArray.splice(cleanArray[i, 1]);
      } 
    } else {
      cleanArray.push(string[i]);
    }
  }

  return cleanArray.join('');
}


console.log(cleanUp('happy&$ day--Z&'));

// 10. 
console.log('\n-- Question 10--');
