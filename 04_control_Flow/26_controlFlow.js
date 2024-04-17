//if statement
const isUserLoggedIn=true
const temp=41

if(temp<50){
    // console.log("less than 50");
}else
// console.log("greater than 50");



if(2 == "2"){
    // console.log("executed");
}

if(2 === "2"){
    // console.log("executed");
}

// <,>,<=,>=,==,!=,===(it check the type also),!==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);



const balance=1000
// if(balance>500){
//     console.log("test");
//     console.log("test2");
// }



// if(balance<500){
//     console.log("less than");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<300){
//     console.log("less than 300");
// }
// else{
//     console.log("less than 1200");
// }




const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}





//.......................switch case statement.............................//
// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }


const month=3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("undefined");
        break;
}




//....................truthy.............................//

const userEmail="h@aman.ai"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "",null,undefined,NaN

//truthy value
//true,"0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }



const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}



//.........Nullish Coalescing Operator (??):null undefined.................//

let val1;
// val1=5??10
// val1=null??10      
// val1=undefined??15    
val1=null??10??20



console.log(val1);


//....terniary operator

//condition ? true : false

const iceTeaPrice=100

iceTeaPrice<=80 ? console.log("less than 80") : console.log("greater than 80");;