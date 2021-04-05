"use strict"
/* 1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]; */

function switchMinAndMaxElement (array) {
    let emptyarray = array;
    let min = array[0];
    let max = array[0];
    let minIndex = 0;
    let maxIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (min < array[i]) {
            min = array[i];
            minIndex = i;
        }
        if (max > array[i]) {
            max = array[i];
            maxIndex = i;
        }
    }
    emptyarray[minIndex] = max;
    emptyarray[maxIndex] = min;
    return emptyarray;
}

console.log(switchMinAndMaxElement([3, 500, 12, 149, 53, 414, 1, 19]));


/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]; */

function makeNewArray (array) {
    let emptyArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] / 2 + 5 === 0) {
            emptyArray[emptyArray.length] = 20;
        } else {
            emptyArray[emptyArray.length] = array[i] / 2 + 5;
        }
    }
    return emptyArray;
}

console.log(makeNewArray([ 3, 500, -10, 149, 53, 414, 1, 19 ]));

/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Michael acquired 50 points and failed to complete the exam; */

function studentGrade (array, array1) {
    let emptyArray = [];
    let grade = array1[0];
    for (let i = 0; i < array.length; i++) {
        grade = array1[i];
        if (grade <= 50) {
            grade = "and failed to complete exam";
        } else if (grade > 50 && grade <=60) {
            grade = "and earned 6";
        } else if (grade > 60 && grade <= 70) {
            grade = "and earned 7";
        } else if(grade > 70 && grade <= 80) {
            grade = "and earned 8";
        } else if(grade > 80 && grade <= 90) {
            grade = "and earned 9";
        } else if (grade > 90 && grade <= 100) {
            grade = "and earned 10";
        }
        emptyArray[emptyArray.length] = array[i] + " acquired " + array1[i] + " points " + grade; 
    }
    return emptyArray;
}

console.log(studentGrade(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill",], [50, 39, 63, 72, 99, 51, 83, 59,]));


/* 4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]; */





/* 5. (skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]; */

/* 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000; */


function addAllEvenNumbers () {
    let sum = 0;
    let sum1 = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum += i;
        } else if (i <= 500 && i % 2 !== 0) {
            sum1 += i;
        }
    }
    return (sum - sum1) * 12.5;
}

console.log(addAllEvenNumbers());


/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]

Output: AnStJoJoDaMa; */

function createNewString(array) {
    let empty = "";
    let finalString = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 1) {
            for (let j = 0; j < array[i].length; j++) {
                empty = array[i];
                if (j === 0 || j === 1) {
                    finalString += empty[j];
                }
            }
        } 
    }
    return finalString;
}

console.log(createNewString(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

//second way to solve a problem:

function createNewString(array) {
let result = "";
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            if (array[i].length > 1) {
                result += array[i][0] + array[i][1];
            }
        }
    }
    return result;
}
let array = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
console.log(createNewString(array));


/* 8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB */

function reversedString(string) {
let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

let string = "Belgrade Institute of Technology";
console.log(reversedString(string));


/* 9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...). */

function twoNumbersCombination (num1, num2) {
let result = "";
    for (let i = num1; i <= num2; i++) {
        for (let j = num1; j <= num2; j++) {
            if (i !== j) {
                result += i + ", " + j + "\n";
            }
        }
    }
    return result;
}

let a = 1;
let b = 7;

console.log(twoNumbersCombination(a, b));


/* 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false */

function primeNumber (number) {
let result = true;
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
        result = false;
        }
    }
    return result;
}

let number = 15;
console.log(primeNumber(number));


/* 11. Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true */

//console.log(string.toLowerCase);


function palindromWord (word) {
let result = true;
let newWord = "";


    for (let k = 0; k < word.length; k++) {
        if (word[k] !== " ") {
            newWord += word[k];
        }
    }

    for (let i = 0, j = newWord.length - 1; i < j, j > i; i++, j--) {
        if (newWord[i].toLowerCase() !== newWord[j].toLocaleLowerCase()) {
            result = false;
        }
    }
    return result;
}

let string = "a nut for a jar of tuna";
console.log(palindromWord(string));


/* 12. Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9 */

function commonDivisior (num1, num2) {

let divisor1 = [];
let divisor2 = [];
let greatestDivisor;

    for (let i = 1; i <= num1; i++) {
        if(num1 % i === 0) {
            divisor1[divisor1.length] = i;
        }
    }
    for (let j = 1; j <= num1; j++) {
        if(num2 % j === 0) {
            divisor2[divisor2.length] = j;
        }
    }
    for (let k = 0; k < divisor1.length; k++) {
        for (let l = 0; l < divisor2.length; l++) {
            if (divisor1[k] === divisor2[l]) {
                greatestDivisor = divisor1[k];
            }
        }
    }
    return greatestDivisor;
}

let a = 192;
let b = 42;

console.log(commonDivisior(a, b));


// Modified first loop with 2 counters. Now we have only 1 for loop to solve the problem in task 12;


function commonDivisior (num1, num2) {

let divisor1 = [];
let divisor2 = [];
let greatestDivisor;

    for (let i = 1, j = 1; i <= num1, j <= num2; i++, j++) {
        if(num1 % i === 0) {
            divisor1[divisor1.length] = i;
        }
        if(num2 % j === 0) {
            divisor2[divisor2.length] = j;
        }
    }

    for (let k = 0; k < divisor1.length; k++) {
        for (let l = 0; l < divisor2.length; l++) {
            if (divisor1[k] === divisor2[l]) {
                greatestDivisor = divisor1[k];
            }
        }
    }
    return greatestDivisor;
}

let a = 81;
let b = 9;

console.log(commonDivisior(a, b));