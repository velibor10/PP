/* 1. Write a function to check wheter the `input` is a string or not.

"My random string" -> true
12 -> false */

function checkString(string) {
    return typeof string === "string";
}

console.log(checkString(12));


/* 2. Write a function to check wheter a string is blank or not.

"My random string " -> false
" " -> true
12 - > false
false -> false */

function blankString(input) {
    if (input === " ") {
        return true;
    } else {
        return false;
    }
}

console.log(blankString(false));


/* 3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha" 3 -> "HaHaHa" */

function concatenates(string) {
    let empty = "";
    let n = 3;
    for (let i = 0; i < string.length; i++) {
        empty += string[i];
    }
    for (j = 1; j < n; j++) {
        empty += string;
    }
    return empty;
}

console.log(concatenates("Ha"));


/* 4. 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2. */

function countNumberOfLetters(string, letter) {
    let sume = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            sume += 1;
        }
    }
    return sume;
}

console.log(countNumberOfLetters("My random string", "n"));


/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */

function firstOccurrenceOfACharacter(string, position) {
    let result = -1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === position) {
            result = i + 1;
            break;
        }
    }
    return result;
}

console.log(firstOccurrenceOfACharacter("occupation", "c"));


/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

function lastOccurrenceOfACharacter(string, position) {
    let result = -1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === position) {
            result = i + 1;
        }
    }
    return result;
}

console.log(lastOccurrenceOfACharacter("repetition", "t"));


/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"] */

function convertStringIntoArray(string) {
    let empty = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            empty[i] = null;
        } else {
            empty[i] = string[i];
        }
    }
    return empty;
}

console.log(convertStringIntoArray("Random"));


/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

function isNumberPrime(x) {
    let counter = 0;
    for (i = 1; i <= x; i++) {
        if (x % i === 0) {
            counter++;
        }
    }
    if (counter > 2) {
        return false;
    } else {
        return true;
    }
}
console.log(isNumberPrime(12));

/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.

"My random string", " " -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string", */

function replaceSpaces(string, separator) {
    let empty = "";
    separator = separator || "-";
    for (i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            empty += separator;
        } else {
            empty += string[i];
        }
    }
    return empty;
}

console.log(replaceSpaces("My random string"));


// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function nCharacters(string, n) {
    let empty = "";
    for (let i = 0; i < n; i++) {
        empty += string[i];
    }
    return empty += "...";
}

console.log(nCharacters("Velibor", 4));


/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.

["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */


function arrToString(array) {
    let emptyArr = [];
    for (let i = 0; i < array.length; i++) {
        let convert = parseFloat(array[i]);
        if (isFinite(convert)) {
            emptyArr[emptyArr.length] = convert;
        }
    }
    return emptyArr;
}

console.log(arrToString(["1", "21", undefined, "42", "1e+3", Infinity]));


/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

function retirement(currentYear, yearOfBirth, gender) {
    let yearsToRetire = 0;
    if (gender = "male" && currentYear - yearOfBirth < 65) {
        yearsToRetire = 65 - (currentYear - yearOfBirth);
    } else {
        yearsToRetire = "Already retired";
    }
    if (gender = "female" && currentYear - yearOfBirth < 60) {
        yearsToRetire = 60 - (currentYear - yearOfBirth);;
    } else {
        yearsToRetire = "Already retired";
    }
    return yearsToRetire;
}

console.log(retirement(2022, 1963, "female"));

/* 13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.

1 -> 1st
11 -> 11th; */

function humanizeNumber(x) {
    if (x % 100 === 11 || x % 100 === 12 || x % 100 === 13) {
        x += "th";
    } else if (x % 10 === 1) {
        x += "st";
    } else if (x % 10 === 2) {
        x += "nd";
    } else if (x % 10 === 3) {
        x += "rd";
    } else {
        x += "th";
    }
    return x;
}

console.log(humanizeNumber(43));
