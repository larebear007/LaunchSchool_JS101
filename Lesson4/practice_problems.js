// Problem 1
console.log('-- Problem 1 --');
[1, 2, 3].filter(num => 'hi');
console.log('ANSWER: return value = [1, 2, 3] because "hi" is a truthy value, so each element\
in the array will pass the conditional and be shallow copied in a new array.');


// Problem 2
console.log('\n-- Problem 2 --');
[1, 2, 3].map(num => {
  num * num;
});
console.log('ANSWER: return value = [undefined, undefined, undefined] bc it is missing the "return"\
keyword before the num * num expression.');


// Problem 3
console.log('\n-- Problem 3 --');
[1, 2, 3].map(num => num * num);
console.log('ANSWER: return value = [1, 4, 9] bc the return statement is implicit when it is on the\
same line as the arrow of the arrow function and lacks curly braces.');

// Problem 4
console.log('\n-- Problem 4 --');
['ant', 'bear', 'caterpillar'].pop().length;
console.log('ANSWER: 11 because pop returns the removed element and then is countin the chars in the word\
"caterpillar".');

// Problem 5
console.log('\n-- Problem 5 --');
[1, 2, 3].every(num => {
  return num = num * 2;
});
console.log('ANSWER: callbackFn returns a mutated doubled array of [2, 4, 6]. .every() should return true\
since the conditional is a truthy value each time.');

// Problem 6
console.log('\n-- Problem 6 --');
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
console.log('arr:' + arr);
console.log('ANSWER: returns [1, 1, 1, 1, 1]. .fill() is destructive, and this can be tested by log the\
value of the variable "arr".');

// Problem 7
console.log('\n-- Problem 7 --');
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
console.log('ANSWER: [undefined, "bear"] bc map is filter for length > than 3, but is also looking at the\
truthiness of the return value. Since ant doesnt pass the if condition, nothing is returned. When nothing\
is returned explicitly, undefined is returned.')

// Problem 8
console.log('\n-- Problem 8 --');
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let newObject = {};
flintstones.forEach((element, index) => {
  return newObject[element] = index;
})
console.log(newObject);

// Problem 9
console.log('\n-- Problem 9 --');
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let addedAges = 0;
for (prop in ages) {
  addedAges += ages[prop];
}
console.log(addedAges);

let addedAges1 =Object.values(ages).reduce((accum, currentVal) => accum + currentVal, 0);
console.log(addedAges1);

let addedAges2 = 0;
Object.values(ages).forEach(ageValue => addedAges2 += ageValue);
console.log(addedAges2);

// Problem 10
console.log('\n-- Problem 10 --');

// same ages obj from Problem 9

let youngestMunster;
Object.values(ages).forEach(age => {
  if (age < youngestMunster || youngestMunster === undefined) {
    youngestMunster = age;
  }
})
console.log(youngestMunster);

// Problem 11
console.log('\n-- Problem 11 --');
let statement = "The Flintstones Rock";
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let letterCount = {};

for (i = 0; i < statement.length; i += 1) {
  let letter = statement[i];
  if (letter === ' ') continue;

  if (!letterCount.hasOwnProperty(letter)) {
    letterCount[letter] = 1;
  } else {
    letterCount[letter] += 1;
  }
}

console.log(letterCount);