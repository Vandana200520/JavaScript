// this - current context

//object literal

// const user = {
//     username: 'Vandana',
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("got details from database.");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(user.username);
// user.getUserDetails()                     
// console.log(user.getUserDetails());      
// console.log(this);     //{}   // in browser - it gives window object



// Constructor function - new - it gives new instance everytime(otherwise values will be overwrite if we dont use new)
// this.anything     we take it as variable

// 4 steps- *an object is created (empty obj as we have seen .this{})
//          *values will be pass on given by us
//          *everything will be added in .this
//          *then we will get it


function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = user('vandu','4',true)
// const userTwo = user('vandana','8',false)
// console.log(userOne)

const userOne = new user('vandu','4',true)
// const userTwo = new user('vandana','8',false)
// console.log(userOne)
// console.log(userTwo)

console.log(userOne.constructor)
