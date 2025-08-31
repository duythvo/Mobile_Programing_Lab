"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai30_1 = require("./bai30");
//Bai 01
// HelloAsync.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// });
//Bai 02
// Print10.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// });
//Bai 03
// ErrorPromise.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// });
//Bai 04
// RandomPromise.then((value) => {
//   console.log(value);
// }).catch((err) => {
//   console.error(err);
// });
//Bai05
// simulateTask(2000)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//Bai 06
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "foo");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
//Bai 07
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });
// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });
// Promise.race([promise4, promise5]).then((value) => {
//   console.log(value);
// });
//Bai 08
// const promise = Promise.resolve(10);
// promise
//   .then((num) => {
//     return num * num;
//   })
//   .then((num) => {
//     return num * 2;
//   })
//   .then((num) => {
//     return num + 5;
//   })
//   .then((result) => {
//     console.log("Final result:", result);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
// Bai 09
// filterEvens([1, 2, 3, 4, 5, 6])
//   .then((evens) => {
//     console.log("Even numbers:", evens);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
//Bai 10
// Bai10(false)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log("Done");
//   });
// Bai 11
// const main = async () => {
//   try {
//     const msg = await HelloAsync2();
//     console.log(msg);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main()
//bai 14
// (async () => {
//   const result = await Bai14(5);
//   console.log("Bai14 result:", result);
// })();
//bai 21
const main = async () => {
    console.log("Bai 21");
    await (0, bai21_1.bai21)();
    console.log("Bai 22");
    await (0, bai22_1.bai22)();
    console.log("Bai 23");
    const completed = await (0, bai23_1.bai23)();
    console.log("Completed todos count:", completed.length);
    console.log("Bai 24");
    await (0, bai24_1.bai24)();
    console.log("Bai 25");
    await (0, bai25_1.bai25)("example.txt");
    console.log("Bai 26");
    await (0, bai26_1.bai26)();
    console.log("Bai 27");
    try {
        const data = await (0, bai27_1.bai27)("https://jsonplaceholder.typicode.com/todos/3", 3);
        console.log("Retry fetch result:", data);
    }
    catch (err) {
        console.error("Retry failed:", err);
    }
    console.log("Bai 28");
    await (0, bai28_1.bai28)();
    console.log("Bai 29");
    await (0, bai29_1.bai29)();
    console.log("Bai 30");
    await (0, bai30_1.bai30)();
};
main().catch((err) => console.error("Unexpected error:", err));
