
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Bubbling (defalt) - inner to outer

// parent.addEventListener("click", () => {
//     console.log("Parent bubbling");
// });

// child.addEventListener("click", () =>{
//     console.log("child");
// })


// Capturing - outer to inner
parent.addEventListener("click", () => {
    console.log("Parent");
}, true);

child.addEventListener("click", () => {
    console.log("child");
}, true);