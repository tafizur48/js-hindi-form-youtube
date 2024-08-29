// Immediate Invoked Function Expression
// simple method execution
// function chai(){
//     console.log(`Database conceted`);
    
// }
// chai()

// different way execution

(function chai(){
    console.log(`database connected`);
    
})();//in this situation function call only breckts and also semicolon
// given due to he don't know where his executin finished isliye hum 
// semicolon use korte hai is case mey

// in other ways

// bina um ka ak arrow function banate hai tab bhi chalega
( () => {
    console.log(`DB  connected Two`);
    
})();

// age mey ak name dclarae koro 

( (name) => {//parameter pass
    console.log(`DB connceted two ${name}`);
    
})('tafizur')//arguments pass