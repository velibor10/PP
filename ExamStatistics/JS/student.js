
let student = [];

class Student {
    constructor(studentName, studentSurname) {
        if (!studentName) {
            throw new Error("Name of student must be defined");
        }
        if(!studentSurname) {
            throw new Error ("Surname of student must be defined");
        }
        if(typeof studentName !== "string") {
            throw new Error ("Input for student name must be a text");
        }
        if(typeof studentSurname !== "string") {
            throw new Error ("Input for student surname must be a text");
        }
        this.studentName = studentName;
        this.studentSurname = studentSurname;
    }

    getStudentData() {
        let result = "";
        result = this.studentName + " " + this.studentSurname;
        return result;
    }
}