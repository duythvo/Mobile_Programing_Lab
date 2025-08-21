import { Person } from "./bai1";

export class Student extends Person{
    private grade: number;

    constructor(name: string, age: number, grade: number){
        super(name, age);
        this.grade = grade;
    }
    displayInfo(){
        console.log(this.name + this.age + this.grade)
    }
}