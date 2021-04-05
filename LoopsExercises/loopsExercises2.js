/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes 

Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */


var a = [5, -4.2, 18, 7];
var e = 3;
var result = "no";
for (i = 0; i < a.length; i++) {
   if (e === a[i]) {
       result ="yes"; 
   }  
}
console.log(result);


/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */


var a = [-3, 11, 5, 3.4, -8];
var i = 0;
var b = [];

while (i < a.length) {
    if (a[i] > 0) {
        b[i] = (a[i] * 2);        // b.push(a[i] * 2)
    } else {
        b[i] = (a[i]);
    }
    i++;
}
console.log(b);

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */


var arr = [4, 2, 2, -1, -6];
var min = arr[0];

for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            index = i;
        } 
}
console.log(min,index);

/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */


var arr = [4, 2, 2, -1, 6];
var  min = arr[0];
var nextMin = arr[0];
for (var i = 1; i < arr.length; i++) {
	if (min > arr[i]) {
		min = arr[i];
	}
}
for (var i = 1; i < arr.length; i++) {
	if (nextMin > arr[i] && arr[i] !== min) {
		nextMin = arr[i];
	}
}
console.log(nextMin);


/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

var arr1 = [3, 11, 5, -3, 2];
var sume = 0;

for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
        sume += arr1[i];
    }
}
console.log(sume);


/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var array = [3, 4, 12, 8]; 

var result = "The array is symmetric";
var j = 0;
for (i = array.length - 1; i >= 0; i--) {
    if (array[j] !== array[i]) {
        result ="The array isn't symetric";
    }
    j++;
}
console.log(result);


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

array1 = [4, 5, 6, 2];
array2 = [3, 8, 11, 9];
array3 = [];

for (i = 0; i < array1.length; i++) {
    if (array1[i]) {
        array3[array3.length] = array1[i];
        }
    if (array2[i]) {
        array3[array3.length] = array2[i];   
    }
}
console.log(array3);


/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var arrayA = [4, 5, 6, 2];
var arrayB = [3, 8, 11, 9];
var arrayC = [];
var j = 0;

for (i = 0; i < arrayA.length + arrayB.length; i++) {
    if (i < arrayA.length) {
        arrayC[i] = arrayA[i];
    } else {
        arrayC[i] = arrayB[j];
        j++;
    }
}

console.log(arrayC);


/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var i = 0;
var a1 = [];

/*while (i < a.length) {
    if (a[i] === e) {
        delete a[i];
    } 
    i++;
}

console.log(a);*/

for (i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        a1[a1.length] = a[i];
    }
}
console.log(a1);


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

e = 78;
p = 3;
a = [2, -2, 33, 12, 5, 8];

for (i = 0; i < a.length; i++) {
    let empty = [];
    if (p > a.length) {
        a = "Error"
    } else if (i === p) {
        empty[p] = e;
    }
    empty[empty.length] = a[i];
}
console.log(a);




