// Local and Global scope
// var is used globally

/* Global scope is different in case of console and is different in case of node(when we run through node)  */
/*** 
    Closures : A technique A closure is the combination of a function bundled together (enclosed) with references to its surrounding state  
    (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created 
    every time a function is created, at function creation time.   
***/


//var c = 300
let a = 5
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "vandana"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "vandana"
    if (username === "vandana") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// it Will not throw error if used first and declared later

console.log(addone(5))
function addone(num){
    return num + 1
}


// Will throw error if used first and declared later(because a variable holds this function)

// addTwo(5)
const addTwo = function(num){    //its an expression
    return num + 2
}   
