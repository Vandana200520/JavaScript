
// for functions of Number go to inspect and then console then type Number and then Number dot

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());          //converts to String
console.log(balance.toString().length);   //for length

console.log(balance.toFixed(2));          //after decimal numbers count

const otherNumber = 120.599
console.log(otherNumber.toPrecision(2));  // for precision or round off
console.log(otherNumber.toPrecision(3));  
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString( 'en-IN'));    //commas acc to indian number system



/****************   Mathss   ****************/


console.log(Math);     //object
console.log(Math.abs(-7));
console.log(Math.round(8.7));
console.log(Math.ceil(8.3));
console.log(Math.floor(4.9));
console.log(Math.sqrt(4));
console.log(Math.pow(4,2));

console.log(Math.min(4,8,7,3,2));
console.log(Math.max(4,8,7,3,2));


// IMPORTANT
console.log(Math.random());  //value between 0 to 1
console.log((Math.random()*10) + 1);  //min value one
console.log(Math.floor((Math.random()*10)) + 1);

// *10 (for one left shift)
// +1 (to avoid 0.01 etc cases)
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);   //learn formula

// numbers for dice occuring

const minDiceNum = 1
const maxDiceNum = 6

console.log(Math.floor(Math.random()*(maxDiceNum - minDiceNum )) + minDiceNum);

