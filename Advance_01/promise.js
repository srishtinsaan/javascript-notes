const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls/ Cryptographic related
    // Network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve() // now on calling resolve it gets connected to .then() and executes it.
    }, 1000)
});
console.log(promiseOne);
promiseOne.then(function(){
    console.log('consumed');
})


const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "bittu", email : "bittu@example"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user); 
    // Object 
    // email: "bittu@example"
    // username: "bittu"
    // [[Prototype]]: Object
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "bittu", email : "bittu@example"})
        }else{
            reject('ERROR')
        } 
    },1000)
})

const name = promiseFour.then((user) => {
    return user.username;
}).then((username) => {
    console.log(username);  
})
.catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('promise is resolved or rejected');
    
})
console.log(name);

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "bittu", email : "bittu@example"})
        }else{
            reject('ERROR')
        } 
    },1000)
})

// async function getAllusers(){
//     try{
//         const response = await fetch('https://randomuser.me/api/')
//         console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log('error');
        
//     }
    
// }

// getAllusers()

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log("error is here!");
    
})





 