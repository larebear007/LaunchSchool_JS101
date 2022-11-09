// Question 1

console.log('-- Question 1 --');
function first() {
  return {
    prop1: "hi there"
  };
}
function second() {
  return
  {
    prop1: "hi there"
  };
}
console.log(first());
console.log(second());

console.log('Q1 ANSWER: No they will not return the same value. \
first() will return the object and its contents, while second() will return \
"undefined" because the object is coded on a seperate line from the return keyword. \
Functions return undefined by default without an explicit return statement. \
Importantly, a semicolon is inserted by the JS engine after the return keyword \
and line in second(). Syntax issue.');

// Question 2

console.log('\n-- Question 2 --');
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
console.log('Q2 ANSWER: The object will return { first: [1, 2] }. The value of \
the key "first" has changed bc numArray was assigned a reference or pointer to \
the value of the key "first". This is because the value is an array which is a \
JS object. When numArray was pushed the additional element 2, this mutated the \
reference of the original array. Therefore, object\'s key "first" now has the \
value of [1, 2]');

// Question 3

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Question 3

console.log('\n-- Question 3 --');
console.log('* Difficult to display in VsCode *\n\
Related to variable shadowing with function and global scope.\n\
REVIEW FOR LATER.');

// Question 4

console.log('\n-- Question 4 --');
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}
console.log('Q4 ANSWER: check that length is 4, and if not return false. Change\
break statement to a return false statement.');