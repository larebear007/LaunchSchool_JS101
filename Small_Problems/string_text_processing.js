// 1. UpperCase Check
console.log('-- Question 1 --');

let isUpperCase = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let alphCharsInString = string.split('').filter(char => alphabet.includes(char));
  return alphCharsInString.every(char => char === char.toUpperCase());
}

console.log(isUpperCase('t'));
console.log(isUpperCase('T'));
console.log(isUpperCase('Four Score'));
console.log(isUpperCase('FOUR SCORE'));
console.log(isUpperCase('4SCORE!'));
console.log(isUpperCase(''));


// 2. Delete Vowels
console.log('\n-- Question 2 --');

let removeVowels = (array) => {
  const VOWELS = 'aeiouAEIOU';
  return array.map(string => string.split('').filter(char => !VOWELS.includes(char)).join(''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));

// 3. LetterCase Counter
console.log('\n-- Question 3 --');

let letterCaseCount = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let obj = { lowercase: 0, uppercase: 0, neither : 0 };
  string.split('').forEach(char => {
    if (alphabet.includes(char)) {
      if (char === char.toLowerCase()) {
        obj.lowercase += 1;
      } else if (char === char.toUpperCase()) {
        obj.uppercase += 1;
      }
    } else {
      obj.neither += 1;
    }
  });
  return obj;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));

// 4. Capitalize Words
console.log('\n-- Question 4 --');

let wordCap = (string) => {
  return string
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));

// 5. Swap Case
console.log('\n-- Question 5 --');

let swapCase = (string) => {
  return string
    .split('')
    .map(char => {
      if (char === char.toLowerCase()) return char.toUpperCase();
      else if (char === char.toUpperCase()) return char.toLowerCase();
      else return char;
    })
    .join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));


// 6. Staggered Caps (part 1)
console.log('\n-- Question 6 --');




// 7. Staggered Caps (part 2)
console.log('\n-- Question 7 --');


// 8.
console.log('\n-- Question 8 --');


// 9. 
console.log('\n-- Question 9 --');


// 10. 
console.log('\n-- Question 10 --');


