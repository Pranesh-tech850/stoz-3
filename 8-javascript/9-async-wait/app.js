


async function myFunc(){
    const promise = new Promise((reslove, reject) => {
        setTimeout(() => reslove("Hello"), 3000)
    });


    const error = false;


    if(error){
        const res = await promise;
        return res;
    }else{
        await Promise.reject("Something went wrong")
    }



}


myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));