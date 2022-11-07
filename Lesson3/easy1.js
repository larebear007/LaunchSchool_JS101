// Question 1

console.log('-- Question 1 --');
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log('Q1 ANSWER: The code will not cause an error. The 3, 4, 5 positions will\
be saved but without any value, and the 6 position will be 5.');
console.log(numbers); // [ 1, 2, 3, <3 empty items>, 5 ]
console.log(numbers[4]); // Returns undefined -> although value is not truly undefined

// Question 2

console.log('\n-- Question 2 --');
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false
console.log(str1.endsWith('!')); 
console.log(str2.endsWith('!'));
console.log('Q2 ANSWER: string method .endsWith() or regex');

// Question 3

console.log('\n-- Question 3 --');
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.keys(ages).includes('Spot') ? true : false); // false
console.log(ages.hasOwnProperty('Spot')); // false
console.log('Q3 ANSWER: object method .hasOwnProperty()');

// Question 4

console.log('\n-- Question 4 --');
let munstersDescription = "the Munsters are CREEPY and Spooky.";
let fixedMunsterDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(fixedMunsterDescription);
console.log('Q4 ANSWER: can use string[0] or .charAt() + .slice() or .substring().');

// Question 5

console.log('\n-- Question 5 --');
console.log(false == '0'); // true
console.log(false === '0'); // false
console.log('Q5 ANSWER: false == "0" will be truthy, while false === "0" will be falsy.');

// Question 6

console.log('\n-- Question 6 --');
let ages1 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages1, additionalAges);
console.log(ages1);
console.log('Q6 ANSWER: Object.assign() method');

// Question 7

console.log('\n-- Question 7 --');
let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str3.includes('Dino')); // false
console.log(str4.includes('Dino')); // true
console.log('Q7 ANSWER: string.includes() method -- LS used .match() !== null and .indexOf() > -1');

// Question 8

console.log('\n-- Question 8 --');
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);
console.log('Q8 ANSWER: .push()');

// Question 9 

console.log('\n-- Question 9 --');
flintstones.push("Dino", "Hoppy");
console.log(flintstones);
console.log('Q9 ANSWER: add multiple parameters to .push()');

// Question 10

console.log('\n-- Question 10 --');
let advice = "Few things in life are as important as house training your pet dinosaur.";
let end = advice.indexOf('house');
let newAdvice = advice.slice(0, end);
console.log(newAdvice);
console.log('Q10 ANSWER: .indexOf() and .slice()');