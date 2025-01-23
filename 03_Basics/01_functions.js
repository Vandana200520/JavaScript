
function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("A");
}

// sayMyName       // reference
sayMyName()        // execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // it will call so result will be 8
// console.log("Result: ", result);  // but in variable result there will be UNDEFINED, 
// bcuz function isn't returning anything, its just printing


// any code written after return will not execute
function addTwoNumbers(number1, number2){

    return number1 + number2
    console.log("vandana");            // unreachable code
}

function loginUserMessage(username = "pammy"){   //it means that, if user inputs something - show that, else it will show pammy
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return                 // if statements is true then code written after return will not execute
    // }
    if(!username){                                  //empty str, or nothing like (), it will work
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vandana"))
// console.log(loginUserMessage(""))


//Shopping carts - when we dont know the number of enteries, but we have to store them

// function calcCardPrice( num1 ){
//     return num1
// }
// console.log( calcCardPrice(200 , 400, 2000));     // op- 200

// rest operator ... ( to collect in array)

function calcCardPrice( ...num1 ){
    return num1
}
console.log(calcCardPrice(200 , 400, 2000, 600));  //op - [200, 400, 2000, 600]

// function calcCardPrice(val1, val2, ...num1 ){   // val1 - 200, val2 - 400, and left are in num1
//     return num1
// }
// console.log(calcCardPrice(200, 400, 2000, 600));  //op - [2000, 600]

const user = {
    username: "vandana",
    prices: 199
}

function handleObject(anyobject){    //   we can use this function for any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)            // call the function and pass an object

handleObject({               //here we are directly passing the object
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

//this funcion will get array as an input

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));             // passing the array, thats declared in variable
console.log(returnSecondValue([200, 400, 500, 1000]));     // directly passing the array as input
 
