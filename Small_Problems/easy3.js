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
  let array = [];
  array.length = number;
  if (number < 1) return array.join('');

  for (idx = 0; idx < number; idx += 1) {
    if (idx % 2 === 0) {
      array[idx] = 1;
    } else if (idx % 2 === 1) {
      array[idx] = 0;
    }
  }
  
  return array.join('');
}

console.log(stringy(0));
console.log(stringy(1));
console.log(stringy(2));
console.log(stringy(10));

// 4. Fibonacci Number Location By Length
console.log('\n-- Question 4--');

let memo = {};

let fibonacci = (num) => {
  if (memo[num]) return memo[num];
  if (num === 1n || num === 2n) {
    return 1n;
  }

  return memo[num] = fibonacci(num - 1n) + fibonacci(num - 2n);
}

let findFibonacciIndexByDigits = (digits) => {

  let fibonacciArray = [0];
  let fibNum;

  let num = 1n;
  while (true) {
    fibNum = fibonacci(num);
    fibonacciArray.push(fibNum);
    
    if (fibNum >= (10n ** (digits - 1n))) {
      return fibonacciArray.indexOf(fibNum);
    }

    num += 1n;
  }

}


console.log(findFibonacciIndexByDigits(2n)) //=== 7n;    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByDigits(3n)) //=== 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByDigits(10n)) //=== 45n;
console.log(findFibonacciIndexByDigits(16n)) //=== 74n;
console.log(findFibonacciIndexByDigits(100n)) //=== 476n;
console.log(findFibonacciIndexByDigits(1000n)) //=== 4782n;
console.log(findFibonacciIndexByDigits(10000n)) //=== 47847n;


// 5. Right Triangles
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
