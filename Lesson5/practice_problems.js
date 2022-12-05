// 1. sort numerically - descending order
console.log('-- Problem 1 --');

let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a))
console.log(arr);

// 2. sort by published year - ascending order
console.log('\n-- Problem 2 --');

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));
console.log(books);

// 3. retrieve the g
console.log('\n-- Problem 3 --');

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
let g1 = arr1[2][1][3];
console.log(g1);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
let g2 = arr2[1]['third'][0];
console.log(g2);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
let g3 = arr3[2]['third'][0][0];
console.log(g3);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
let g4 = obj1.b[1];
console.log(g4);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
let g5 = Object.keys(obj2.third)[0];
console.log(g5);

// 4. change 3 to four
console.log('\n-- Problem 4 --');

let arr10 = [1, [2, 3], 4];
arr10[1][1] = 4;
console.log(arr10[1][1]);
console.log(arr10);

let arr20 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr20[2] = 4;
console.log(arr20[2]);
console.log(arr20);

let obj10 = { first: [1, 2, [3]] };
obj10.first[2][0] = 4;
console.log(obj10.first[2][0]);
console.log(obj10);

let obj20 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj20.a.a[2] = 4;
console.log(obj20.a.a[2]);
console.log(obj20);

// 5. Male Munster Age count
console.log('\n-- Problem 5 --');

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
let maleAges = 0;
for (let munster in munsters) {
  if (munsters[munster]['gender'] === 'male') {
    maleAges += munsters[munster]['age'];
  }
}
console.log(maleAges);

// 6. Log Munster Bio
console.log('\n-- Problem 6 --');

for (let munster in munsters) {
  let munsterBio = `${munster} is a ${munsters[munster]['age']}-year-old ${munsters[munster]['gender']}.`
  console.log(munsterBio);
}

// 7. Final value of a and b
console.log('\n-- Problem 7 --');

let a = 2; // 2, number, immutable
let b = [5, 8]; // [5, 8], array object, mutable
let array = [a, b]; // [2, [5, 8]], array object, mutable ** copy of a, pointer of b

array[0] += 2; // [2, [5, 8]] => 2 += 2 => 4 => [4, [5, 8]]; ** no change to immutable a
array[1][0] -= a; // [2, [5, 8]] => [5, 8] => 5 - 2 => 3 => [4, [3, 8]];
console.log(a); // 2
console.log(b); // [3, 8]
console.log(array); // [4, [3, 8]]

// 8. Vowels
console.log('\n-- Problem 8 --');

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = 'aeiou';
Object.values(obj).forEach(arrVal => {
  arrVal.forEach(word => {
    word.split('').forEach(char => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    });
  });
});

// 9. Return array with subarrays orded alph or numerically
console.log('\n-- Problem 9 --');

let arr9 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let sortedArr9 = arr9.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => a - b);
  }
});

console.log(sortedArr9);


// 10. Sort in descending order *** REDO, DID NOT OUTPUT CORRECTLY ***
console.log('\n-- Problem 10 --');

let array10 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let sortedArray10 = array10.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(array10);

// 11. Increment by 1, don't modify original
console.log('\n-- Problem 11 --');

let arr11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let incremented = arr11.slice().map(obj => {
  objCopy = Object.assign({}, obj)
  for (let key in objCopy) {
    objCopy[key] += 1;
  }
  return objCopy;
});

console.log(arr11);
console.log(incremented);

// 12.
console.log('\n-- Problem 12 --');

let arr12 = [[2], [3, 5, 7], [9], [11, 15, 18]];
let multiplesOf3 = arr12.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(multiplesOf3);

// 13. Sort array elements based of sum of odd values
console.log('\n-- Problem 13 --');

let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
arr13.sort((a, b) => {
  let oddNumsA = a.filter(num => num % 2 === 1);
  let oddSumA = oddNumsA.reduce((ac, el) => ac + el, 0);

  let oddNumsB = b.filter(num => num % 2 === 1);
  let oddSumB = oddNumsB.reduce((ac, el) => ac + el, 0);

  return oddSumA - oddSumB;
});

console.log(arr13);

// 14. 
console.log('\n-- Problem 14 --');

let obj14 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsAndSizes = [];
for (let fruit in obj14) {
  let colors = obj14[fruit]['colors'].slice();
  colors = colors.map(color => {
    return color = color[0].toUpperCase() + color.slice(1);
  });

  let size = obj14[fruit]['size'].toUpperCase();
  console.log(size);

  colorsAndSizes.push(colors, size);
}

console.log(colorsAndSizes);

// 15. 
console.log('\n-- Problem 15 --');

let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenObjectsArray = arr15.filter(obj => {
  let allEven = true;
  for (let key in obj) {
    obj[key].forEach(num => {
      if (num % 2 !== 0) {
        allEven = false;
        return;
      }
    });
  }
  return allEven;
});

console.log(evenObjectsArray);

// 16. creat new obj, key is first item in subarray
console.log('\n-- Problem 16 --');

let arr16 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj16 = {};

arr16.forEach(subArr => {
  obj16[subArr[0]] = subArr[1];
});

console.log(obj16);

// 17. UUID
console.log('\n-- Problem 17 --');

let getRandomChar = () => {
  const HEX_CHARS = '0123456789abcdef';
  let randomIndex = Math.floor(Math.random() * HEX_CHARS.length);
  let randomChar = HEX_CHARS[randomIndex];
  return randomChar;
}

let creatUUID = () => {
  let UUIDparts = [[], [], [], [], []];
  for (i = 0; i < 8; i += 1) {
    UUIDparts[0].push(getRandomChar());
  }
  for (i = 0; i < 4; i +=1) {
    UUIDparts[1].push(getRandomChar());
    UUIDparts[2].push(getRandomChar());
    UUIDparts[3].push(getRandomChar());
  }
  for (i = 0; i < 4; i +=1) {
    UUIDparts[4].push(getRandomChar());
  }
  return UUIDparts.map(arr => arr.join('')).join('-');
}

console.log(creatUUID());