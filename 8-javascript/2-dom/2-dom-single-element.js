

// document.getElementById();

// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

// Change style

taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "10px";

// Change Content

// console.log(taskTitle.innerText);

taskTitle.innerText = "<span>Hello</span>";
taskTitle.innerHTML = "<span>Hello</span>";


// document.querySelector();

console.log(document.querySelector("#task-title"));

console.log(document.querySelector(".collection-item"));