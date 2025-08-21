import { Animal } from "./bai9";
export class Dog implements Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    sound(): void {
        console.log("Woof! woof!")
    }
}

export class Cat implements Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    sound(): void {
        console.log("Meoooooooooooooooooooooooooooooooooo")
    }
}

