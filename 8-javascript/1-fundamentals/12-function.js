

// Two phase

// 1 - creation
// 2 - excution


// Function declartion || function statement

// Parameter
function greet(firstName = "John", lastName = "Doe"){

    // Default parameter
    // if(typeof firstName === "undefined"){firstName = "Jhon"};
    // if(typeof lastName === "undefined"){lastName = "Doe"};

    console.log(`Hello - ${firstName} ${lastName}`);
}


// Call || Invoked
// Arugument
// greet("Jagan", "Javid");
// greet();

// Function expression
const add = function(x = 5){
    console.log(x + 5);
}

add();