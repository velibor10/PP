/*0.Write a program that will iterate from 0 to 10 and display squares of numbers.*/

for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}

/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/


for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("Even number")
    } else {
        console.log("odd number")
    }
}


//2. Write a program to sum the multiples of 3 and 5 under 1000. brojevi koji su deljivi sa 3 i 5


var sum = 0;

for (var i = 0; i < 1000; i++) {

    if(i % 3 === 0 && i % 5 === 0) {
        sum += i;  
    }
}
console.log(sum);

//3. Write a program to compute the sum and product of an array of integers.


var arr = [1, 3, 2, 5, 14];
var sum = 0;
var product = 1; 
for (i = 0; i < arr.length; i++) {
    sum+=arr[i];
    product*=arr[i];
}
console.log(sum, product);


/*4. Write a program which prints the elements of the following array as a single string.
var x = ["1", "A", "B", "c", "r", true, NaN, undefined]; */


var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string1 = "";
for (var i = 0; i < x.length; i++) {
    string1 += x[i];
}
console.log(string1);


//5. Write a program that prints the elements of the following array.
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]]

for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}

for (var i in a) {
   console.log(i);
    for (var j in a[i]) { 
        console.log(a[i][j]);
    }
}
//6. Write a program that outputs the sum of squares of the first 20 numbers.


var sum = 0;
var i = 0;
while (i <= 20) {
    sum += i * i;
    i++;
}
console.log(sum);


/*7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

//David                  80
//Marko                  77
//Dany                   88
//John                   95
//Thomas                 68

//The grades are computed as follows:

//<60%                  F
//<70%                  D
//<80%                  C
//<90%                  B
//<100%                 A   */

var david = 80;
var marko = 77;
var dany = 88;
var john = 95;
var thomas = 68;
var team = [david, marko, dany, john, thomas];
var sumPoints = 0;
var average = 0;

for (var i = 0; i < team.length; i++) {
    sumPoints+= team[i];
}
average = sumPoints / team.length;

if (average < 60) {
    console.log("F");
} else if (average < 70 && average > 60) {
    console.log("D");
} else if (average < 80 && average > 70) {
    console.log("C");
} else if (average < 90 && average > 80) {
    console.log("B");
} else if (average < 100 && average > 90) {
    console.log("A");
} else {
    console.log("Not a number"); 
}


/*8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).
Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself.*/

for (var a = 1; a <= 100; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (a % 3 === 0) {
        console.log("Fizz");
    }    else if (a % 5 === 0) {
            console.log("Buzz");
        }
    else {
        console.log(a);
    }
}


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */






