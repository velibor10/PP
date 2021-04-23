"use strict";

// Example 0

var result = true;

function subtract(first, second) {

return first - second;

}

result = subtract(12, -10);

result = subtract(22, 2);

console.log(result); 

/*

Prvo je deklarisana promenljiva result i dodeljena joj je vrednost true.
Zatim je deklarisana funkcija sa imenom substract sa 2 parametra koja ima return prvi - drugi parametar.
Posle hoistinga funkcija ide iznad varijable.
Nakon toga se izvrsava prva linija koda za parametre (12, -10) i dodeljuje se varijabli result.
Nakon toga se izvrsava sledeca liniuja koda sa parametrima (22, 2) i dodeljuje se varijabli result.
Konacno kada stampamo varijablu result, ona ima vrednost koja joj je dodeljena u poslednjoj liniji koda sa parametrima (22, 2) a to je 20.

*/

// Example 1

'use strict';

myVar = "random";

function addOne(num) {

return num + 1;

}

var result = addOne(4);

console.log(result);

/*
Kada koristimo 'use strict' kao u ovom slucaju, varijabla myVar nije deklarisana i program to ne podrzava u ovom modu i odmah se javlja greska
*/

// Example 2

var global = 123;

var resetGlobal = function () {

global = -1;

};

console.log(global);

/*
Deklarisana je varijabla global i dodeljena je vrednost 123.
Deklarisana je varijabla resetGlobal kojoj je dodeljena anonimna funkcija.
Zbog toga sto nije pozvana funkcija rezultat varijable global je ostao isti i bice 123.
*/

// Example 3

var global = 123;

var resetGlobal = function () {

global = -1;

};

resetGlobal;

console.log(global);

/*
Deklarisana je varijabla global i dodeljena je vrednost 123.
Deklarisana je varijabla resetGlobal kojoj je dodeljena anonimna funkcija.
Zatim je napisano ime funkcije, ali bez zagrada sto znaci da nismo invokovali funkciju.
Zbog toga je vrednost varijable global ostala ista kao i kad je deklarisana a to je 123.
*/

var global = 123;

var resetGlobal = function () {

global = arguments[0] || -1;

};

resetGlobal(10);

console.log(global);

resetGlobal(0);

console.log(global);

/*
Deklarisana je varijabla global i dodeljena je vrednost 123.
Deklarisana je varijabla resetGlobal kojoj je dodeljena anonimna funkcija u kojoj se menja vrednost varijable global u zavisnosti od uslova.
Ako je funkciji zadat argument koji je truthy(arguments[0]) varijabla global ce dobiti vrednost zadate truthy vrednosti.
Ukoliko je funkciji zadat argument koji je falsy, u tom slucaju -1 ce biti truthy vrednost i varijabla global ce dobiti vrednost truthy vrednosti iz uslova unutar funkcije sto je u ovom slucaju -1.
*/

// Example 5

'use strict';

var result = square(10);

console.log(result);

function square(num) {

num *= num;

}

/*
Koristimo 'use strict';
Deklarisana je varijabla result kojoj je dodeljena vrednost funkcije square sa argumentom 10.
Stampamo varijablu result.
Nakon toga je deklarisana funkcija square sa parametrom num i u telu funkcije je num = num * num.
Zbog toga sto funkcija nema return ona vraca undefined.
Kada varijabli result dodelimo funkciju koja vraca undefined vrednost varijable result ce biti undefined i odstampca se undefined.
*/

// Example 6

'use strict';

var result = square(10);

console.log(result);

function square(num) {

return num *= num;

}

/*
Koristimo 'use strict';
Deklarisana je varijabla result kojoj je dodeljena vrednost funkcije square sa argumentom 10.
Stampamo varijablu result.
Nakon toga je deklarisana funkcija square sa parametrom num i u telu funkcije je num = num * num.
Funkcija u ovom slucaju vraca(return num = num * num) i zbog toga je vrednost varijable result 10 * 10 = 100 i stampacemo 100.
*/

// Example 7

function toString(num) {

    result = num + '';
    
    return result;
    
}
console.log(result);

/*
Varijabla result nije nigde definisana i izbacice tu gresku
*/

// Example 8

function toString(num) {

    'use strict';
    
    result = num + '';
    
    return result;
    
}
    
toString(num);
    
console.log(result);

