/*Variable declaration and initialization
1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.*/

var a = 10;
var word = "rec";
var x = a + a;
var Bulian = true;
var $888 = 888;
console.log(a, word, x, Bulian, $888);

//2. Save a string (text) describing your current mood in a variable and print it out in console//

var tekst = "Jos sam pospan i pije mi se kafa";
console.log(tekst);

//3. Feel free to play around in the console and get familiar with it.//

console.log(typeof $888);

/*Arithmetic operators
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?*/

var broj = 5;
var brojevi = 12;
var vrednost = 25;
var velicina = 11;

c = broj - brojevi - vrednost;
d = broj * brojevi - vrednost / velicina;
e = broj / brojevi - vrednost * velicina;
console.log(c, d, e)

//5. How many grams weight 1.2kg of bananas?//

var weightInKg = 1.2;
var weightInGr = weightInKg * 1000;
console.log(weightInGr);

/*6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…*/

var waitmin1 = 5;
var waitmin2 = 30;
var waitAnna = waitmin1 * 60;
var waitTom = waitmin2 * 60;
console.log("We will wait Anna" + " " + waitAnna + " " + "seconds");
console.log("We will wait Tom" + " " + waitTom + " " + "seconds");

/*7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?*/

var UsbMemory = 4;
var adMemory =  UsbMemory * 1000;
var numberOfArticles = adMemory * 1000 / 98;
console.log(adMemory);
console.log(numberOfArticles);

//8. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?//

var a = 2;
var result = a*=2;
console.log(result);
var b = 5;
var result1 = b+=3;
console.log(result1);
var c = 10;
var result2 = c/=5;
console.log(result2);
var d = 4;
var result3 = d-=7;
console.log(result3);

/* 9. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var myName = "Velibor";
var age = 36;
var iHaveACat = false ;
console.log(myName, age, iHaveACat);
console.log(typeof myName,typeof age,typeof iHaveACat);

/* 10. Check which type are these values:
- “number”
- true
- null
- “false”
- 56*/

var a = "number";
var b = true;
var c = null;
var d = "false";
var e = 56;
console.log(typeof a, typeof b, typeof c, typeof d, typeof e);

/*Logical operators
11. Check how good you are at guessing the Boolean equivalent of different values using the
console. Do you remember how to check for a Boolean equivalent of a value?*/

var a = "";
var b = null;
var c = undefined;
var d = 0;
var e = NaN;
var f = false;
console.log(!!a, !! b, !!c, !!d, !!e, !!f);
console.log(!a, !b, !c, !d, !e, !f);

/* 12. Use the console to check the results you think should go in the following table:

p q                         p && q       p || q
true true                   true         true                
true false                  false        true
false true                  false        true
false false                 false        false   */

var p = false;
var q = false;
console.log(p && q);
console.log(!(p && q));
console.log(p || q);
console.log(!(p || q));

/* 13. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

var age = 37;
var yearOfBirth = 1984;
var currentYear = 2021;
console.log(currentYear - yearOfBirth === age);
console.log(age > 0);
console.log(age > 120);


/* 14. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)*/

var speed = 120;
var safeSpeed = speed >= 60 && speed <= 120;
console.log(safeSpeed);

