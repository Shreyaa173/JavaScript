// creation of promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000) 
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

// consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
})

}).then(function(){
    console.log("Async 2 resolved");
})

// how to pass data in promise
const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username: "shreya",
            email: "shreya@example.com" 
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "Shreya",
                password: "1234"
            })
        }
        else{
            reject('Error')
        }
    },2000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise is either solved or rejected")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username: "JavaScript",
                password: "1234"
            })
        }
        else{
            reject('Error: JS went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(e){
        console.log(e);
    }
}
consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
}

getAllUsers();

// then and catch approach for above 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((e) => {
    console.log(e);
})

// // promise.all
// // yes this is also available, kuch reading aap b kro.