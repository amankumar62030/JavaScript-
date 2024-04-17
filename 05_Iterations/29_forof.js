//for of

// ["","",""]
// [{},{},{}]


const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}



const greetings="Hello World!"

for (const greet of greetings) {
    console.log(`eash char is ${greet}`);
}



//Maps

const map= new Map()
map.set('In',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")
map.set('In',"India")
// console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value);
}



// const muObject={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
// for(const[key,value] of myObject){
//     console.log(key,':-',value);
// }


