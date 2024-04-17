//Immediately Invoked Function Expressions (IIFE)
//global scope ke pollution se problem hoti hi kaibarr to us global scope variable ya jo bi uske declaration hai usko htane ke liye iife ka use kiya

(function chai(){   //named iife
    console.log(`DB CONNECTED`);
})();

((name)=>{    //simple iife
   console.log(`DB CONNECTED TWO ${name}`); 
})('aman')
