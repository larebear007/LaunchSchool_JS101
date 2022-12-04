// 1. Sum of Digits
console.log('-- Question 1 --');

let sum = (int) => {
  let intDigits = String(int).split('');
  intDigits = intDigits.map(char => Number(char));

  let sumOfDigits = intDigits.reduce((accum, elem) => accum + elem, 0);
  return sumOfDigits;
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));

// 2. Alphabetical Numbers
console.log('\n-- Question 2 --');

let alphabeticNumSort = (numsArray) => {
  let numMatches = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 
                    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
                    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
                    'eighteen', 'nineteen'];
  let alphabeticNums = numsArray.map(num => numMatches.at(num));
  let sortedAlphabeticNums = alphabeticNums.sort();
  let sortedNumsArray = sortedAlphabeticNums.map(alphNum => numMatches.indexOf(alphNum));

  return sortedNumsArray;
}

console.log(alphabeticNumSort([0, 1, 2]));
console.log(alphabeticNumSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));


// 3. Multiply All Pairs
console.log('\n-- Question 3 --');

let multiplyAllPairs = (arr1, arr2) => {
  let products = [];
  arr1.forEach(num => {
    for (i = 0; i < arr2.length; i += 1) {
      products.push(num * arr2[i]);
    }
  });

  return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

// 4. Leading Substrings
console.log('\n-- Question 4 --');

let leadingSubstrings = (string) => {
  let arrOfLeadingSubstrings = [string];
  for (i = 1; i < string.length; i += 1) {
    arrOfLeadingSubstrings.push(string.slice(0, i));
  }
  return arrOfLeadingSubstrings.sort((a, b) => a.length - b.length);
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));

// 5. All Substrings
console.log('\n-- Question 5 --');

let substrings = (string) => {
  let chars = string.split('');
  let substrings = [];
  chars.forEach(char, idx => {
    for (idx; i < chars.length; idx += 1) {
      substrings.push(string.slice(0, idx))
    }
    chars.shift();
  })
}


// 6.
console.log('\n-- Question 6 --');


// 7.
console.log('\n-- Question 7 --');


// 8.
console.log('\n-- Question 8 --');


// 9. 
console.log('\n-- Question 9 --');


// 10. 
console.log('\n-- Question 10 --');


// 11. 
console.log('\n-- Question 11 --');


// 12. 
console.log('\n-- Question 12 --');
