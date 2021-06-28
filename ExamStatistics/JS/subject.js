
let subject = [];

class Subject {
    constructor (subjectName) {
    if(!subjectName) {
        throw new Error("Name of subject must be defined");
    }

    this.subjectName = subjectName;

    }

    getSubjectName() {
        return this.subjectName;
    }

}


