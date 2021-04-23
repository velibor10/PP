"use strict";
/* 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000] */

function stringToNumber (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
    
        if (isFinite(array[i]) === true) {
    
            result[result.length] = parseFloat(array[i]);
        }
    }
    return result;
}

let a = ["1", "21", undefined, "42", "1e+3", Infinity];

console.log(stringToNumber(a));

/* 2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.

Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
Output: “015false-2247” */

function joinAllElements(array) {
    let empty = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            if (isFinite(array[i])) {
                empty += array[i];
            }
        }
    }
    return empty;
}

console.log(joinAllElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 3. Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47] */


function filterFalsyValues(array) {
    let emptyArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
            emptyArr[emptyArr.length] = array[i];
        }
    }
    return emptyArr;
}

let a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(filterFalsyValues(a));

/* 4. Write a program that calculates a number of integer values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3  */


function calculatesNumberOFIntegers (array) {

let result = 0;
    for (let i = 0; i < array.length; i++) {

        if(isFinite(array[i]) && typeof array[i] === "number" && parseInt(array[i]) === array[i]) {

            result++;
        }
    }
    return result;
}
let a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

console.log(calculatesNumberOFIntegers(a));


/* 5. Write a program that calculates a number of float values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */

function calculatesNumberOFIntegers (array) {

    let result = 0;
        for (let i = 0; i < array.length; i++) {
    
            if(isFinite(array[i]) && typeof array[i] === "number" && parseFloat(array[i]) % 1 !== 0) {
    
                result++;
            }
        }
        return result;
    }
    let a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
    
    console.log(calculatesNumberOFIntegers(a));


