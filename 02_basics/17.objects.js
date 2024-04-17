// const tinderUser=new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularuser={
    email:"sammy@hmail.com",
    fullname:{
        userFullname:{
            firstname:"aman",
            lastname:"kumar"
        }
    }
}
// console.log(regularuser.fullname.userFullname.firstname);

const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}
const obj4={5:"A",6:"B"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);


const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"amam@gmail.com",
    },
    {

    },
    {

    },

]
users[1].email
console.log(tinderUser);

console.log(object.keys(tinderUser));
console.log(object.values(tinderUser));
console.log(object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));













