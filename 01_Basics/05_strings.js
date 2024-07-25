
const name = "Vandana"
const repoCount = 4

// console.log( name + " Value " + repoCount);

// For Insertion use: ${}
console.log(` My name is ${name} ,and my repo count is ${repoCount}.`)

const gameName =new String('Vandana-vg-com') 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,5)      //index 0 to index 4
console.log(newString);

const anotherString = gameName.slice(-8,5)      //index 0 to index 4
console.log(anotherString);


const newStringOne = "     Vandanaa       "    
console.log(newStringOne);
console.log(newStringOne.trim());        //removes spaces from start and end

const url ="https://vandanavandanagera.com"
console.log(url.replace('gera','91164'));

console.log(url.includes('nice'));
console.log(url.includes('gera'));

console.log(gameName.split('-'));  //converts to array and split by mentioned character

