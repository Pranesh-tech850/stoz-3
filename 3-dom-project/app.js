

// Define a UI vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
// const filter = document.querySelector("#search");


// Load all event listerners

function loadEventListerners() {

    // Add task event
    form.addEventListener("submit", addTasks);

    // Remove task list
    taskList.addEventListener("click", removeTask);


    // Clear task list
    clearBtn.addEventListener("click", clearTask);

}


function addTasks(e) {

    e.preventDefault();

    // validate

    if (taskInput.value === "") {
        alert("PLease fill the fields");
    } else {

        // Create element
        const li = document.createElement("li");

        // Add class
        li.className = "collection-item";

        // Add a innertext
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class
        link.className = "delete-item secondary-content";

        // Add a icon
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add a link to li
        li.appendChild(link);

        // Add a li to ul
        taskList.appendChild(li);

        taskInput.value = "";

    }


}


function removeTask(e) {

    //    if(e.target.parentElement.className === "delete-item secondary-content"){
    //      if(confirm("Are you sure")){
    //         e.target.parentElement.parentElement.remove();
    //     }   
    //    }

    // console.log(e.target.parentElement.classList);

    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm("Are you sure")) {
            e.target.parentElement.parentElement.remove();
        }
    }


}


function clearTask() {

    taskList.innerHTML = "";


    // const listsItems = Array.from(taskList.children);

    // listsItems.forEach(function(element){
    //     element.remove();
    // })

}


loadEventListerners();