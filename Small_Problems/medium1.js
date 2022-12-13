// 1. Rotation (part 1)
console.log('-- Question 1 --');

let rotateArray = (array = -1) => {
  if (!Array.isArray(array)) return undefined; // not an array
  if (array.length === 0) return []; // empty array

  let rotated = [];
  for (i = 1; i < array.length; i += 1) {
    rotated.push(array[i]);
  }
  rotated.push(array[0]);

  return rotated;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));
console.log(rotateArray());
console.log(rotateArray(1));

let array1 = [1, 2, 3, 4];
console.log(rotateArray(array1));
console.log(array1);

// 2. Rotation (part 2)
console.log('\n-- Question 2 --');

let rotateRightMostDigits = (number, count) => {
  let digitString = String(number);
  let start = digitString.slice(0, -count);
  let end = digitString.slice(-count);
  end = end.slice(1).concat(end[0]);

  return Number(start + end);
}

console.log(rotateRightMostDigits(735291, 1));
console.log(rotateRightMostDigits(735291, 2));
console.log(rotateRightMostDigits(735291, 3));
console.log(rotateRightMostDigits(735291, 4));
console.log(rotateRightMostDigits(735291, 5));
console.log(rotateRightMostDigits(735291, 6));

// 3. Rotation (part 3)
console.log('\n-- Question 3 --');


// 4.
console.log('\n-- Question 4 --');


// 5.
console.log('\n-- Question 5 --');


// 6.
console.log('\n-- Question 6 --');


// 7.
console.log('\n-- Question 7 --');


// 8.
console.log('\n-- Question 8 --');


