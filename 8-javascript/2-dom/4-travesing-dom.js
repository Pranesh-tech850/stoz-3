

let val;

const list = document.querySelector(".collection");
const firstListItem = document.querySelector("li:nth-child(1)");
const lastListItem = document.querySelector("li:nth-child(5)");

val = list;

val = list.childNodes;
val = list.childNodes[0].nodeName; // Text Node
val = list.childNodes[1].nodeName; // Element Node
val = list.childNodes[2].nodeName; // Comment Node
val = list.childNodes[0].nodeType; 
val = list.childNodes[1].nodeType; 
val = list.childNodes[2].nodeType; 

// 1 - Text Node
// 1 - Element Node
// 8 - Comment Node

// Get the childern element node
val = list.children;
val = list.children[0];
val = list.children[0].children[0];


// First Child
val = list.firstElementChild;


// last Child
val = list.lastElementChild;

// Child Count
val = list.childElementCount;

// Get the parent node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get a next sibling
let val2 = firstListItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;


// Get a previous sibling
val = lastListItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;


console.log(val2);