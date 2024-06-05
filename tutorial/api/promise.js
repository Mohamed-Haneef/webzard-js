// Promises is helped to handle functions which are asynchronous

let surya_promise = new Promise(function(resolve, reject){

    setTimeout(() =>{
        let sowmiya = false;
        if(!sowmiya){
            resolve("Sowmiya is fake :(")
        }else{
            reject("Sowmiya is true:)");
        }
    }, 5000)
});
// Result contains the resolve value if the condition is true
surya_promise
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error) // Error contains the reject value
})
.finally(() => {
    console.log("Surya confirmed his love ;)"); // This executes at the end of the code
})
