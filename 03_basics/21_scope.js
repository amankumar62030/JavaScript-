
let a=300
if(true){
    let a=10
    const b=20
    // console.log("Inner:",a);
    // var c=13
}


// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username="aman"


//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// one()


if(true){
    const username="aman"
    if(username==="aman"){
        const website="youtube"
        // console.log(username+website);
    }

    // console.log(website);
}
// console.log(username);



console.log(addone(5))
function addone(num){
    return num+1
}


console.log(addTwo(5))   //it will give error
const addTwo=function(num){
    return num+2
}
// console.log(addTwo(5))