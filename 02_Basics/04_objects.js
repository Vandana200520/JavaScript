
/*********   Object constructor    *******/

/*
 const tinderUser = new Object()       Singleton Object
 const tinderUser1 = {}                non - Singleton Object
*/


const tinderUser = {}
tinderUser.id = "123ab"
tinderUser.name = "Oggy"
tinderUser.IsLoggedIn = false
console.log(tinderUser);

const userInfo = {
    email: "geragera@github.com",
    fullname:{                          //nested objects
        userFullname:{
            firstname: "Vandana",
            lastname: "Gera"
        }
    }
}
console.log( userInfo.fullname.userFullname.firstname )

const obj1 = { 1:"a" , 2:"b"}
const obj2 = { 3:"a" , 4:"b"}

// const obj3 = { obj1, obj2}
//const obj3 = Object.assign( target , source)
// const obj3 = Object.assign({} , obj1, obj2)

const obj3 = { ...obj1 , ...obj2}
console.log(obj3);

const userArr = [
    {
        id : "1",
        email : "Gera@gmail.com"
    },
    {
        id : "2",
        email : "Geragera@gmail.com"
    }
]

console.log(userArr[0].id)
console.log(tinderUser)

console.log(Object.keys(tinderUser))   //gives keys in form of array
console.log(Object.values(tinderUser))    //gives values in form of array
console.log(Object.entries(tinderUser))   // nested array key values

const objectLength = Object.keys(tinderUser).length;
console.log(objectLength); // 3

console.log(tinderUser.hasOwnProperty("IsLoggedIn"))   // Is Present


/*    Object   Destructure    */

const course = {
    courseName: "Learn",
    price : 999,
    courseInstructor: "Vandana"
}

console.log(course.price);   //usually

// for clean code
const {courseInstructor} = course
console.log(courseInstructor);

//or
const {courseInstructor: instructor} = course
console.log(instructor);


// JSON
// {
//     "name": "Vandana",
//     "Course" : " JavaScript",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

