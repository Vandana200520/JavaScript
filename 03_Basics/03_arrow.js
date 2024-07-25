// this - refer to current context
// its used in objects. and can't use in functions

const user = {
    username: "Vandana",
    price: 999,

    welcomeMessage: function() {
        console.log(` ${ this.username} , welcome to website.`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.username = "Gera"
user.welcomeMessage()

console.log(this);              //empty {}
// in browser - Windows


/*
function abc(){
    let username = "vandana"
    console.log(this.username);    //undefined                   
}
abc()
*/

/*
const abc = function (){
    let username = "vandana"
    console.log(this.username);    //undefined                   
}
abc()
*/

/*
const abc = () => {
    let username = "vandana"
    console.log(this.username);    //undefined    
    console.log(this);             // {}          
}
abc()
*/

/********** Arrow Function **********/

/*  //basic arrow fun 

const addTwo = ( num1,num2) => {
    return num1+num2
}
console.log(addTwo(9,4));
*/

// impicit return

//const addTwo = ( num1,num2) => num1+num2

// const addTwo = ( num1,num2) => (num1+num2)


const addTwo = ( num1,num2) => ({username:"vandu"})

console.log(addTwo(9,4));

const myArray = [ 2, 5, 7, 3]

// myArray.forEach( () => () )