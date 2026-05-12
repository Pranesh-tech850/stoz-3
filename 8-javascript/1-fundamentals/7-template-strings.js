

const name = "Javid";
const age = "100";
const job = "Web Dev";
const city = "Chennai";


let html;

// Without Template strings

html = "MY name is" + " " + name + " " + "im" + " " + age + " " + "and my job is" + " "
+ job + " " + "im from" + " " + city;

// With template string

const x = 'Hello';
const y = "Hai";
const z = `Hola`;

console.log(x, y, z);

// With  template strings
html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;

console.log(html);