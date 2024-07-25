
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

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


// any code written after return will not execute
function addTwoNumbers(number1, number2){

    return number1 + number2
    console.log("vandana");            // unreachable code
}

function loginUserMessage(username = "pammy"){
    // if(username === undefined){
    //     console.log("PLease enter a username");
    //     return                 // if statements is true then code written after return will not execute
    // }
    if(!username){
        console.log("PLease enter a username");
        return        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vandana"))
// console.log(loginUserMessage(""))

// function calcCardPrice( num1 ){
//     return num1
// }
// console.log( calcCardPrice(200 , 400, 2000));

// rest operator ... ( to collect in array)

function calcCardPrice( ...num1 ){       // or ( val1 , val2, ...num1)
    return num1
}
console.log( calcCardPrice(200 , 400, 2000,600));

const user = {
    username: "vandana",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
