

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise");
// });

// console.log("END");


console.log("A");

// Macrotask 
setTimeout(() => console.log("B (Settimeout)", 0));

// Microtask
Promise.resolve().then(() => console.log("C (Promise)"));

// Another microtask
queueMicrotask(() => console.log("D (queueMicrotask)"));

// Another macrotask
setTimeout(() => console.log("E (Settimeout 2)", 0));

console.log("F");