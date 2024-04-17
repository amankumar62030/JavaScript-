const user={
    username: "aman",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username},welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

function chai(){
    let username="aman"
    // console.log(this.username); //undefined
}
// chai()

const chais=()=>{
    let usernames="aman"
    console.log(this.usernames);
    console.log(this);
}
// chais()



const addTwo=(num1,num2)=>{
    return num1+num2
}

// const addTwos=(num1,num2)=>num1+num2
// const addTwos=(num1,num2)=>(num1+num2)
const addTwos=(num1,num2)=>({username:"aman"})  //have to use parenthesis()
console.log(addTwo(3,4));
console.log(addTwos(5,4));

// const myArray=[2,3,4,5,6]
// myArray.forEach(())