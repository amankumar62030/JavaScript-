// let myName="aman     "

// console.log((myName.truelength));


let myHero=["spiderman","Thor"]

let heroPower={
    Thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aman=function(){
    console.log(`aman is present in all object`);
}


Array.prototype.heyaman=function(){
    console.log("Aman Says hello");
}

// heroPower.aman();
myHero.aman();
myHero.heyaman();
// heroPower.heyaman();




//...........................inheritance......................//
const User={
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User
//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName="chaiaurCode     "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()

"aman".trueLength()
"iceTea".trueLength()