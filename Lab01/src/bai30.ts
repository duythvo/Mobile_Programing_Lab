import { Person, Teacher } from "./bai27";

export class Student extends Person {}

export class School {
    constructor(public students: Student[], public teachers: Teacher[]) {}

    displayInfo(): void {
        console.log("Teachers");
        this.teachers.forEach(t => console.log(`${t.name} - ${t.subject}`));

        console.log("Students");
        this.students.forEach(s => console.log(`${s.name} - Age: ${s.age}`));
    }
}


