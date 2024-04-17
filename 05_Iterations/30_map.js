const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (num)=>num+10)


// const newNums =myNumbers
    .map((num)=>num*10)
        .map((num)=>num+1)
        .filter((num)=>num>=40)
// console.log(newNums);



//....................reduce js...............//
const newNums=[1,2,3]
// const myTotal=newNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal);




const myTotal=newNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);




const shoppingCart=[
    {
        itemName:"js course",
        price:999
    },
    {
        itemName:"c++ course",
        price:9900
    },
    {
        itemName:"java course",
        price:9999
    },
    {
        itemName:"python course",
        price:4500
    },
    {
        itemName:"html course",
        price:99
    },
]


const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);
