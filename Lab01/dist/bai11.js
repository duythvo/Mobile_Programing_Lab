"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("Woof! woof!");
    }
}
exports.Dog = Dog;
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("Meoooooooooooooooooooooooooooooooooo");
    }
}
exports.Cat = Cat;
