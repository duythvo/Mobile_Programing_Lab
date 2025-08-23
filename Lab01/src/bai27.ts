export class Person {
    constructor(public name: string, public age: number) {}
}

export class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    introduce(): void {
        console.log(`Toi ten la ${this.name}, toi dang hoc ${this.subject}`);
    }
}


