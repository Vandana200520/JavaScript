// DATES (its an objects)

// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


let myDate = new Date()

console.log(typeof(myDate));

console.log(myDate);
console.log(myDate.toString());
console.log(typeOf myDate);      //object

console.log(myDate.toDateString());  //Date
console.log(myDate.toLocaleString()); //Date and Time (date/month/yyyy - locale)
console.log(myDate.toLocaleDateString()); //Date and Time

console.log(myDate.toJSON());
console.log(myDate.toISOString());

console.log(myDate.toString());       // Sat Jan 18 2025 18:48:45 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 18/1/2025, 6:48:45 pm

console.log(myDate.toJSON());       // 2025-01-18T13:18:45.964Z
console.log(myDate.toISOString());  // 2025-01-18T13:18:45.964Z

console.log(myDate.toDateString());  // Sat Jan 18 2025

let myCreatedDate = new Date(2024, 0 , 24)
//let myCreatedDate = new Date(year, month( 0 - Jan, 1 - Feb) , date)
console.log(myCreatedDate.toDateString()); 

let myCreatedDate1 = new Date(2024, 0 , 24 , 8, 10 , 14)
//let myCreatedDate = new Date(year, month( 0 - Jan, 1 - Feb) , date , hr , min , sec)
console.log(myCreatedDate1.toLocaleString()); 

let myCreatedDate2 = new Date("01-14-2024")
console.log(myCreatedDate2.toLocaleString());

//TimeStamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));    //converting millisec to sec


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());   //starts from from zero orr use this instead
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay());
console.log(newDate.getTime());

console.log( `Today date is ${newDate.getDay()} and current time is ${newDate.getTime()}`);

newDate.toLocaleString('default',{
    weekday:"long",

})

console.log(newDate);



let start = Date.now();
setTimeout(() => {
    const millis = Date.now() - start;
  
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
    // Expected output: "seconds elapsed = 2"
  }, 5000);
