


document.querySelector("#btn-1").addEventListener("click", getUsers);



async function getUsers() {

    
    const response = await fetch("customers.json");

    const users = await response.json();

    let output = "";
    users.forEach((user) => {
        output += `<div>
        <h3>${user.id}</h3>
        <p>${user.name}</p>
        <p>${user.company}</p>
        <p>${user.phone}</p>
</div>
        `
    })
    document.querySelector("#users-output").innerHTML = output;


}





