


const taskInput = document.querySelector("#task");



// Key down

// taskInput.addEventListener("keydown", runEvent);


// Key up
// taskInput.addEventListener("keyup", runEvent)
// taskInput.addEventListener("input", runEvent)

// key press
// taskInput.addEventListener("keypress", runEvent);


// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// copy
// taskInput.addEventListener("copy", runEvent);

// Paste
taskInput.addEventListener("paste", runEvent);

function runEvent(e){

    // console.log(e.target);
    console.log(e.target.value);

}