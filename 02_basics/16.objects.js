//singleton

//objct literals

const mySym=Symbol("key1")

const JsUser={
    "full name":"AMAN KUMAR",
    name:"aman",
    [mySym]:"mykey1",
    age:21,
    location:"RAJPURA",
    email:"aman@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email="aman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="amam@microsoft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello js user");
};

JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

 


