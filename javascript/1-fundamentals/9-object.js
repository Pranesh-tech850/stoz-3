

// Key and value or name and value

const person = {
    // Property

    firstName:"Jagan",
    lastName:"Javid",
    age:100,
    email:"jj@gmail.com",
    hadDinner:false,
    hobbies:["music", "sports"],
    address:{
        city:"chennai",
        state:"TN"
    },
    // Method
    greet:function(){
        return "Hello Bruh"
    },
    getFullName: function(){
        console.log(this);
        return this.firstName + " " + this.lastName
    }
}

let val;


val = person;

val = person.firstName // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hobbies;
val = person.hobbies[0];
val = person.hobbies[1];
val = person.address.city;
val = person.address.state;
val = person.greet();
val = person.getFullName();

console.log(val);