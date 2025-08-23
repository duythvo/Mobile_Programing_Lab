"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = exports.Student = void 0;
const bai27_1 = require("./bai27");
class Student extends bai27_1.Person {
}
exports.Student = Student;
class School {
    constructor(students, teachers) {
        this.students = students;
        this.teachers = teachers;
    }
    displayInfo() {
        console.log("Teachers");
        this.teachers.forEach(t => console.log(`${t.name} - ${t.subject}`));
        console.log("Students");
        this.students.forEach(s => console.log(`${s.name} - Age: ${s.age}`));
    }
}
exports.School = School;
