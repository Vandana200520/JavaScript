// set - the value is set( ye set value h hmare pas olwz)
//get - but agr koi us value ko get kr raha h to use wo chij return hogi jo hum get k andrr return kraynge

// in getter setter a function exists.whose name is as our variable taken.

// we use underscorr to solve this problem - when we use getter setter, set or constructor m race lg jati h ki value setter set kega ya constructor wali use hogi and ERROR occurs: MAX RANGE EXCEEDED

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const vandana = new User("v@vandana.ai", "abc")
console.log(vandana.email);
console.log(vandana.password);

