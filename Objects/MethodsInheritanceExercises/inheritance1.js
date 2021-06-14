'use strict';

/*

Exercise done with classes

Employees and Managers  

Exercise done with new inheritance model using classes, constructor and super

1. Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department

2. All developers should inherit method:
getSpecialization which prints out the name of the specialization

3. All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

4. All employees should inherit methods:
getData which returns the name, surname and salary 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% */



class Person {

    constructor(name, surname) {

        if (!name) {
            throw new Error ("Name must be declared");
        }
    
        if (!surname) {
            throw new Error ("Surname must be declared");
        }
    
        if (typeof name !== "string") {
            throw new Error ("Name must be a text");
        }
    
        if (typeof surname !== "string") {
            throw new Error ("Surname must be a text");
        }

        this.name = name;
        this.surname = surname;
    }

}


class Employee extends Person {

    constructor(name, surname, job, salary) {

        if (!job) {
            throw new Error ("Job must be declared");
        }
    
        if (!salary) {
            throw new Error ("Salary must be declared");
        }
    
        if (typeof job !== "string") {
            throw new Error ("Job must be a text");
        }
    
        if (typeof salary !== "number") {
            throw new Error ("Salary must be a number");
        }

        super(name, surname);

        this.job = job;
        this.salary = salary;
    }

    getData() {
        return this.name + " " + this.surname + " " + this.salary + "$."
    }

    getSalary() {
        console.log(this.salary);
    }

    increaseSalary() {
        return this.salary += (this.salary * 0.1);
    }

}

class Developer extends Employee {

    constructor(name, surname, job, salary, specialization) {

        if (!specialization) {
            throw new Error ("Specialization must be declared");
        }
    
        if (typeof specialization !== "string") {
            throw new Error ("Specialization must be a text");
        }

        super(name, surname, job, salary);

        this.specialization = specialization;
    }

    getSpecialization() {
        console.log(this.specialization);
    }

}

class Manager extends Employee {

    constructor(name, surname, job, salary, department) {

        if (!department) {
            throw new Error ("Department must be declared");
        }
    
        if (typeof department !== "string") {
            throw new Error ("Department must be a text");
        }

        super(name, surname, job, salary);

        this.department = department;
    }

    getDepartment() {
        console.log(this.department);
    }

    changeDepartment (department) {
        return this.department = department;
    }

}


// TESTING

console.log("\n");
console.log("Task1 Employees and Managers");
console.log("\n");



let pera = new Person ("pera", "peric");
let laza = new Employee ("laza", "lazic", "supervisor",100000);
let mika = new Developer ("mika", "mikic", "developer", 110000, "JS");
let jova = new Manager ("jova", "jovanovic", "manager", 120000, "HR");

console.log(pera);
console.log(laza);
console.log(mika);
console.log(jova);

mika.getSpecialization();

jova.getDepartment();

console.log(jova.changeDepartment("Board"));

console.log(laza.getData());
console.log(mika.getData());
console.log(jova.getData());

laza.getSalary();
mika.getSalary();
jova.getSalary();

console.log(laza.increaseSalary());
console.log(mika.increaseSalary());
console.log(jova.increaseSalary());





console.log("\n");
console.log("Task2 Applications");
console.log("\n");



/* Applications:

1. Create constructor functions with properties representing the following:

WebApp: name, url, technologies, licence, stars

MobileApp: name, platforms, licence, stars
 
2. All web applications should inherit methods: 

getData which prints out all the information

reactBased which checks if one of the used technologies is React
 
3. All mobile applications should inherit methods:

getData which prints out all the informations

forAndroid which checks if one of the platforms the application is developed for is Android

4. Both web and mobile applications should inherit methods:

isCCLicence  which checks if the licence of the application is CC (Creative Commons) 

like which increases the number of stars by one

showStars which prints out the number of stars */



class Applications {

    constructor(name, licence, stars) {

        if (!name) {
            throw Error("Name must be defined");
        }
        if (!licence) {
            throw Error("Licence must be defined");
        }
        if (!stars) {
            throw Error("Stars must be defined");
        }
        if(typeof name !== "string") {
            throw new Error("Name must be a text")
        }
        if(typeof licence !== "string") {
            throw new Error("Licence must be a text")
        }
        if(typeof stars !== "number") {
            throw new Error("Stars must be a number");
        }

        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    isCCLicence() {
        if (this.licence === "CC") {
            console.log("Licence for this application is CC");
        }
        else {
            console.log("Licence for this application is not CC");
        }
    }

    like() {
        console.log(this.stars += 1);
    }

    showStars() {
        console.log(this.stars);
    }

}


class WebApp extends Applications {

    constructor(name, licence, stars, url, technologies) {

        if (!url) {
            throw Error("Url must be defined");
        }
        if (!technologies) {
            throw Error("Technologies must be defined");
        }
        if(typeof url !== "string") {
            throw new Error("Name must be a text")
        }
        if(typeof technologies !== "string") {
            throw new Error("Licence must be a text")
        }

        super(name, licence, stars);

        this.url = url;
        this.technologies = technologies;

    } 

    getData() {
        console.log("NAME: " + this.name + ", LICENCE: " + this.licence + ", STARS: " + this.stars + ", URL: " + this.url + ", TECH: " + this.technologies);
    }

    reactBased() {
        if (this.technologies === "React") {
            console.log("This web application is using React technology");
        }
        else {
            console.log("This web application is not using React technology");
        }
    }

}



class MobileApp extends Applications {

    constructor(name, licence, stars, platforms) {

        if (!platforms) {
            throw Error("Platforms must be defined");
        }
        if (typeof platforms !== "string") {
            throw new Error("Platforms must be a text");
        }

        super(name, licence, stars);

        this.platforms = platforms;
    }

    getData() {
        console.log("NAME: " + this.name + ", LICENCE: " + this.licence + ", STARS: " + this.stars + ", PLATFORMS: " + this.platforms);
    }

    forAndroid() {
        if(this.platforms === "Android") {
            console.log("This platform is developed for Android")
        }
        else {
            console.log("This platform is not developed for Android");
        }
    }

}


// TESTING



let application = new Applications("facebook", "CCC", 5)
let webApp = new WebApp("instagram", "CCC", 4, "instagram.com", "React");
let mobileApp = new MobileApp("twitter", "CCCC", 3, "Android");

console.log(application);
console.log(webApp);
console.log(mobileApp);

webApp.getData();
webApp.reactBased();
mobileApp.getData();
mobileApp.forAndroid();
application.isCCLicence();
application.like();
application.showStars();
application.like();
