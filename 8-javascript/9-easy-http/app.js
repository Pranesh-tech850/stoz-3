

const http = new EasyHttp();


http.get("https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users")
.then(data => console.log(data))
.catch(err => console.log(err));

const data = {
    name:"Jhon Doe"
}

const data2 = {
    name:"Jhon Doe 2"
}

http.post("https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));



http.put("https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users/1", data)
.then(data => console.log(data))
.catch(err => console.log(err));


http.delete("https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users/1")
.then(data => console.log(data))
.catch(err => console.log(err));
