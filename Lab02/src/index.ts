import { HelloAsync } from "./bai01";
import { Print10 } from "./bai02";
import { ErrorPromise } from "./bai03";
import { RandomPromise } from "./bai04";
import { simulateTask } from "./bai05";
import { filterEvens } from "./bai09";
import { Bai10 } from "./bai10";
import { HelloAsync2 } from "./bai11";
import { Bai14 } from "./bai14";
import { bai21 } from "./bai21";
import { bai22 } from "./bai22";
import { bai23 } from "./bai23";
import { bai24 } from "./bai24";
import { bai25 } from "./bai25";
import { bai26 } from "./bai26";
import { bai27 } from "./bai27";
import { bai28 } from "./bai28";
import { bai29 } from "./bai29";
import { bai30 } from "./bai30";

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

// //Bai 08
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
  await bai21();

  console.log("Bai 22");
  await bai22();

  console.log("Bai 23");
  const completed = await bai23();
  console.log("Completed todos count:", completed.length);

  console.log("Bai 24");
  await bai24();

  console.log("Bai 25");
  await bai25("example.txt");

  console.log("Bai 26");
  await bai26();

  console.log("Bai 27");
  try {
    const data = await bai27("https://jsonplaceholder.typicode.com/todos/3", 3);
    console.log("Retry fetch result:", data);
  } catch (err) {
    console.error("Retry failed:", err);
  }

  console.log("Bai 28");
  await bai28();

  console.log("Bai 29");
  await bai29();

  console.log("Bai 30");
  await bai30();
};

main().catch((err) => console.error("Unexpected error:", err));
