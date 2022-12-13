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

let staggeredCase = (string) => {
  let staggeredLetters = string.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  });

  return staggeredLetters.join('');
 }

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));

// 7. Staggered Caps (part 2)
console.log('\n-- Question 7 --');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let realStaggeredCase = (string) => {
  let count = -1;
  return string
        .split('')
        .map(char => {
          if (ALPHABET.includes(char)) {
            count += 1;
            return count % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
          }
          return char;
        })
        .join('');
}

console.log(realStaggeredCase('I Love Launch School!'));
console.log(realStaggeredCase('ALL CAPS'));
console.log(realStaggeredCase('ignore 77 the 444 numbers'));

// 8. How Long Are You?
console.log('\n-- Question 8 --');

let wordLengths = (string = '') => {
  if (string.trim().length === 0) return [];
  return string
        .split(' ')
        .map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());


// 9. Search Word (part 1)
console.log('\n-- Question 9 --');

let searchWord = (subtext, text) => {
  let wordCount = 0;
  text.split(' ').forEach(word => {
    let cleanWOrd = word.split('')
                        .filter(char => ALPHABET.includes(char))
                        .join('');
    if (cleanWOrd.toLowerCase() === subtext.toLowerCase()) {
      wordCount += 1;
    }
    });
  return wordCount;
}

let txtInput = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', txtInput)); // 3
console.log(searchWord('itll', "It'll! be what it'll, be.")); // 2

// 10. Search Word (part 2)
console.log('\n-- Question 10 --');

let highlightWord = (subtext, text) => {
  return text
        .split(' ')
        .map(word => {
          if (word === subtext) {
            return `**${word.toUpperCase()}**`;
          }
          return word;
        })
        .join(' ');
}

console.log(highlightWord('sed', txtInput));
console.log(highlightWord('itll', "It'll! be what it'll, be."));

