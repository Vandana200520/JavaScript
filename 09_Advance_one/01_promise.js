//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// 3 States - Pending , Fulfilled , Rejected

// resolve - .then , reject - .catch , .finally( either resolved or rejected)

// chaining possible

//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

// https://developer.mozilla.org/en-US/docs/Web/API/fetch

// fetch('https://jsonplaceholder.typicode.com/users',{heading})

const promiseOne = new Promise(function (resolve,reject) {
    //Do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        // console.log('Async task is complete.');
        resolve();                             //its imp to run then
    },1000)
})

promiseOne.then(function(){                     //then is directly related to resolve
    // console.log("Promise consumed");

})

new Promise(function (resolve,reject) {

    setTimeout(function(){
        // console.log('Async task-2');
        resolve();                             //its imp to run then
    },1000)
    
}).then(function(){
    // console.log('Async 2 resolved.');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    // console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "vandana", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
           // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()



fetch('https://api.github.com/users/Vandana200520')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all