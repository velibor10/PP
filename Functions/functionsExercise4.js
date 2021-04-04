"use strict"

/* 1. Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes;

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no;  */

function isElementInArray (e, array) {
    let empty = "no"
    for (i = 0; i < array.length; i++) {
        if (array[i] === e) {
            empty = "yes"
        } 
    }
    return empty;
}

console.log(isElementInArray(3, [5, -4.2, 18, 7]));


/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]; */

function multiplyPositiveElement(array) {
    let emptyArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] *= 2;
        }
        emptyArr[emptyArr.length] = array[i];
    }
    return emptyArr;
}

console.log(multiplyPositiveElement([-3, 11, 5, 3.4, -8,]));


/* 3. Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3; */

function minOfArray (array) {
    let min = array[0];
    let index = 0;
   for (i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            index = i;
        } 
    }
    return min + ", " + index;
}

console.log(minOfArray([4, 2, 2, -1, 6]));


/* 4. Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2; */

function secondSmallestNumber(array) {
    let min = array[0];
    let min1 = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] < min1 && array[j] !== min) {
            min1 = array[j];
        }
    }
    return min1;
}

console.log(secondSmallestNumber([4, 2, 2, -1, 6]));


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16; */

function sumPositiveElements (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumPositiveElements([3, 11, -5, -3, 2,]));


/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.; */

function symmetricArray (array) {
    let string = "The array is symmetric";
    for (let i = 0, j = array.length - 1; i < j, j > i; i++, j--) {
        if(array[i] !== array[j]) {
            string = "The array isn't symmetric";
        }
    }
    return string;
}

console.log(symmetricArray([3, 4, 12, 8]));


/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]; */

function intertwinesArrays(array, array1) {
    let empty = [];
    for (let i = 0; i < array.length; i++) {
        empty[empty.length] = array[i];
        empty[empty.length] = array1[i];
    }
    return empty;
}

console.log(intertwinesArrays([4, 5, 6, 2], [3, 8, 11, 9]));


/* 8. Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]; */

function concatenatesArrays(array1, array2) {
    let empty = [];
    for(let i = 0; i < array1.length; i++) {
        empty[empty.length] = array1[i];
    }
    for (let j = 0; j < array2.length; j++) {
        empty[empty.length] = array2[j];
    }
    return empty;
}

console.log(concatenatesArrays([4, 5, 6, 2], [3, 8, 11, 9]));


/* 9. Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]; */

function deleteGivenElement (e, array) {
    let empty = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== e) {
            empty[empty.length] = array[i];
        }
    }
    return empty;
}

console.log(deleteGivenElement(2, [4, 6, 2, 8, 2, 2]));

/* 10. Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]; */

function insertGivenElement (e, p, array) {
    let empty = [];
    for (let i = 0; i < array.length; i++) {
        if (p > array.length) {
            empty = "Error";
        } else if (i === p) {
            empty[p] = e;
        }
        empty[empty.length] = array[i];
    }
    return empty;
}

console.log(insertGivenElement(78, 3, [2, -2, 33, 12, 5, 8]));