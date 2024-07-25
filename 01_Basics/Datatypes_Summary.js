// Data types: Primitive and non-Primitive

/******* Primitive *******/
// call by value -  it changes only in copy not original

// 7 types: String ,  Number , Boolean , null , undefined , Symbol(For uniqueness),Bigint

let str = "Vandana"
const num = 6
const decNum = 34.66
const IsLoggedIn = false
const temp = null          // object
let marksObtained;         //or  let marksObtained = undefined;

const id = Symbol('123')
const id2 = Symbol('123')
console.log( id === id2);

const bigNumber = 4547425976799n 


/******* Non-Primitive (Reference type) *******/
//typeof - Object

// Array[], Objects{pairs} , Functions

const names = [ "Vandana" ,"Tushar", "Jashan" , "Savita"]
const numbers = [ 11,2,3,4]

let obj = {
    name: "Jashan" ,
    age: 15 ,
    class: 10
}

const myFunction = function(){
    console.log("Hello wolrd!! ");
}
myFunction();  //function call


/**** typeof  ****/

console.log( typeof str);
console.log( typeof bigNumber);
console.log( typeof names);
console.log( typeof obj);
console.log( typeof numbers);
console.log( typeof temp);
console.log( typeof myFunction);


/*****     Memory     *****/
// 2types: Stack(Primitive- changes in copy) , Heap(Non-Primitive - changes in original)

let myName = "VandanaGera"

let myNickName = myName
myNickName = "Vanduu"

console.log(myName);   // changes in copy
console.log(myNickName);

let userOne = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne);  // changes in original
console.log(userTwo);


/* JavaScript is a dynamically typed language: 
 which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

