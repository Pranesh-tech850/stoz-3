

// Remove element

// const list = document.querySelector("li");

// list.remove();


// const lists = document.querySelectorAll("li");

// lists.forEach(function(list){
//     list.remove();
// });


// Class and attr
const firstLi = document.querySelector("li:first-child");


const anotherLink = firstLi.children[0];


let val;


val = anotherLink.className;
val = anotherLink.classList; // DOMTOKENLIST


val.add("Javid");

val.remove("test");

val.replace("Javid", "Jagan");


console.log(val);




