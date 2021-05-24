// 1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

//12345 -> 54321


function reverseInteger(num) {
    let result = parseInt(num.toString()
    .split("")
    .reverse()
    .join(""))

    return result;
}

let reverseNumber = reverseInteger(12345);

console.log(reverseNumber, typeof reverseNumber);


// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//Note: Assume punctuation, numbers and symbols are not included in the passed string.

//“Webmaster” -> “abeemrstw”.

function stringInAlphabeticalOrder(string) {
    let result = "";

    result = string.toLocaleLowerCase()
    .split("")
    .sort()
    .join("");

    return result;
}

let newString = stringInAlphabeticalOrder("Webmaster");

console.log(newString);

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
//	"Republic Of Serbia" -> "Rbceilpu Of Sabeir".

function stringInAlphabeticalOrder(string) {
    let result = "";

    result = string
    .split("")
    .sort()
    .join("");

    return result;
}


function alphabetFirstAndLastWord(string, action) {
    let array = [];
    let firstWord;
    let lastWord;
    let result;

    array = string.split(" ");

    firstWord = action(array[0]);
    lastWord = action(array[2]);

    array[0] = firstWord;
    array[2] = lastWord;

    result = array.join(" ");

    return result;
}

let result = alphabetFirstAndLastWord("Republic Of Serbia", stringInAlphabeticalOrder);

console.log(result);

// 4. Write a function to split a string and convert it into an array of words.

//	"John Snow" -> [ 'John', 'Snow' ].

function splitStringIntoArray (string) {
    let result = [];

    result = string.split(" ");

    return result;

}

let result = splitStringIntoArray("John Snow");

console.log(result);


// 5. Write a function to convert a string to its abbreviated form. 

//	"John Snow" -> 	"John S.".

function abbreviatedForm (string) {
    let array = [];
    let lastWord;
    let result;

    array = string.split(" "); 

    lastWord = array[1].slice(0, 1) + ".";

    result = array[0] + " " + lastWord;

    return result;
}

let result = abbreviatedForm("John Snow");

console.log(result);

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.

//	'0000', ‘123’, 'l' -> 0123 
//   '00000000', ‘123’, 'r' -> 12300000.


function addStringLeftOrRight (zeros, string, side) {
    let charactersNumber;
    let result = " ";
    let errorExists = " ";

    charactersNumber = zeros.length - string.length;
    
    try {
        if (charactersNumber <= 0) {
            throw new Error ("Input of zeros must be longer than input of string!!!");
        }
    } catch (error) {
        console.log(error.message);
        errorExists = error.name;
    }

    if (errorMessage === " ") {

        if (side === "l") {
            result = zeros.slice(0, charactersNumber) + string;
        } 
        else if (side === "r") {
            result = string + zeros.slice(0, charactersNumber);
        }
        else {
            console.log("Wrong letter for side parameter");
        }

    }
    return result;
}

let result = addStringLeftOrRight('00', "123", "l");

console.log(result);


    
