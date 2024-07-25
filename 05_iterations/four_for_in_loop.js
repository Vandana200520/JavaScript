// for in loop

// for object we use for in loop
// key - key
// value - object[key]

// for array - if we will use it, it gives keys(indexes) by default
// in array keys are indexes

// for Map - not itrateable
//nothing in output but no error


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);              //key
}

for (const key in myObject) {
    // console.log(myObject[key]);     //values
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// array 

const programming = [ "js" , "cpp" , "rb" , "swift" , "c"]
for (const key in programming) {
    // console.log(key);                 // keys of array are indexes
}

for (const key in programming) {
    // console.log(programming[key]);                 // values
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(map[key]);                    // nothing
}