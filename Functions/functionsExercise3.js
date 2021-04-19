/* 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"  */
"use strict";

function insertString (string, string1, position) {
 
    let empty = "";
    position = position || 0;
    for (let i = 0; i < string.length; i++) {
        if (i === position) {
            empty += string1 + " ";
        }
        empty += string[i];
    }
    return empty;
 
}    

console.log(insertString("My random string", "JS", 10));


/* 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]  */

function joinAllElements(array) {
    let empty = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null && isFinite(array[i])) {
                empty += array[i];
                
        }
    }
    return empty;
}

console.log(joinAllElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 3. Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

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


/* 4. Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number */

function reverseNumber(num) {

    let emptyStr = "" + num;
    let result = "";
    


    for (let i = emptyStr.length - 1; i >= 0; i--) {
        result += emptyStr[i];
    }
    
    return  parseFloat(result);
}

let num = 12345;
console.log(reverseNumber(num));
console.log(typeof num);


/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */

function lastElementOfArr (array, parameter) {

let emptyArr = [];

    for (let i = array.length - 1; i >= array.length - parameter; i--) {
       emptyArr[emptyArr.length] = array[i];
    }
    return emptyArr;
}

let a = [7, 9, 0, -2];
let n = 2;

console.log(lastElementOfArr(a, n));

/* 6. Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]  */


function createElement(number, element){
    let array = [];

    for (let i = 0; i < number - 1; i++) {
        array[i] = element;
        array[array.length] = array[i];
    }
    return array;
}

let x = 2;
let y = null;

console.log(createElement(x, y));


/* 7. Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself
 (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

function perfectNumber(number) {

    let result = "Number is perfect";
    let sum = 0;

    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
        sum += i;
        }
    }
    if (sum != number  &&  (sum + number) / 2 !== number) {
        result = "Number is not perfect";
    }
    return result;
}

let x = 496;

console.log(perfectNumber(x));


/* 8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */

let sentance = "The quick brown fox"; 
let word = "fox";
let empty = "";
let count = 0;


for (let i = 0, j = 0; i < sentance.length, j < word.length; i++, j++) {
    if (sentance[i] === " ") {
        sentance = "";
    }else if (sentance[i] === word[j]) {
        
    }
}
console.log(count);


/* 9. Write a function to hide email address.


"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */


/* 10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */


var a = "velibor";
result = a[2];
console.log(result);
