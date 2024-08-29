const user = {
    username : "tafizur",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username} , welcome to website`);//this means current context ko reffer korta hai
        // console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);//empty

// function chai(){
//     let username = "tafizur"
    // console.log(this.username);//username is undefined when we use this.username
    // console.log(this);//windows globally
    
//}
//chai()

// const chai = () => {
//     let username = "tafizur"
//     console.log(this);//empty
    
// }
// chai()

// *****************arrow*****************

// const addTwo = (num1, num2) => {
//     return num1 + num2//explicit means retuen lagana porta hai
// }
// implicit conversion means let 
// const addTwo = (num1, num2) =>  num1 + num2
// jab hum curly breckets use korennge tab return use hoga nhi toh asei lokh chakte hai

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => {username: "tafizur"}// undefined ata hai withot paranthsis value doesn't show
const addTwo = (num1, num2) => ({username : "tafizur"})//use this type of method

console.log(addTwo(4,3))
