"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai30_1 = require("./bai30");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai27_1 = require("./bai27");
//Bai01
var person = new bai1_1.Person("Duy", 21);
// console.log(person);
//Bai02
var student = new bai2_1.Student("Duy", 12, 12);
// console.log(student)
//Bai03
var car = new bai3_1.Car("hi", "hi", 1999);
// console.log(car)
//Bai04
var rectangle = new bai4_1.Rectangle(2, 3);
// console.log(rectangle.area())
// console.log(rectangle.perimeter())
//Bai05
var bankAccount = new bai5_1.BankAccount(100);
// console.log(bankAccount.balance)
// bankAccount.deposit(1)
// console.log(bankAccount.balance)
// bankAccount.withdraw(1)
// console.log(bankAccount.balance)
//Bai06
// var user = new User("Duy");
// console.log(user.getter())
// user.setter("Hi")
// console.log(user.getter())
//Bai08
// var product1 = new Product("giay", 100)
// var product2 = new Product("non", 101)
// var product3 = new Product("quan", 102)
// let arr = [product1, product2, product3]
// const filter = arr.filter((x) => x.price > 100)
// console.log(filter)
//Bai09 11  
// var cat = new Cat("Meo rung chau phi")
// cat.sound()
// var dog = new Dog("Cho tay tang")
// dog.sound()
//Bai 12
// var bird = new Birds("Vanh khuyen")
// bird.fly()
// var fish = new Fish("Ca trich")
// fish.swim()
//Bai 13
// var square = new Square(4);
// var circle = new Cricle(2)
// console.log(square.area())
// console.log(circle.area())
//Bai 14
// var manager = new Manager("Duy", "Admin")
// var developer = new Developer("Duy", "Java")
// manager.displayInfo()
// manager.manageTask()
// developer.displayInfo()
// developer.code()
//bai 15
// var book = new Book("abc", "abc", 1999)
// var library = new Library();
// library.addBook(book)
// //Bai 16 
// const number = new Box<number>(123)
// console.log(number.getValue());
// const number1 = new Box<string>("Duy")
// console.log(number1.getValue());
// //Bai 17 
// const logger = Logger.getInstance();
// logger.log("Exception")
// //Bai 18 
// console.log(MathUtil.add(1, 1));      
// console.log(MathUtil.subtract(11, 5));
// console.log(MathUtil.multiply(1, 2));  
// console.log(MathUtil.divide(20, 4));  
// //Bai 19 
// const cat1 = new Cat("Goooooo");
// const dog1 = new Dog("allllll");
// cat1.sound()
// dog1.sound();
// //Bai 20 
// const car1 = new Car1("Maybach",100)
// const bike = new Bike("Toyota",5);
// console.log(car1.getInfo());
// console.log(bike.getInfo());
// //Bai 21
// const numberRepo = new Repository<number>();
// numberRepo.add(10);
// numberRepo.add(20);
// console.log(numberRepo.getAll()); 
// const stringRepo = new Repository<string>();
// stringRepo.add("Hello");
// stringRepo.add("World");
// console.log(stringRepo.getAll()); 
// //Bai 22
// const numberStack = new Stack<number>();
// numberStack.push(10);
// numberStack.push(20);
// numberStack.push(30);
// console.log(numberStack.peek());
// console.log(numberStack.pop());  
// console.log(numberStack.peek()); 
// console.log(numberStack.isEmpty()); 
// // Stack rỗng
// const stringStack = new Stack<string>();
// console.log(stringStack.isEmpty());
// stringStack.push("Hello");
// stringStack.push("World");
// console.log(stringStack.pop()); 
// console.log(stringStack.peek());
// //Bai 23
// const cash = new CashPayment();
// cash.pay(100);
// const card = new CardPayment("1234-5678-9876-5432");
// card.pay(250); 
// //Bai 24
// const fan = new Fan();
// const airConditioner = new AirConditioner();
// fan.turnOn()
// airConditioner.turnOn()
//Bai 25
// Shape1.describe();
//Bai 26
// const order = new Order([new Product("Laptop", 10.5), new Product("Car", 1.2)]);
// console.log("Total price:", order.calculateTotalPrice());
//Bai 27
// const teacher = new Teacher("Thai Duy", 20, "Software Engineering");
// teacher.introduce();
//Bai 29 
// const car2: Movable = new Car2();
// car2.move();
// const robot: Movable = new Robot();
// robot.move();
//Bai 30 
// Test
const s1 = new bai30_1.Student("Duy", 16);
const s2 = new bai30_1.Student("Vy", 15);
const t1 = new bai27_1.Teacher("Hi", 35, "HUUU");
const t2 = new bai27_1.Teacher("Ha", 40, "HAAHA");
const school = new bai30_1.School([s1, s2], [t1, t2]);
school.displayInfo();
