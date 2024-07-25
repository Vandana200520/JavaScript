
const isLoggedIn = true;
const temp = 41

// if( condition: true) { then it executes }
// some operators: < , > , <= , >= , != , == , === (strict equals: checks datatype also)

if( 3!= 2 ){
    console.log("executed")
}

if( 3 == 2 ){
    console.log(" 3 is not equals to 2")
}
console.log("false condition ")


if( temp < 50){
    console.log("Temperature is less than 50")
}
else{
    console.log("Temperature is greater than 50") 
}  


const score = 200

if (score > 100) {
    let power = "fly"        //  var power = "fly" // using var it will become global variable
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`);   // power is defined in if's scope here its Undefined


// short-Form (but we dont use it)
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
// else is default case

if (balance < 500) {
    console.log("less than 500");
} 
else if (balance < 750) {
    console.log("less than 750");  
} 
else if (balance < 900) {
    console.log("less than 750");    
} 
else {
    console.log("less than 1200");
}

// && - and logical Operator (every condition must be true)      
// || - or logical Operator (atleast one condition must be true)


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {        
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}



