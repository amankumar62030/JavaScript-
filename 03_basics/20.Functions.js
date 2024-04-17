function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,600,1200));



function calculatesCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculatesCartPrice(200,400,600,9000,3400));


const user={
    username:"aman",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}
// handleObject(user)


handleObject({
    username:"sam",
    price:300
})


const myNewArray=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));