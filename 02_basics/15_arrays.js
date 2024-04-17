const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros=[...marvel_heros,...dc_heros]
// console.log(all_new_Heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Aman"))
console.log(Array.from("AmanWorld"))
console.log(Array.from({name:"Aman"}))   //intresting 


let socre1=100
let socre2=200
let socre3=300
console.log(Array.of(socre1,socre2,socre3));


