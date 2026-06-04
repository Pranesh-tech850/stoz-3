

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


// Method 2
const shallow2 = Object.assign({}, org);

// Methode 3
const shallowArr = org.hobbies.slice();

// Methode 4
const shallowArr2 = [...org.hobbies];

// Test shallow copy
shallow1.address.city = "Madurai";
shallow1.hobbies.push("dance");

console.log(org);

console.log(shallow1);
