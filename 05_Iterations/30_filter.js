// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item) => {
//     console.log(item);
//     return item
// });

// console.log(values);



const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter( (num) => {
//     return num>4
// })


// const newNums=[]

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


 
 const books=[
    {title:'Book One', genre:'Fiction', publish:1981,edition:2004},
    {title:'Book Two', genre:'Non-Fiction', publish:1988,edition:1992},
    {title:'Book Three', genre:'History', publish:1983,edition:1980},
    {title:'Book Four', genre:'Non-Fiction', publish:1982,edition:1703},
    {title:'Book Five', genre:'Science', publish:1940,edition:2004},
    {title:'Book Six', genre:'Fiction', publish:1905,edition:2003},
    {title:'Book Seven', genre:'Non-Fiction', publish:2001,edition:2010},
    {title:'Book Eight', genre:'History', publish:2005,edition:2010},
    {title:'Book Nine', genre:'Fiction', publish:2008,edition:2022},
 ];


let userBooks=books.filter((bk)=> bk.genre==='History')

userBooks=books.filter((bk)=> {
    return bk.publish>=2000 && bk.genre==="History"
})
 console.log(userBooks);


