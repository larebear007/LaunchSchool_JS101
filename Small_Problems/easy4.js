// 1. How old is Teddy?
console.log('-- Question 1 --');

let randomAge = (min, max) => {
  return Math.round(Math.random() * (max + 1 - min) + min);
} 

console.log(`Teddy is ${randomAge(20, 120)} years old!`);

// 2. Searching 101 -- commented out
console.log('\n-- Question 2 --');

const rlsync = require('readline-sync');

// let searchNumbers = (num) => {
  // let numArray = [];
  // let lastEntry;
  // for (i = 1; i <= num; i += 1) {
  //   let input = rlsync.question('Enter a number: ');
  //   if (i === num) {
  //     lastEntry = input;
  //     break;
  //   }
  //   numArray.push(input);
  // }

  // if (numArray.includes(lastEntry)) {
  //   return `The number ${lastEntry} appears in ${numArray}`;
  // } else {
  //   return `The number ${lastEntry} does not appears in ${numArray}.`;
  // }
// }

// console.log(searchNumbers(6));

// 3. When will I retire?
console.log('\n-- Question 3 --');

// let displayRetirement = () => {
//   let currentYear = parseInt(rlsync.question('What year is it? '));
//   let currentAge = parseInt(rlsync.question('What is your age? '));
//   let retirementAge = parseInt(rlsync.question('At what age would you like to retire? '));
//   let yearDiff = retirementAge - currentAge;
  
//   let retirementMessage = `It is ${currentYear}. You will retire in \
// ${currentYear + yearDiff}.\nYou have only ${yearDiff} years of work to go!`;

//   console.log(retirementMessage);
// }

// displayRetirement();

// 4. Palindromic Strings (part 1)
console.log('\n-- Question 4 --');

let isPalindrome = (string) => string === string.split('').reverse().join('');

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));

// 5. Palindromic Strings (part 2)
console.log('\n-- Question 5 --');

let isRealPalindrome = (string) => {
  const alphaNumericChars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let array = [];
  
  for (i = 0; i < string.length; i += 1) {
    if (alphaNumericChars.includes(string[i].toLowerCase())) {
      array.push(string[i].toLowerCase());
    }
  }
  console.log(array.join('') + ' : ' + array.reverse().join(''));
  return array.join('') === array.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

// 6. Palindromic Numbers
console.log('\n-- Question 6 --');

let isPalindromicNumber = (num) => {
  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));

// 7. Running Totals
console.log('\n-- Question 7 --');

let runningTotal = (array) => {
  let total = 0;
  let runningTotalArray = array.map((num) => total += num);

  return runningTotalArray;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));

// 8. Letter Counter (part 1)
console.log('\n-- Question 8 --');

let wordSizes = (text) => {
  let words = text.split(' ');
  let object = {};
  if (text.trim() !== '') {
    words.forEach(word => {
      key = word.length;
      object.hasOwnProperty(key) ? object[key] += 1 : object[key] = 1;
    })
  }
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

// 9. Letter Counter (part 2)
console.log('\n-- Question 9 --');

let cleanUpWord = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let cleanWord = word.split('').filter(char => alphabet.includes(char));
  return cleanWord.join('');
}

let realWordSizes = (text) => {
  let words = text.split(' ');
  let object = {};
  if (text.trim() !== '') {
    words.forEach(word => {
      word = cleanUpWord(word);
      key = word.length;
      object.hasOwnProperty(key) ? object[key] += 1 : object[key] = 1;
    })
  }
  return object;
}

console.log(realWordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(realWordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(realWordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(realWordSizes(''));                                            // {}

// 10. Letter Swap
console.log('\n-- Question 10 --');

let swap = (text) => {
  if (text.length === 1) return text;
  let words = text.split(' ');
  let swappedWords = words.map(word => {
    return word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
  })

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));        