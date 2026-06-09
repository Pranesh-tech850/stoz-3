

const org = {
    name:'javid',
    email:"j@gmail.com",
    address:{
        city:"chennai",
        state:"TN"
    },
    hobbies:["music", "game"]
}


// Method 1 : Spread operator 
const shallow1 = {...org};
// console.log(shallow1);


// Method 2
const shallow2 = Object.assign({}, org);


// Methode 3
const shallowArr = org.hobbies.slice();
// console.log(shallowArr);

// Methode 4
const shallowArr2 = [...org.hobbies];
// console.log(shallowArr2);

// Test shallow copy
shallow1.address.city = "Madurai";
shallow1.name ="Praneshwar";
shallow1.hobbies.push("dance");

console.log(org);

console.log(shallow1);
