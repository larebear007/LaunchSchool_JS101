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