/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/

var day = 10;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("I dont know what day is it")
        break;
}

/*2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

var day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Input must be a number between 1 and 7");
        break;
}

/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

var day = 12;
switch (day) {
    case 1:
        console.log("It’s weekday");
        break;
    case 2:
        console.log("It’s weekday");
        break;
    case 3:
        console.log("WIt’s weekday");
        break;
    case 4:
        console.log("It’s weekday");
        break;
    case 5:
        console.log("It’s weekday");
        break;
    case 6:
        console.log("It’s weekend");
        break;
    case 7:
        console.log("It’s weekend");
    default:
        console.log("Input must be a number between 1 and 7");
        break;
}

/*4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.*/

var month = 13;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
            break;
    case 4:
        console.log("April");
            break;
    case 5:
        console.log("May");
            break;  
    case 6:
        console.log("June");
        break; 
    case 7:
        console.log("July");
        break; 
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break; 
    case 10:
        console.log("October");
        break; 
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Input must be a number between 1 and 12");
        break;
}

/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.*/

var month = 5;
switch (month) {
    case 1:
        console.log("Winter");
        break;
    case 2:
        console.log("Winter");
        break;
    case 3:
        console.log("Spring");
            break;
    case 4:
        console.log("Spring");
            break;
    case 5:
        console.log("Spring");
            break;  
    case 6:
        console.log("Summer");
        break; 
    case 7:
        console.log("Summer");
        break; 
    case 8:
        console.log("Summer");
        break;
    case 9:
        console.log("Autumn");
        break; 
    case 10:
        console.log("Autumn");
        break; 
    case 11:
        console.log("Autumn");
        break;
    case 12:
        console.log("Winter")
        break;
    default:
        console.log("Input must be a number between 1 and 12");
        break;
}

/*6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.*/

var grade = "F";
switch (grade) {
    case "A":
        console.log('A - "Good job"')
        break;
    case "B":
        console.log('B - "Pretty good"')
        break;
    case "C":
        console.log('C - "Passed"');
        break;
    case "D":
        console.log('D - "Not so good"')
        break;
    case "F":
        console.log('"Failed"');
    default:
        console.log("Unknown grade");
        break;
}

/*7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.*/

var city = "Leskovac"
switch (city) {

    case "Leskovac":
    case "Belgrade":
    case "Nis":
    case "Novi Sad":
    case "Kragujevac":    
        console.log("Serbia");
        break;
    case "Rome":
    case "Verona":
    case "Florence":
    case "Napul":
        console.log("Italy");
        break;
    case "Paris":
    case "Toulouse":
    case "Nice":
        console.log("France");
        break;
    case "Madrid":
    case "Barcelona":
        console.log("Spain");
        break;
    case "Prague":
        console.log("Poland");
        break;
    default:
        console.log("Please choose a different city");
        break;
}  

/*8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!*/
 
var a = 10;
var b = 0;
var  operation = "/";
switch (operation) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
        case "*":
        console.log(a * b);
        break;
    case "/":
        if (b === 0) {
            console.log("You can not divide with 0");
            break;
        }else {
            console.log(a / b); 
            break;
        } 
    default:
        console.log("nesto");
        break;
    }