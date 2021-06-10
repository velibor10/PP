'use strict';

/*
Employees and Managers 

Exercise done with old inheritance model using Constructor classes, call and this from parent class

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

function Person (name, surname) {

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

function Employee (name, surname, job, salary) {

    Person.call (this, name, surname);

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
    
    this.job = job;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary + "$.";
}
Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function (salary) {
    
    return this.salary += (this.salary * 0.1);
}


function Developer (name, surname, job, salary, specialization) {

    if (!specialization) {
        throw new Error ("Specialization must be declared");
    }

    if (typeof specialization !== "string") {
        throw new Error ("Specialization must be a text");
    }

    Employee.call (this, name, surname, job, salary);
    
    this.specialization = specialization;

}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Manager (name, surname, job, salary, department) {

    if (!department) {
        throw new Error ("Department must be declared");
    }

    if (typeof department !== "string") {
        throw new Error ("Department must be a text");
    }

    Employee.call (this, name, surname, job, salary);
    
    this.department = department;
    
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;


Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (department) {
    return this.department = department;
}







// Testing

 let pera = new Person ("pera", "peric");
 let laza = new Employee ("laza", "lazic", "supervisor",100000);
 let mika = new Developer ("mika", "mikic", "developer", 110000, "JS");
 let jova = new Manager ("jova", "jovanovic", "manager", 120000, "HR");
 let marko = new Manager ("marko", "markovic", "hr manager", 130000, "Executive Director");

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











