
document.querySelector("#btn-1").addEventListener("click", getText);
document.querySelector("#btn-2").addEventListener("click", getJson);
document.querySelector("#btn-3").addEventListener("click", getApi);


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
    fetch("https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users")
    .then(response => response.json())
    .then(data => {
        let output = "";

        data.forEach(user => {
            output += `<li>${user.name}</li>`
        })

        document.querySelector("#output").innerHTML = output;
    })
    .catch(err => console.log("Something went worng"))
}

