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
let vowelsFromObj = '';
Object.entries(obj).forEach(arr => {
  let vowels;
  if (typeof arr[0] === 'string') { // string
    vowels = arr.split('').filter(char => VOWELS.includes(char)).join(''); //string of only vowels
    vowelsFromObj += vowels;
  } else { // object
    arr.forEach(subArr => {
      let vowels = subArr.split('').filter(char => VOWELS.includes(char)).join(''); // string of only vowels
      vowelsFromObj += vowels;
    });
  }
});
console.log(vowelsFromObj);

// 9. 
console.log('\n-- Problem 9 --');

// 10. 
console.log('\n-- Problem 10 --');

// 11. 
console.log('\n-- Problem 11 --');

// 12.
console.log('\n-- Problem 12 --');

// 13. 
console.log('\n-- Problem 13 --');

// 14. 
console.log('\n-- Problem 14 --');

// 15. 
console.log('\n-- Problem 15 --');

// 16. 
console.log('\n-- Problem 16 --');

// 17. 
console.log('\n-- Problem 17 --');