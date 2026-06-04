

const arr = [1,2,3];


// arr.forEach(function(num){
//    console.log(num);
// })

const result = arr.map(function(num){
    return num * 2;
})

console.log(result);

const filters = arr.filter(function(num){
    return num > 2;
})

console.log(filters);
