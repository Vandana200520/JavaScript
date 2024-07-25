// break: to break control flow
/* 
Switch case: Used for checking too many conditions
( it checks the conditions and execute the condition is true and after that all are executed, to stop this we use break; )

Syntax:

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/
/*
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:         
        console.log("default case match");
        break;
}
*/

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

