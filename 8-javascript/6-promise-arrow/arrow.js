

// const sayHello = function(){
//     console.log("Hello");
// };


// sayHello();

// Arrow function

// const sayHello = () => {
//     console.log("Hello");
// }

// sayHello();

// One line function does not need a braces
// const sayHello = () => console.log("Hello");

// One line return 
// const sayHello = () => "Hello";
// const sayHello = () => 5;
// const sayHello = () => true;
// const sayHello = () => [true];
// const sayHello = () => {
//     return "Hello";
// }

// Return object in a on eline
// const sayHello = () => ({msg:"Hello"})


// Single params does not need a parentheses

// const sayHello = name => `Hello ${name}`;
const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

// console.log(sayHello("jagan", "javid"));

const users = ["javid","jagan", "akash"];


// users.forEach(function(user){
//     console.log(user);
// })

users.forEach((user,index) => console.log(`${user} - ${index}`)) 