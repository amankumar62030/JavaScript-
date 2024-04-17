const myObject={
    js:'javaScript',
    cpp:'C++',
    rb:"ruby",
    swift:"Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming=["js","java","rb","cpp","py"]
for (const key in programming) {
    console.log(programming[key]);
}


const map= new Map()
map.set('In',"India")
map.set('USA',"United State Of America")
map.set('Fr',"France")
map.set('In',"India")

// for (const key in map) {   //this is not iteratable
//     console.log(key);
// }

