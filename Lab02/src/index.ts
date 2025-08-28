import { HelloAsync } from "./bai01";
import { Print10 } from "./bai02";
import { ErrorPromise } from "./bai03";
import { RandomPromise } from "./bai04";
import { simulateTask } from "./bai05";
import { filterEvens } from "./bai09";
import { Bai10 } from "./bai10";

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
Bai10(false)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Done");
  });
