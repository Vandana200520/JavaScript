
const marvel_heroes = [ "thor" ,  "Ironman" , "Spiderman"  ]

const dc_heroes = [ "superman" , "flash" , "batman" ]

marvel_heroes.push(dc_heroes)          //internal array
// [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);   //superman

const allHeros = marvel_heroes.concat(dc_heroes)
//concat(needs new array)
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros);

// Spread operator-  ... (spreads each elements of array)
const all_new_Heros = [ ...marvel_heroes , ...dc_heroes ]

console.log(all_new_Heros);  // [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [ 1, 2, 3, [ 4, 5, 6] , 7, [ 6, 7, [ 4, 5]]]

const another_new_Array = anotherArray.flat(Infinity)
// flat - all internal arrays will come in one real array (we can provide the depth also like here we provided infinity)
console.log(another_new_Array);   // [ 1, 2, 3, 4, 5, 6 , 7, 6, 7, 4, 5]

console.log(Array.isArray("Vandana"))  //the thing written inside, is this an array?

console.log(Array.from("Vandana"))    //split every element by comma, and make an array // output - 
// [
  // 'V', 'a', 'n',
  // 'd', 'a', 'n',
  // 'a'
// ]


console.log(Array.from({ name: "Vandana"})) //interesting   // output - []
// it cant understand how to convert it to array, so it will return an empty array
// we have to specify, either split by key or split by value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of( score1 , score2 , score3))   //[ 100, 200, 300 ]
//made an array by Array.of()
// make array from different variables
