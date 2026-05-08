

// if(something){
//     do something
// }else{
//     do something else
// }


const id = 100;

// Equal to value

if(id == "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

if(id != "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// Equal to value and type

if(id === 100){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

if(id !== 100){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// Test if undefined

let greet = "Hello";

if(typeof greet === "undefined"){
    console.log(`I dont have a value ${greet}`);
}else{
    console.log(`I have a value ${greet}`);
}

// Greater or less than
if(100 >= 99){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

if(100 <= 99){
    console.log("CORRECT");
}else{
    console.log("INCORRECT");
}

// else if

const color = "orange";

if(color === "red"){
    console.log(`The is ${color}`)
}else if(color === "blue"){
    console.log(`The is ${color}`)
}else{
    console.log(`I dont the color`)
}

// Logical operator

// And - && check both value

const name = "javid";
const age = 55;


if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a child`);
} else{
    console.log(`${name} is a adult`);
}


// Or - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run the race`);
}else{
    console.log(`${name} can run the race`);
}