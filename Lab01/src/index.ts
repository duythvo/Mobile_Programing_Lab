import {Person} from "./bai1";
import {Student}  from "./bai2"
import {Car} from "./bai3"
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Birds, Fish } from "./bai12";
import { Square, Cricle } from "./bai13";

var person = new Person("Duy", 21);
// console.log(person);

var student = new Student("Duy", 12, 12)
// console.log(student)

var car = new Car("hi", "hi", 1999)
// console.log(car)

var rectangle = new Rectangle(2, 3)
// console.log(rectangle.area())
// console.log(rectangle.perimeter())

var bankAccount = new BankAccount(100);

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

var square = new Square(4);
var circle = new Cricle(2)
console.log(square.area())
console.log(circle.area())
  