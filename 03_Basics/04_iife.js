/*
Immediately Invoked Function Expressions ( IIFE )

    immediate execution
    to avoid Global Scope pollution
    if writing two iife in a code, semi-colon; required
*/

/*
function start(){
    //named IIFE   //start
    console.log(` DB connected `);
}
start();                          //required semi-colon
*/

// SYNTAX --------- (fun definition) (execution)
// ()()
// fst parenthesis, in which function definition will be written
// 2nd parenthesis, like to run or for the execution of function, it can take the parameters also, like we give in function calls


// (function start(){
//     console.log(` DB connected `);
// })();                         //required semi-colon, cuz it doesn't know where to end the execution

/*
// ++++++++ Arrow function
( () => {
    console.log(` DB connected `);
})()
*/

( ( name ) => {
    console.log(` DB connected ${name}`);
})( 'vnduuu')
