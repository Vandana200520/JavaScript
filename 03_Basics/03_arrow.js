// this - refer to current context
// its used in objects. 
// but can't use in functions (it will show undefined)

const user = {
    username: "Vandana",
    price: 999,

    welcomeMessage: function() {
        console.log(` ${ this.username} , welcome to website.`);
        // console.log(this);     //op - { username: 'Vandana', price: 999, welcomeMessage: [Function: welcomeMessage] }
    }
}

user.welcomeMessage()       //op - Vandana , welcome to website.
user.username = "Gera"
user.welcomeMessage()       //op - Gera , welcome to website.

console.log(this);              //empty {}
// in browser - Windows


/*   //simple function
function abc(){
    let username = "vandana"
    console.log(this.username);    //undefined
    
    // console.log(this);   //op - <ref *1> Object [global] {}  // so much funs and variables
    
}
abc()
*/

/*   //holding in a variable
const abc = function (){
    let username = "vandana"
    console.log(this.username);    //undefined 

    // console.log(this);   //op - <ref *1> Object [global] {}  // so much funs and variables
}
abc()
*/

/*   //arrow function
const abc = () => {
    let username = "vandana"
    console.log(this.username);    //undefined    
    console.log(this);             // {}          
}
abc()
*/

/********** Arrow Function **********/

/*  //basic arrow fun      // using curly braces - then uh need to write return keyword
// if using parentesis - then no need to write return keyword

const addTwo = ( num1,num2) => {
    return num1 + num2
}
console.log(addTwo(9,4));
*/

// impicit return 

//const addTwo = ( num1,num2) => num1 + num2         //both are same, with() or without(), just remember{}
// const addTwo = ( num1,num2) => (num1 + num2)


const addTwo = (num1,num2) => ({username:"vandu"})         //wrap-up object in parenthesis to return to op 
// const addTwo = (num1,num2) => {return {username:"vandu"}}  //both ways are correct

console.log(addTwo(9,4));    //op - { username: 'vandu' }

const myArray = [ 2, 5, 7, 3]

// myArray.forEach( () => () )
