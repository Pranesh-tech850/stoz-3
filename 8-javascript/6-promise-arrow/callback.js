
const a = "a";
const b = "b";
const c = "c";


console.log(a);
console.log(b);
console.log(c);


function one(){
    console.log("One")
}

function two(){
    console.log("Two")
}

function three(){
    console.log("Three")
}

one();
two();
three();

const posts = [
    {title:"Post 1", body:"This is post one"},
    {title:"Post 2", body:"This is post two"},
];

// Sync

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 2000)
// }


// function getPost(){
//     setTimeout(function(){
       

//         let output = "";

//         posts.forEach(function(post){
//            output += `<li>${post.title}</li>`
//         });

//         document.body.innerHTML = output;

//     }, 1000)
// }


// createPost({title:"Post 3", body:"This is post three"});
// getPost();


// Async

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);

        callback();
    }, 2000)
}

function getPost(){
    setTimeout(function(){
       

        let output = "";

        posts.forEach(function(post){
           output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;

    }, 1000)
};

createPost({title:"Post 3", body:"This is post three"}, getPost);


