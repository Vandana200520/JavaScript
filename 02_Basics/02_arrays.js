
const marvel_heroes = [ "thor" ,  "Ironman" , "Spiderman"  ]

const dc_heroes = [ "superman" , "flash" , "batman" ]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const allHeros = marvel_heroes.concat(dc_heroes)

console.log(allHeros);

// Spread operator-  ... (spreads each elements of array)
const all_new_Heros = [ ...marvel_heroes , ...dc_heroes ]

console.log(all_new_Heros);

const anotherArray =[ 1, 2, 3, [ 4, 5, 6] , 7, [ 6, 7, [ 4, 5]]]

const another_new_Array = anotherArray.flat( Infinity)
// flat - all internal arrays will come in one real array
console.log(another_new_Array);

console.log(Array.isArray("Vandana"))
console.log(Array.from("Vandana"))
console.log(Array.from({ name: "Vandana"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of( score1 , score2 , score3))
