// ex 1 : function that returns the sum of two numbers

    // START
    // SET function name
    // SET 2 parameters, 'num1' 'num2'
    // RETURN parameter 1 + parameter 2
    // PRINT value of called function
    // END

    let adder = (num1, num2) => {
        return num1 + num2;
    }
    console.log(adder(10, 2));

// ex 2: function that takes an array of strings, 
// and returns a string that is all those strings concatenated together

    // START
    // SET function name
    // SET parameter as 'arrayOfStrings'
    // SET variable for concatenated string = array.methodToJoinStrings('')
    // RETURN string variable
    // PRINT value of called function
    // END

    let concater = (arrayOfStrings) => {
        let string = arrayOfStrings.join('');
        return string;
    }
    console.log(concater(['hello', 'bob', 'eats', 'melons']));


// ex 3: a method that takes an array of integers, 
// and returns a new array with every other element 
// from the original array, starting with the first element

    // START
    // SET function name
    // SET parameter as 'arrayOfInts'
    // SET index variable = 0
    // SET new array = []
    // WHILE index < length of the array
        // put array[index value] into new array 
        // SET index += 2
    // RETURN new array
    // PRINT value of called function
    // END

    let everyOtherInteger = (arrayOfIntegers) => {
        let everyOtherArray = [];
        for (i = 0; i < arrayOfIntegers.length; i += 2) {
            everyOtherArray.push(arrayOfIntegers[i]);
        }
        return everyOtherArray;
    }
    console.log(everyOtherInteger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ex 4: function that determines the index of the 3rd occurrence of 
// a given character in a string. For instance, if the given character 
// is 'x' and the string is 'axbxcdxex', the function should return 6 
// (the index of the 3rd 'x'). If the given character does not occur 
// at least 3 times, return null.

    // START
    // SET function name
    // SET 1st parameter as a string, 2nd parameter as specific character
    // SET counter variable = 0
    // SET idx variable = 0
    // SET idx of 3rd char = nothing
    // WHILE idx < string.length
        // IF string[idx] EQUAL TO char
            // SET counter += 1;
        // IF counter EQUAL TO 3
            // SET index of 3rd char = idx
            // RETURN index of 3rd char
        // SET idx += 1 
        
    // RETURN undefined
    // PRINT value of called function
    // END

    let thirdCharIndexFinder = (string, char) => {
        let counter = 0;
        let thirdCharIndex;
        for (i = 0; i < string.length; i += 1) {
            if (string[i] === char) {
                counter += 1;
            }
            if (counter === 3) {
                thirdCharIndex = i;
                return thirdCharIndex;
            }
        }
        return undefined;
    }
    console.log(thirdCharIndexFinder('mississippi', 's'));
    console.log(thirdCharIndexFinder('laren', 'r'));

// ex 5: function that takes two arrays of numbers and returns 
// the result of merging the arrays. The elements of the first array 
// should become the elements at the even indexes of the returned array, 
// while the elements of the second array should become the elements at 
// the odd indexes.

    // START
    // SET function name
    // SET 2 parameters both as arrays
    // SET new merged array variable = []
    // SET index = 0
    // WHILE index < length of array1 && index < length array2
        // push array1[index] to new merged array
        // push array2[index] to new merged array
        // SET index += 1
    // RETURN new merged array
    // PRINT value of function call
    // END

    let arrayMerger = (array1, array2) => {
        let mergedArray = [];
        let i = 0;
        while (i < array1.length && i < array2.length) {
            mergedArray.push(array1[i]);
            mergedArray.push(array2[i]);
            i += 1;
        }
        return mergedArray;
    }
    console.log(arrayMerger([0, 2, 4], [1, 3, 5]));