"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai13_1 = require("./bai13");
var person = new bai1_1.Person("Duy", 21);
// console.log(person);
var student = new bai2_1.Student("Duy", 12, 12);
// console.log(student)
var car = new bai3_1.Car("hi", "hi", 1999);
// console.log(car)
var rectangle = new bai4_1.Rectangle(2, 3);
// console.log(rectangle.area())
// console.log(rectangle.perimeter())
var bankAccount = new bai5_1.BankAccount(100);
// console.log(bankAccount.balance)
// bankAccount.deposit(1)
// console.log(bankAccount.balance)
// bankAccount.withdraw(1)
// console.log(bankAccount.balance)
// var user = new User("Duy");
// console.log(user.getter())
// user.setter("Hi")
// console.log(user.getter())
// var product1 = new Product("giay", 100)
// var product2 = new Product("non", 101)
// var product3 = new Product("quan", 102)
// let arr = [product1, product2, product3]
// const filter = arr.filter((x) => x.price > 100)
// console.log(filter)
// var cat = new Cat("Meo rung chau phi")
// cat.sound()
// var dog = new Dog("Cho tay tang")
// dog.sound()
// var bird = new Birds("Vanh khuyen")
// bird.fly()
// var fish = new Fish("Ca trich")
// fish.swim()
var square = new bai13_1.Square(4);
var circle = new bai13_1.Cricle(2);
console.log(square.area());
console.log(circle.area());
