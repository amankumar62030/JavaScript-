const User={
    _email:'hello@gmail.com',
    _password:"abx",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea.email);