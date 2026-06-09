
document.querySelector("#btn-1").addEventListener("click", getText);
document.querySelector("#btn-2").addEventListener("click", getJson);
document.querySelector("#btn-3").addEventListener("click", getApi);
document.querySelector("#btn-4").addEventListener("click", addData);
document.querySelector("#btn-5").addEventListener("click", deleteData);
document.querySelector("#btn-6").addEventListener("click", updateData);


function getText(){
    fetch("text.txt")
    .then(response => response.text())
    .then(data => document.querySelector("#output").innerText = data)
    .catch(err => console.log("Something went worng"))
}



function getJson(){
    fetch("posts.json")
    .then(response => response.json())
    .then(data => {
        let output = "";

        data.forEach(post => {
            output += `<li>${post.title}</li>`
        })

        document.querySelector("#output").innerHTML = output;
    })
    .catch(err => console.log("Something went worng"))
}

function getApi(){
    fetch("https://6a19defa489e4715751a99cc.mockapi.io/api/v1/comments")
    .then(response => response.json())
    .then(data => {
        let output = "";

        data.forEach(user => {
            output += `<li>${user.name}</li>
            <li>${user.age}</li> 
            <li>${user.id}</li>`
        })

        document.querySelector("#output").innerHTML = output;
    })
    .catch(err => console.log("Something went worng"))
}

function addData() {

    const newData = {
        name: "Praneshwar",
        age: 22
    };

    fetch("https://6a19defa489e4715751a99cc.mockapi.io/api/v1/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data Added:", data);
    })
    .catch(err => console.log("Something went wrong"));
}


function deleteData(id)
{

    fetch(`https://6a19defa489e4715751a99cc.mockapi.io/api/v1/comments/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json()).then(data => {
        console.log("Data Deleted:", data);
    })
    .catch(err => console.log("Something went wrong"));
}

deleteData(52);


function updateData(id) {
    const updateData = {
        name : "Sri Hrashivan",
        id:52
    }
    fetch(`https://6a19defa489e4715751a99cc.mockapi.io/api/v1/comments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data Updated:", data);
    })
    .catch(err => console.log("Something went wrong"));
}
        

updatedata(4);