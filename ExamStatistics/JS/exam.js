
let exams = [];

class Exam {
    constructor(subject, student, grade) {
        if (!subject) {
            throw new Error("Subject must be defined!");
        }
        if(!student) {
            throw new Error ("Student must be defined!");
        }
        if(!grade) {
            throw new Error ("Grade must be defined!");
        }
        if(!(subject instanceof Subject)) {
            throw new Error("Subject must be instance of class Subject!");
        }
        if(!(student instanceof Student)) {
            throw new Error("Student must be instance of class Student!");
        }
        if(typeof grade !== "number") {
            throw new Error("Grade must be a number!");
        }
        if(grade < 1 || grade > 10) {
            throw new Error("Grade must be a number between 1 and 10!");
        }

        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    getexamInfo() {
        let result = "";
        result = this.subject + " " + this.student.getStudentData();
        return result;
    }

    hasPassed() {
        if(this.grade > 5) {
            return "Passed";
        }
        else {
            return "Failed";
        }
    }
}