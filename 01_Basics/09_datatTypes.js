// Primitive data type
//7 types:String,Number,Boolean,null,undefined,Symbol(to make value unique),BigInt

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
const outsideTemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);  //false


const bigNumber=2848457457647658767465786875n
console.log(bigNumber);


//Non-primitive(reference type)
//Array,Objects,Functions

const heros=["shaktiman","naagraj","dogga"];
let myObj={
    name:"aman",
    age: 22,
}



const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heros);


//............................................
// Memory
// Stack(primitive), Heap(non-primitive)

let myChannelname="helloworlddotcom"

let anothername=myChannelname
anothername="chaiaurcode"
console.log(myChannelname);
console.log(anothername);


let user={
    email:"user@google.com",
    upi:"user@ybl",
}

let user2=user;
user2.email="amam@google.com"
console.log(user.email);
console.log(user2.email);