
// while( 2 == 2 ){
//     // console.log("true condition!! ");      infinite loop
// }

let i = 1;
while( i <= 10 ){
    // console.log(`value of i is ${i}`);
    i = i + 2;
}

let arr = 0;
const myArray = [ "Vandana" , "Gera"]
while( arr < myArray.length ){            //not using equals to with length
    // console.log(`Element of myArray is ${myArray[arr]}`);
    arr++;
}

let score = 0
do {    
    console.log(`score is ${score}`)
    score = score + 2;
} while (score<=10);

/*
let score2 = 11
do {    
    console.log(`value is ${score2}`)
    score2++;
    
} while (i<=10);
*/