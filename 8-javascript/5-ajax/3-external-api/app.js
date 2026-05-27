


document.querySelector("#btn-1").addEventListener("click", getUsers);



function getUsers() {

    // Create a xhr
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    // Load
    xhr.onload = function () {

        let output = "";

        // Load
        if (this.status === 200) {

            const users = JSON.parse(this.responseText);

            users.forEach(function (user) {
                
                output += `
                    <ul>
                        <li>ID : ${user.username}</li>
                        <li>Name : ${user.email}</li>
                    </ul>
                `;

            })

               document.querySelector("#users-output").innerHTML = output;
        }

    }

    xhr.send();



}