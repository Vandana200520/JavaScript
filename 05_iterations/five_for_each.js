// array.forEach( function (parametre) = {})

// array.forEach( function (item,index,arr) = { // console.log(item,index,arr); })

//for each - returns UNDEFINED on storing in a variable ( check in six.js)

const coding = ["js" , "python" , "c" , "cpp" , "ruby"]

coding.forEach( function (val) {
    // console.log(val);
})


//arrow function
coding.forEach( (item) => {
    // console.log(item);
})

//by declaring function
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);


coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
})

// objects inside array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )