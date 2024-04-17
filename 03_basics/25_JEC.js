//Javascript executiion context

//1.Global execution context  (this)
//2.Function execution context
//3.Eval execution context


// jscode run in two phases:
//     memory creation phases
//     execution phase

let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)


//how it will run
// 1.global execution(this)
// 2.memory phase
//     val1=undefined
//     val2=undefined
//     addNum=defination
//     result1=undefined
//     result2=undefined

// 3.execution phase
//     val1=10
//     val2=5
//     addNum=new environment+execution thread
//     result1=15
//     result2=12(again addNum process will perform)
//     memoryphase
//     val1=undefined
//     val2=undefined
//     total=undefined

//     execution context
//     num1=10
//     num2=5
//     total=15  (yeh return hoga global execution me)


call stack

