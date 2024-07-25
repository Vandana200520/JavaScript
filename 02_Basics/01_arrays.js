// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

/*
resizeable
can contain a mix of datatype
zero-indexed
creates shallow copies(if we change something it get changes to original array)
*/

const myArr = [0,1,2,3,4,5]
const Names = ["Vandana" , "Jashan" , "Savita" , "Riya", "Ritu"]
const myArr2 = new Array(10,20,20,40)

console.log(myArr[0]);

/**********     Array Methods   *********/

myArr.push(10)       //adds element at last
myArr.push(20) 
myArr.pop()          //removes last element

myArr.unshift(20)       //adds element at start (but shifts other elements forward)
myArr.shift()           //removes start element


console.log(myArr.includes(3));         // Boollean
console.log(myArr.indexOf(15));        // gives -1
console.log(myArr.indexOf(2));

const newArr = myArr.join()       //adds all the elements of an array into a string, separated by the specified separator string. and now type converts from array to String.

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//  slice , splice (changes original array also - deletes that values from original array)

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)    //index 1 and 2
//returns a copy of a section of an array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)    //last range included
console.log("C ", myArr);
console.log(myn2);



