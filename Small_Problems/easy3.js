// 1. ddaaiillyy ddoouubbllee
console.log('-- Question 1--');

let crunch = (string) => {
  let stringArray = [];
  for (i = 0; i < string.length; i += 1) {
    let char = string[i];
    let previousChar = string[i - 1];

    if (char === previousChar) {
      continue;
    } else {
      stringArray.push(char);
    }
  }

  return stringArray.join('');
}

console.log(crunch('haaahaaahaa'));
console.log(crunch('mmmmmhm'));

// 2. Bannerizer
console.log('\n-- Question 2--');

let bannerizer = (string) => {
  let length = string.length;
  console.log(`+-${'-'.repeat(length)}-+\n\
| ${' '.repeat(length)} |\n\
| ${string} |\n\
| ${' '.repeat(length)} |\n\
+-${'-'.repeat(length)}-+`);
}

bannerizer('Hello, World!');
bannerizer('Fall Festival');
bannerizer('Happy Thanksgiving!');

// 3. Stringy Strings
console.log('\n-- Question 3--');

let stringy = (number) => {
  if (number < 1) return '';
  
  let array = [];
  array.length = number;

  for (i = 0; i < array.length; i += 1) {
    if (i === 0 || i % 2 == 0) {
      array[i] = 1;
    } else if(i % 2 == 1) {
      array[i] == 0;
    }
    
  }
  console.log(array);
  return array.join('');
}

console.log(stringy(-1));
console.log(stringy(0));
console.log(stringy(1));
console.log(stringy(2));
console.log(stringy(10));



// 4. 
console.log('\n-- Question 4--');

// 5. 
console.log('\n-- Question 5--');

// 6. 
console.log('\n-- Question 6--');

// 7. 
console.log('\n-- Question 7--');

// 8. 
console.log('\n-- Question 8--');

// 9. 
console.log('\n-- Question 9--');

// 10. 
console.log('\n-- Question 10--');
