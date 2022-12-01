// 1. Cute Angles
console.log('-- Question 1 --');

let dms = (float) => {
  let degreeFloat = parseFloat(float);
  let degree = Math.floor(degreeFloat);

  let decimalForMins = float - degree;
  let minsFloat = (60 * decimalForMins);
  let mins = Math.floor(minsFloat);

  let decimalForSecs = minsFloat - mins;
  let secs = Math.round(60 * decimalForSecs);

  return `${float} angle is: ${degree}° ${mins}' ${secs}"`;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));

// 2. Combining Arrays
console.log('\n-- Question 2 --');

let union = (array1, array2) => {
  let joinedArray = array1.concat(array2);
  let filteredUnion = [];
  joinedArray.forEach(num => {
    if (!filteredUnion.includes(num)) {
      filteredUnion.push(num);
    }
  });
  return filteredUnion;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

// 3. Halvsies
console.log('\n-- Question 3 --');

let halvsies = (array) => {
  let firstHalf = [];
  let secondHalf = [];

  array.forEach((element, idx, arr) => {
    if (idx < (Math.ceil(arr.length / 2))) {
      firstHalf.push(element);
    } else {
      secondHalf.push(element);
    }
  })

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));

// 4. Find the Duplicate
console.log('\n-- Question 4 --');

let findDup = (array) => {
  let duplicate;
  let uniqueElements = [];
  array.forEach(element => {
    if (!uniqueElements.includes(element)) {
      uniqueElements.push(element);
    } else {
      duplicate = element;
    }
  })

  return duplicate;
}

console.log(findDup([1, 5, 3, 1]));
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));

// 5. Combine Two Lists
console.log('\n-- Question 5 --');

let interleave = (array1, array2) => {
  let interleavedArray = [];

  for (i = 0; i < array1.length; i += 1) {
    interleavedArray.push(array1[i], array2[i]);
  }

  return interleavedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
console.log(interleave(['hi', 'bye', 'ugh'], ['hola', 'ciao', 'ayy']));

// 6. Multiplicative Average
console.log('\n-- Question 6 --');

let multiplicativeAVG = (array) => {
  let result = (array.reduce((accum, element) => accum * element, 1)) / array.length;
  return `${result.toFixed(3)}`
}

console.log(multiplicativeAVG([3, 5]));
console.log(multiplicativeAVG([2, 5, 7, 11, 13, 17]));

// 7. Mulitply Lists
console.log('\n-- Question 7 --');

let multiplyList = (array1, array2) => array1.map((element, idx, arr) => arr[idx] * array2[idx]);

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
console.log(multiplyList([1, 2, 3,], [1, 2, 3]));

// 8. List of Digits
console.log('\n-- Question 8 --');

let digitList = (num) => String(num).split('').map(val => Number(val));

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));

// 9. How Many?
console.log('\n-- Question 9 --');

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

let countOccurrences = (array) => {
  let uniqueKeys = {};
  array.forEach(element => {
    if (uniqueKeys.hasOwnProperty(element)) {
      uniqueKeys[element] += 1;
    } else {
      uniqueKeys[element] = 1;
    }
  })

  for (key in uniqueKeys) {
    console.log(`${key} => ${uniqueKeys[key]}`);
  }
}

countOccurrences(vehicles);

// 10. Array Average
console.log('\n-- Question 10 --');

let average = (array) => {
  return Math.floor(array.reduce((accum, elem) => accum + elem, 0) / array.length);
}
console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));

// 11. After Midnight (part 1)
console.log('\n-- Question 11 --');

const HOURS_PER_DAY = 24;
const MINS_PER_HOUR = 60;
const MINS_PER_DAY = HOURS_PER_DAY * MINS_PER_DAY; // 1440

let convertTo24HRFormat = (hr, min) => {
  if (rawHours >= HOURS_IN_A_DAY) {
    hours = Math.floor(hours - (HOURS_IN_A_DAY * days));
  }
  if (hours < 0) {
    hours = (HOURS_IN_A_DAY * days) - hours;
  }
  if (hours < 10) {
    hours = '0' + String(hours);
  }  
  if (mins < 10) {
    mins = '0' + String(mins);
  }
}

let timeOfDay = (input) => {
  let rawHours = input / MINS_IN_AN_HOUR;
  let hours = Math.floor(rawHours)
  let rawMins = (rawHours - hours) * MINS_IN_AN_HOUR;
  let mins = Math.floor(rawMins)
  let days = Math.floor(hours % HOURS_IN_A_DAY);

  if (hours >= HOURS_IN_A_DAY) {
    hours = hours - (HOURS_IN_A_DAY * days);
  }
  if (hours < 0) {
    hours = HOURS_IN_A_DAY - (Math.abs(hours) - (HOURS_IN_A_DAY * days));
  }
  if (hours < 10) {
    hours = '0' + String(hours);
  }  
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  return `${hours}:${mins}`;
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

// let input = 800;

// let rawHours = input / 60;
// console.log('rawHours:' + rawHours);
// let roundedHours = Math.floor(rawHours);
// console.log('roundedHours:' + roundedHours);
// let rawMins = (rawHours - roundedHours) * 60;
// console.log('rawMins:' + rawMins);
// let roundedMins = Math.round(rawMins);
// console.log('roundedMins:' + roundedMins);

// 12. After Midnight (part 2)
console.log('\n-- Question 12 --');