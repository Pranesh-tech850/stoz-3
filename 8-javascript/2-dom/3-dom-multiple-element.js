

// document.getElementsByClassName();

// HTML COLLECTION
const items = document.getElementsByClassName("collection-item");

// console.log(items);

// console.log(items[0]);
// console.log(items[1]);
// console.log(items);

// console.log(items.style);

// items[0].style.color = "blue";
// items[1].style.color = "blue";
// items[2].style.color = "blue";
// items[3].style.color = "blue";
// items[4].style.color = "blue";


// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";
// }

// Convert the HTMLCollection to array

let lists = Array.from(items);

// console.log(lists);

// lists.forEach(function(li){
//     li.style.color = "blue";
// })


// console.log(Array.isArray(items));


const listsItems = document.querySelectorAll(".collection-item"); // NodeList

// console.log(Array.isArray(listsItems));

console.log(listsItems);

listsItems.forEach(function(li){
    li.style.color = "blue";
})
