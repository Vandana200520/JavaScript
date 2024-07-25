
/***********************Conversion***********************/

let score = "33"
console.log(score);
console.log(typeof score );

let score1 = "33abc"
console.log(score1);
console.log(typeof(score1));

let numberScore1 = Number(score1)
console.log(numberScore1);      //NaN - not a number
console.log(typeof(numberScore1));

let score2 = null 
console.log(score2);
console.log(typeof score2 );
let numberScore2 = Number(score2)
console.log(numberScore2);
console.log(typeof(numberScore2));

let score3 = undefined  
console.log(score3);
console.log(typeof score3 );
let numberScore3 = Number(score3)
console.log(numberScore3);
console.log(typeof(numberScore3));

// NumberConversion
// "33" - NaN
// "33abc" - NaN
// null - 0
// undefined - NaN
// true-1 / false-0


let s = ""
let booleanS = Boolean(s)
console.log(booleanS);

// "" - false , "Vandana" - true
// true-1 / false-0


/***********************Operation***********************/

let value = 5
let negValue = -value
console.log(negValue);


console.log( 2+2 );
console.log( 2-2 );
console.log( 2*2 );
console.log( 2**3 );
console.log( 2/5 );
console.log( 2%5 );


let str1 = "Hello! "
let str2 = "Vandana...."
let str3 = str1 + str2

console.log(str3);

console.log( "1" + "5");
console.log( "1" + 5);
console.log( 1 + "5");

console.log( "1" + "5" + 5);
console.log( 1 + 5 + "5");   //depends on first occured
console.log( 1 + "5" + "5");



let GameScore = 100
GameScore++
console.log(GameScore);

// console.log(true);    // true
// console.log(+true);   // 1
// console.log(+"");     // 0


            /*** Increment operator ***/
/*
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


