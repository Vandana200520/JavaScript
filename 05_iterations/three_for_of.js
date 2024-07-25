
// iteration

// for of loop
// works on array , string , map
// does not work on object gives error

const numbers = [ 5, 10, 15, 20, 25]
for (const num of numbers) {
    // console.log(num);
}

const greetings = "Good Morning!"
for (const greet of greetings) {
    // console.log(greet);
}

//map

// 1- create 2- map.set
// no duplicates (unique values)
// ordered
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const key of map) {
    // console.log(key)          // [ key,value ]
}

for (const [key,value] of map) {
    // console.log(key, ':' , value)          // [ key:value ]
}


//Object - gives error
/*
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':' , value);             // error
}
*/








