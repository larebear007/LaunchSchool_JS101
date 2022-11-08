// Quesiton 1

console.log('-- Question 1 --');
let message = 'The Flintstones Rock!';
for (i = 0; i < 10; i += 1) {
  paddedMessage = message.padStart(message.length + i, ' ');
  console.log(paddedMessage);
}
console.log('Q1 ANSWER: .padStart() + for loop');

// Question 2

console.log('\n-- Question 2 --');
let munstersDescription = "The Munsters are creepy and spooky.";
let letters = munstersDescription.split('');
let swappedDescription = letters.map(char => {
  if (char === char.toUpperCase()) {
    char = char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    char = char.toUpperCase();
  } else {
    char = char;
  }
  return char;
}).join('');

console.log(swappedDescription);
console.log('Q2 ANSWER: .split() + .map() + .join()');

// Question 3

console.log('\n-- Question 3 --');
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
      divisor -= 1;
  }

  return factors;
}

console.log(factors(0));
console.log(factors(-2));
console.log(factors(1));
console.log(factors(10));
console.log('Q3 ANSWER: use a while loop with condition (divisor > 0).\
"number % divisor === 0" is to determine whether the divisor is divided without\
a remainder, bc if so it is a factor. Replacing line 3 with "factors.push(divisor);"\
will change the order in which the factors are listed in the array.');

// Question 4

console.log('\n-- Question 4 --');
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
console.log('Q4: .concat() creates a shallow copy of the original buffer\
 so the orginal buffer will not be updated properly with the function call\
 as it\'s elements areprimitives.\n.push() mutates the original array, so\
the original buffe will be changed appropriately with the function call.');

// Question 5

console.log('\n-- Question 5 --');
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
console.log('Q5 GUESS: the first line will output 0.9, the second will output true.');
console.log('Q5 ANSWER: first line outputs .89999 and second outputs false.');

// Question 6

console.log('\n-- Question 6 --');
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
console.log('Q6 GUESS: this will output false becasue NaN is the only JS value\
that is not equal to itself. We need to use Number.isNan(nanArray[0]) to determine\
if the first element is NaN.');
console.log('Q6 ANSWER: ^ correct!');

// Question 7

console.log('\n-- Question 7 --');
let answer = 42;
function messWithIt(someNumber) {
  return (someNumber += 8);
}
let newAnswer = messWithIt(answer);
console.log(answer - 8); // 34
console.log('Q7 GUESS: will output 34, as the answer variable is a primitive\
and is not mutable. The parameter someNumber is what is changed, not the outer\
variable answer.');
console.log('Q7 ANSWER: ^ correct!');

// Question 8

console.log('\n-- Question 8 --');

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
console.log(munsters);
     
console.log('Q8 GUESS: The family did get "ransacked". Although Spot probably\
meant to use Object.keys(), this works since the values of each key in the munster\
object are also objects.');
console.log('Q8 ANSWER: ^');

// Question 9

console.log('\n-- Question 9 --');

// Question 10
console.log('\n-- Question 10 --');