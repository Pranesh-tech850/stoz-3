

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("Hello");
// })

let count = 0;

document.querySelector(".clear-tasks").addEventListener("click", onClick);
document.querySelector("#change-color").addEventListener("click", onChange);

document.querySelector("#task-title").innerText = count;


function onClick(){

    count++

    document.querySelector("#task-title").innerText = count;
   
    const body = document.querySelector("body");

    body.classList.toggle("add-color");

}

function onChange(){
   
    const body = document.querySelector("body");

    body.classList.remove("add-color");

}




