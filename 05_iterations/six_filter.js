// for each - returns UNDEFINED on storing in a variable 

// filter - it returns the values
// filter is a true/false game
 
// array.filter( callBackFun(num) => condition )          

// array.filter( callBackFun(num) => { return condition} )    //remember return if using braces


// const coding = ["js" , "python" , "c" , "cpp" , "ruby"]

// const values = coding.forEach( function (item) {
//     console.log(item);
//     // return item;
// })

// console.log(values);           //undefined

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const num = myNums.filter( ( num )=> num > 4 )
// console.log(num);                             //returns array from 5 to 10

// if opens a scope{} use return to get output otherwise empty array will be returned
const num = myNums.filter( ( num ) => { return num > 4} )
// console.log(num);                               

// for each

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// return books wth genre history using filter
// publish after year 2000

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')
// let userBooks = books.filter( (bk) => bk.publish > 2000)
userBooks = books.filter( (bk) =>{ 
    return bk.edition >= 2000 && bk.genre === 'History' })
console.log(userBooks);




