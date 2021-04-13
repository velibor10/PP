"use strict"

/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function countVowels(string) {

    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "A" || string[i] === "E" || string[i] === "I" || string[i] === "O" || string[i] === "U") {
            counter++;
       
        }
    }
    return counter;
}

let word = "maeioAEIOU"

console.log(countVowels(word));


/* 2. Write a function that combines two arrays by alternatingly taking elements.
[`a`,`b`,`c`], [1, 2, 3] -&gt; [`a`, 1,`b`,2, `c`, 3]. */

function alternatingElements(array1, array2) {

    let emptyArray = [];

    for (let i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
        emptyArray[emptyArray.length] = array1[i];
        emptyArray[emptyArray.length] = array2[j];
    
    }
    return emptyArray;
}

let arr1 = ["a", "b", "c"]
let arr2 = [1, 2, 3];
console.log(alternatingElements(arr1, arr2));


/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. */

function rotatesList (list, k) {

    let emptyArray = [];

    for (let i = k; i < list.length; i++) {
        emptyArray += list[i];
    }
    for (let j = 0; j < k; j++) {
        emptyArray += list[j];
    }
    return emptyArray;
}

let arr = [1, 2, 3, 4, 5, 6,];
let x = 2;

console.log(rotatesList(arr, x));




/* 4. Write a function that takes a number and returns array of its digits. */

function numberToArrayOfDigits (number) {

    let emptyArray = [];
    let string = number + "";

    for (let i = 0; i < string.length; i++) {
        
        if (string[i] !== ".") {
            emptyArray[emptyArray.length] = string[i];
        }
    }
    return emptyArray;
}

let x = 1234.56789;

console.log(numberToArrayOfDigits(x));


/* 5. Write a program that prints a multiplication table for numbers up to 12.


/* 6. Write a function to input temperature in Centigrade and convert to Fahrenheit. */

function centigradeToFahrenheit (temperature) {
    return temperature * 9 / 5 + 32;
}

let temp = 100;

console.log(centigradeToFahrenheit(temp));


/* 7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements. */


function maximumElementOfArray (array) {

    let emptyArray = [];
    let maximum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            emptyArray[emptyArray.length] = array[i];
        }
    }
    for (let j = 0; j < emptyArray.length; j++) {
        if (emptyArray[j] > maximum) {
            maximum = emptyArray[j];
        }
    }
    return maximum;
}

let arr = [2232, 1111111, 2, 33, null, NaN, false, 0, "word", undefined];

console.log(maximumElementOfArray(arr));


/* 8. Write a function to find the maximum and minimum elements. Function returns an array. */


/* 9. Write a function to find the median element of array. */

// 10. Write a function to find the element that occurs most frequently. */


/* 11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.  */

function elementsOfArr (arr) {

let result = [];

    if (arr.length < 1) {
        result = arr;
    } else if (arr.length % 2 === 0) {
        result[0] = arr[0];
        result[1] = arr[arr.length - 1];
    } else if (arr.length % 2 !== 0) {
        result[0] = arr[0];
        result[1] = arr[arr.length / 2 - 0.5];
        result[2] = arr[arr.length - 1];
    }
    return result;
}

let a = [1, 2, 3, 4, 5, 6];
console.log(elementsOfArr(a));


// 12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function average () {
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(average(1, 2, 3));


// 13. Write a function to find all the numbers greater than the average.

function greaterThanAverage (arr) {

let sum = 0;
let aver;
let result = [];

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        aver = sum / arr.length;
    }

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > aver) {
            result[result.length] = arr[j];
        }
    }
    return result;
}

var a = [1, 2, 3, 4, 5, 6, 7];
console.log(greaterThanAverage(a));


/* 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:


Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40  */


 

function _BMII (weight, height) {
    let _BMI = weight / (height * height);
    let result = "";

    if (_BMI < 15) {
        result = "Starvation";
    } else if (_BMI < 17.5 && _BMI >= 15) {
        result = "Anorexic";
    } else if (_BMI < 18.5 && _BMI >= 17.5) {
        result = "Underweight";
    } else if (_BMI < 25 && _BMI >= 18.5) {
        result = "Ideal";
    } else if (_BMI < 30 && _BMI >= 25) {
        result = "Overweight";
    } else if (_BMI < 40 && _BMI >= 30) {
        result = "Obese";
    } else if (_BMI >= 40) {
        result = "Morbidly obese";
    }
    return result;
}

console.log(_BMII(100, 1.9));
console.log(100 / (1.9 * 1.9));

/* 15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World&", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********  */

/*

var arr = ["Hello", "World", "in", "a", "frame"];
var letter = 0;
var result = "";
var space = " ";
for(var i = 0; i < arr.length; i++){
    if(arr[i].length > letter){
        letter = arr[i].length;
    }
}
for(var j = 1; j <= arr.length + 2; j++){
    if(j === 1 || j === arr.length + 2){
        for(var k = 0; k < letter + 4; k++){
            result += "*";
        }
        result += "\n";
    }
    else{
            if(arr[j -2].length === letter){
                result += "* " + arr[j - 2] + " *\n";
            }
            else{
                for( var s = 1; s < letter - arr[j -2].length;s++){
                    result += "*";
                }
                result += "\n";
            }
    }
}
console.log(result); */



