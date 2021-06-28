// Variables

let subjectDropDownList = document.querySelector("#subjectDropDownList");
let studentNameAndSurname = document.querySelector("#studentNameAndSurname");
let gradeInput = document.querySelector("#gradeInput");
let addButton = document.querySelector("#addButton");
let form1 = document.querySelector("form");
let passedTable = document.querySelector(".passedTable table");
let failedTable = document.querySelector(".failedTable table");
let passedNumberParagraph = document.querySelector(".passedNumber");
let failedNumberParagraph = document.querySelector(".failedNumber");
let totalStudents = document.querySelector(".para1 span");



// Functions 

// Function for create student

function createStudent() {
    try {
        let studentName = "";
        let studentSurname = "";
        let student;
        let studentNameAndStudentSurnameArray = studentNameAndSurname.value.split(" ");

        if (studentNameAndStudentSurnameArray[0] === undefined || studentNameAndStudentSurnameArray[1] === undefined) {
            throw new Error("Input for name and surname must contain both name and surname!");
        }

        studentName = studentNameAndStudentSurnameArray[0].slice(0, 1).toUpperCase() + studentNameAndStudentSurnameArray[0].slice(1, studentNameAndStudentSurnameArray[0].length).toLowerCase();
        studentSurname = studentNameAndStudentSurnameArray[1].slice(0, 1).toUpperCase() + studentNameAndStudentSurnameArray[1].slice(1, studentNameAndStudentSurnameArray[1].length).toLowerCase();

        student = new Student(studentName, studentSurname);

        return student;
    }
    catch (error) {
        alert(error.message);
    }
}

// Function for creating subject 


function createSubject() {
    try {
        let subject = new Subject(subjectDropDownList.value);

        return subject;
    }
    catch (error) {
        alert(error.message);
    }
}


// Function for creating Exam 


function createExam() {
    try {

        try {
            if (!parseInt(gradeInput.value)) {
                throw new Error("You must define student's grade!");
            }
        }

        catch (error) {
            alert(error.message);
        }

        let exam = new Exam(createSubject(), createStudent(), parseInt(gradeInput.value));

        exams.push(exam);

        passedOrFailedExams();
    }
    catch (error) {
        console.log(error.message);
    }
}


// Function for sort exams to tables

function passedOrFailedExams() {

    clearPassedTable();
    clearFailedTable();


    for (let i = 0; i < exams.length; i++) {
        if (exams[i].hasPassed() === "Passed") {
            let passedTableRow = document.createElement("tr");
            let passedTableTdReport = document.createElement("td");
            let passedTableGrade = document.createElement("td");
            passedTableRow.setAttribute("class", "passedTableRow");
            passedTableTdReport.textContent = exams[i].subject.getSubjectName() + " - " + exams[i].student.getStudentData();
            passedTableGrade.textContent = exams[i].grade;

            passedTable.appendChild(passedTableRow);
            passedTableRow.appendChild(passedTableTdReport);
            passedTableRow.appendChild(passedTableGrade);
        }

        else {
            let failedTableRow = document.createElement("tr");
            let failedTableTdReport = document.createElement("td");
            let failedTableGrade = document.createElement("td");
            failedTableRow.setAttribute("class", "failedTableRow");
            failedTableTdReport.textContent = exams[i].subject.getSubjectName() + " - " + exams[i].student.getStudentData();
            failedTableGrade.textContent = exams[i].grade;

            failedTable.appendChild(failedTableRow);
            failedTableRow.appendChild(failedTableTdReport);
            failedTableRow.appendChild(failedTableGrade);
        };
    }

    let passedTableRows = document.querySelectorAll(".passedTableRow").length;
    let failedTableRows = document.querySelectorAll(".failedTableRow").length;

    totalNumberOfStudents(passedTableRows, failedTableRows);

    statistic();

}

// Function for clearing Table for students that passed the exam


function clearPassedTable() {

    let passedTableItems = document.querySelectorAll(".passTable .passedTableRow");

    for (let i = 0; i < passedTableItems.length; i++) {
        let passedRow = document.querySelector(".passedTableRow");
        let passedTable = passedRow.parentElement;
        passedTable.removeChild(passedRow);
    }
}


// Function for clearing Table for students that failed the exam


function clearFailedTable() {

    let failedTableItems = document.querySelectorAll(".failTable .failedTableRow");

    for (let i = 0; i < failedTableItems.length; i++) {
        let failedRow = document.querySelector(".failedTableRow");
        let failedTable = failedRow.parentElement;
        failedTable.removeChild(failedRow);
    }
}


// Function for working statistics

function statistic() {
    let passTableItems = document.querySelectorAll(".passTable .passedTableRow");
    let failTableItems = document.querySelectorAll(".failTable .failedTableRow");
    let passCount = 0;
    let failCount = 0;
    for (let i = 0; i < passTableItems.length; i++) {
        passCount++;
    }
    for (let i = 0; i < failTableItems.length; i++) {
        failCount++;
    }
    passedNumberParagraph.textContent = passCount;
    failedNumberParagraph.textContent = failCount;
}


// Function for counting total number of students

function totalNumberOfStudents(a, b) {
    totalStudents.textContent = a + b;
}

// Function for prevent submiting form

function preventSubmit(e) {
    e.preventDefault();
}







