// 1. Write a program that calculates the maximum of two given numbers.
"use strict"
function maximum (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maximum(100, 23));


// 2. Write a program that checks if a given number is odd.

function oddNumber (x) {
    if (x % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(oddNumber(13));


// 3. Write a program that checks if a given number is a three digit long number.

function threeDigitLongNumber (y) {
    if (y > 99 && y < 1000) {
        return true;
    } else {
        return false;
    }
}

console.log(threeDigitLongNumber(999));


// 4. Write a program that calculates an arithmetic mean of four numbers.

function arMean (a, b, c, d) {
    return (a + b + c + d) / 2;
}

console.log(arMean(1, 2, 3, 4));


/* 5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****  */

function drawSquare (number) {
    let empty = "";
    let star = "*";
    let space = " ";
    let newLine = "\n";
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            if (i === 0 || i === number - 1 || j === 0 || j === number - 1) {
                empty += star;
            } else {
                empty += space;
            }
        }
        empty += newLine;
    }
    return empty;
}

console.log(drawSquare(5));


/* 6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:

* * * * *
* * *
* * * * * * *  */

function horizontalChart (a, b, c) {
    let empty = "";
    let star = "* ";
    let newLine = "\n";
    for (let i = 0; i < a; i++) {
        empty += star;
    }
        empty += newLine;
    for (let j = 0; j < b; j++) {
        empty += star;
    }
        empty += newLine; 
    for (let k = 0; k < c; k++) {
        empty += star;
    }
        empty += newLine;
    return empty; 
}

console.log(horizontalChart(5, 3, 7));


// 7. Write a program that calculates a number of digits of a given number.

function numberOfDigits (number) {
    let empty = "";
    for (let i = 0; i < number.length; i++ ) {
        empty [i]= number[i];
    }
    empty += number; 
    return empty.length;
}

console.log(numberOfDigits(1234));


/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3   */

function numberOfAppearances (array, x) {
    let appearances = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            appearances++;
        }
    }
    return appearances;
}

console.log(numberOfAppearances([2, 4, 7, 8, 7, 7, 1], 7));


// 9. Write a program that calculates the sum of odd elements of a given array.

function calculates (array) {
    let sume = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
        sume += array[i];
        }
    }
    return sume;
}

console.log(calculates([2, 4, 7, 8, 7, 7, 1, 7, 2, 10 ,10]));


/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.  */

function numberOfAppearances (string) {
    let appear = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            appear ++;
        }
    }
    return appear;
}

console.log(numberOfAppearances("alamanaaAAAaA"));


function numberOfAppearances (string) {
    let appear = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "A") {
            appear ++;
        }
    }
    return appear;
}

console.log(numberOfAppearances("alamanaaAAAaA"));


/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.  */

function concatenatesString (string, x) {
    let empty = "";
    for (let i = 0; i < string.length; i++) {
        for (i = 0; i < x; i++) {
            empty += string;
        }
    }
    return empty;
}

console.log(concatenatesString("abc", 4));
