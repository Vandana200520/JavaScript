const accountId = 144553
let accountEmail = "vandana@google.com"
var accountPass = " 12345 "
accountCity = "Ambala"
let accountState;
/* 
Prefer not to use var
bcoz of issue in block scope and functional scope
*/

// accountId = 3 not allowed
accountEmail = "vandanavandana@google.com"
accountPass = " 1212 "
accountCity = "ynr"

console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountCity , accountState]);