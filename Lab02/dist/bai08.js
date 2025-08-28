"use strict";
const promise = Promise.resolve(2);
promise
    .then((num) => {
    return num * num;
})
    .then((num) => {
    return num * 2;
})
    .then((num) => {
    return num + 5;
})
    .then((result) => {
    console.log("Final result:", result);
})
    .catch((err) => {
    console.error("Error:", err);
});
