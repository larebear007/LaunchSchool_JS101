// 1. Isn't it Odd?

console.log('-- Question 1 --');
let isOdd = (int) => {
  if (int < 0) {
    return !((int + (int * 2)) % 2 === 0);
  } else {
    return !(int % 2 === 0);
  }
}
console.log(isOdd(-17)); // true
console.log(isOdd(-2)); // false
console.log(isOdd(-1)); // true
console.log(isOdd(0)); // false
console.log(isOdd(1)); // true
console.log(isOdd(2)); // false
console.log(isOdd(17)); // true

// 2. Odd Numbers 
console.log('\n-- Question 2 --');
let num = 1;
while (num < 100) {
  console.log(num);
  num += 2;
}

// 3. Even Numbers
console.log('\n-- Question 3 --');
for (num = 1; num < 100; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 4. How big is the room?
console.log('\n-- Question 4 --');
let rlsync = require('readline-sync');
let length = rlsync.question('Enter the length of your room in meters: ');
let width = rlsync.question('Enter the width of your room in meters: ');
let areaMeters = Number(length) * Number(width);
let areaFeet = (areaMeters * 10.7639).toFixed(4);
console.log(`The area of your room is ${areaMeters} square meters (${areaFeet} square feet).`);

// 5. Tip Calculator
console.log('\n-- Question 5 --');
let billAmount = Number(rlsync.question('Enter the bill amount: (Ex: for $100.50, enter "100.50")\n'));
let tipPercentage = Number(rlsync.question('Enter the tip percentage: (Ex: for 15%, enter "15")\n'));
let tipAmount = Math.ceil(Number(billAmount) * (tipPercentage) / 100);
let newBillAmount = billAmount + tipAmount;
console.log(`Your tip will be: $${tipAmount}`);
console.log(`Your new bill amount will be: $${newBillAmount}`);

// 6. Sum or Product of Consecutive Integers
console.log('\n-- Question 6 --');

let range = parseInt(rlsync.question('Enter an integer greater than 0: '));
let sumOrProduct = rlsync.question('Would you like to sum or product of all the integers\
from 1 to ${range}?\n(Enter "sum" or "product": ');
let result = 0;


while (true) {
  if (Number.isNaN(range) || range <= 0 || range === ''.trim()) {
    console.log('Invalid input.');
    range = parseInt(rlsync.question('Enter an integer greater than 0: '));
    continue;
  }
  break;
}

while (true) {
  if (sumOrProduct.toLowerCase()[0] === 's') {
    sumOrProduct = 'sum';
    for (counter = 1; counter <= range; counter += 1) {
      result += counter;
    }
    break;
  } else if (sumOrProduct.toLowerCase()[0] === 'p') {
    sumOrProduct = 'product';
    result = 1;
    for (counter = 1; counter <= range; counter += 1) {
      result *= counter;
    }
    break;
  } else {
    console.log('Invalid input: Please enter "sum" or "product" to continue.');
    sumOrProduct = rlsync.question('Would you like to sum or product of all the integers\
from 1 to ${range}?\n(Enter "sum" or "product": ');
    continue;
  }
}

let displaySumOrProduct = `The ${sumOrProduct} of the integers from 1 to ${range} is ${result}.`;
console.log(displaySumOrProduct);

// Question 7
console.log('\n-- Quesion 7 --');

let shortLongShort = (str1, str2) => {
  return str1.length < str2.length ? (str1 + str2 + str1) : (str2 + str1 + str2);
};

console.log(shortLongShort('hi', 'hello')); // hihellohi
console.log(shortLongShort('hello', 'hi')); // hihellohi
console.log(shortLongShort('JAJA', 'hee')); // heeJAJAhee
console.log(shortLongShort('hee', 'JAJA')); // heeJAJAhee