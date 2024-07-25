
let val1 = 10
let val2 = 5

function addnum(num1,num2){
    let total = num1+num2
    return total;
}

let result1 = addnum( val1,val2 )
let result2 = addnum( 10,5 )


// call stack (LIFO)
// calling one function into another function. all performs in a stack

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three");
}

one()
two()
three()



