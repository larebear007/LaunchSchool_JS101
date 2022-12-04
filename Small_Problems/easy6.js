// 1. Double Char (part 1)
console.log('-- Question 1 --');

let repeater = (string) => string.split('').map(char => char + char).join('');

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));

// 2. Double Char (part 2)
console.log('\n-- Question 2 --');

const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

let doubleConsonants = (string) => {
  let doubledConsonants = [];
  for (i = 0; i < string.length; i += 1) {
    if (CONSONANTS.includes(string[i].toLowerCase())) {
      doubledConsonants.push(string[i].repeat(2));
    } else {
      doubledConsonants.push(string[i]);
    }
  }
  return doubledConsonants.join('');
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));

// 3. Reverse Number
console.log('\n-- Question 3 --');

let reverseNumber = (number) => {
  return Number(String(number).split('').reverse().join(''));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));

// 4. Get the Middle Character
console.log('\n-- Question 4 --');

let centerOf = (text) => {
  let centerChar;
  let index = text.length / 2
  if (text.length % 2 === 1) {
    centerChar = text.charAt(Math.floor(index))
  } else {
    centerChar = text.charAt(index - 1) + text.charAt(index);
  }

  return centerChar;
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));


// 5. Always Return Negative
console.log('\n-- Question 5 --');

let negative = (number) => {
  if (String(number).startsWith('-')) {
    return number;
  } else {
    return -number;
  }
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

// 6. Counting Up
console.log('\n-- Question 6 --');

let sequence = (number) => {
  let sequence = [];
  for (i = 1; i <= number; i += 1) {
    sequence.push(i);
  }
  return sequence;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));

// 7.
console.log('\n-- Question 7 --');

let swapName = (name) => name.split(' ')[1] + ', ' + name.split(' ')[0];

console.log(swapName('Laren Cozart'));

// 8.
console.log('\n-- Question 8 --');

let sequenceCount = (count, start) => {
  let sequence = [];
  for (i = start; sequence.length <= count; i += start ) {
    if (count === 0) break;
    sequence.push(i);
  }
  return sequence;
}

console.log(sequenceCount(5, 1));
console.log(sequenceCount(4, -7));
console.log(sequenceCount(3, 0));
console.log(sequenceCount(0, 1000000));

// 9. Reverse It (part 1)
console.log('\n-- Question 9 --');

let reverseText = (text) => text.split(' ').reverse().join(' ');

console.log(reverseText(''));
console.log(reverseText('Hello World'));
console.log(reverseText('Reverse these words'));

// 10. Reverse It (part 2)
console.log('\n-- Question 10 --');

let reverseWords = (text) => {
  let words = text.split(' ');
  let reversedWords = words.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));

// 11. Reversed Arrays
console.log('\n-- Question 11 --');

let reverse = (array) => {
  let arrayCopy = array.slice();
  let startIdx = 0;
  let endIdx = array.length - 1;
  while (endIdx > -1) {
    array[startIdx] = arrayCopy[endIdx];
    startIdx += 1;
    endIdx -= 1;
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// 12. Matching Parenthesis ?
console.log('\n-- Question 12 --');

let isBalanced = (text) => {
  const PARENS = '()';
  let parensPairs = text.split('').filter(char => PARENS.includes(char));

  let begParen = parensPairs[0];
  let endParen = parensPairs[parensPairs.length - 1];

  let openParenCount = parensPairs.filter(char => char === '(').length
  let closeParenCount = parensPairs.filter(char => char === ')').length

  if (begParen === '(' && endParen === ')' && openParenCount === closeParenCount) {
    return true;
  } else if (parensPairs.length === 0) {
    return true;
  }

  return false;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);