/*
Definisana je funkcija toString u cijem telu imamo 'use strict'; vrednost varijable result je num + "" i ona ima return result.
Nakon toga pozivamo punkciju sa argumentom (num).
Zatim stampamo result.
Kada smo pozvali funkciju ona pokusava da pronadje argument num koji nije definisan i odmah dolazi do greske num is not defined.
U slucaju da imamo definisan argument varijabla result ne bi bila definisana jer je unutar use stricta i mora da bude definisana sa let ili var...
*/

// Example 9

var output = toString(0.15);

console.log(output);

var toString = function (num) {

var result = num + '';

return result;

}

/*
Prvo smo varijabli output dodelili vrednost funkcijetoString sa argumentom(0.15).
Tek onda smo definisali funkciju toString i program vidi gresku da toString nije funkcija jer je posle njene upotrebe ona definisana i koriscena
*/

// Example 10

var toString = function (num) {

    var result = num + '';
    
    return result;
    
}
    
var output = toString(0.15);
    
console.log(typeof output);

/*
U ovom slucaju funkcija je prvo deklarisana. 
Zatim je invokovana i izvrsice se i odstampace nam string od zadatog argumenta.
*/

var toString = function (num) {

    num = num || '';
    
    var result = num + '';
    
    return result;
    
}
    
var output = toString;
    
console.log(output);

/*
Varijabli toString smo dodelili vrednost funkcije sa parametrom (num) koja vraca result.
Zatim smo varijabli output dodelili vrednost onoga sto je u varijabli toString a  to je funkcija, pa ce zbog toga console.log(output) odstampati da varijabli output dodeljena vrednost funkcije toString.
*/

// Example 12

// 'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {

global++;

};

incrementGlobal();

console.log(global);

console.log(typeof global);

/*
Definisali smo varijablu global i dali joj vrednost parseInt("1e2").
Zatim smo definisali varijablu incrementGlobal i dodelili joj vrednost funkcije u kojoj smo povecali varijablu global za 1.
Zatim smo pozvali funkciju incrementGlobal.
Zbog toga stampamo 2 u prvom redu, a u drugom je type number.
Da imamo use strict nezakomentarisan greska bi bila jer increment global varijabla nije definisana a u 'use strict'; moramo da definisemo sve varijable.
*/

// Example 13

function sum(num1, num2) {

    num1 = num1 || 0;
    
    num2 = num2 || 0;
    
    if (!num1 && !num2) {
    
        return -1;
    
    }
    
    return num1 + num2;
    
}
    
var sumNumbers = sum;
    
var result = sumNumbers();
    
console.log(result);

/*
Prvo je deklarisana funkcija sum koja ima dva parametra num1 i num2.
Nakon toga je deklarisana varijabla sumNumbers kojoj je dodata ono sto se nalazi u funkciji sum jer nije pozvana zagradama i ona postaje sum funkcija sa undefined parametrima.
Nakon toga varijabli result smo dodelili vrednost funkcije sumNumbers koju smo pozvali i izvrsice se ono sto je u njoj i smestiti ce se u varijablu result.
U funkciji sum sa undefined parametrima num1 = undefined || 0 oba su false dobijamo false i num 2 || 0 su oba false i dobijamo opet false.
Zatim gledamo uslove, if (!false && ! false) fobijamo true i ona nam vraca return -1, pa ce se to smestiti u result.
Na kraju console.log stampa result = -1;
*/

// Example 14

var x = 21;

var girl = function () {

console.log(x);

var x = 20;

};

girl();

/*
Deklarisali smo varijablu x = 21.
Zatim varijablu girl kojoj smo dodelili vrednost anonimne funkcije koja stampa x, pa smo u telu funkcije definisali novu varijablu x = 20.
Kada smo pozvali funkciju girl krenula je da se izvrsava i prvo se stampa x koje je undefined i to ce se odstampati a zatim se varijabli x dodeljuje vrednost 20.
Zato se u consoli stampa undefined.
*/

// Example 15

function test() {

    console.log(a);
    
    console.log(foo());
    
    var a = 1;
    
    function foo() {
    
    return 2;
    
    }
    
}
    
test();

/*
Definisali smo funkciju test bez parametara.
Zatim u njoj stampamo a, a zatim stampamo funkciju foo u kojoj je var a = 1 pa definisemo funkciju foo koja vraca 2.
Na kraju smo pozvali test funkciju kojom realizujemo kod unutar nje.
Prvo ce se odstampati a koje je undefined, a zatim ce se stampati funkcija foo koja vraca 2 i odstampace se 2 i dobijamo undefined i 2 u consoli.
*/

