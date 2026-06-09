

function outer(){
    const secret = "I'm Private"

    return function inner(){
        console.log(secret);
    };
}

const clousureFunc = outer();

clousureFunc();




// const timer = setInterval(() => {

//     let count = 0;

//     count++;

//     console.log(count);

// }, 3000);

// console.log(count);


