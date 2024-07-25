

function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("Vandana", "vndu@ig.com", "123")
console.log(chai);



// after execution we could not access its variables
// we use .call and use this keyword. hum apna this denge setusername ko