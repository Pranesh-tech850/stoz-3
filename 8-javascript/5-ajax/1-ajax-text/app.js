

document.querySelector("#btn").addEventListener("click", loadData);


function loadData(){

    // Create an xhr object

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){
        
        if(this.status === 200){
            document.querySelector("#output").innerHTML = this.responseText;
        }else{
            document.querySelector("#output").innerHTML = `${this.responseText} Not found`;
        }
    }

    xhr.send();


}