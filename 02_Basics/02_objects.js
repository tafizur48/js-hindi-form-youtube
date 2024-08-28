// singleton => means when a object create using constructor then its singleton.

// Declaration
// object literals

// symbol
const mysym = Symbol("key1") //we can't define the symbol as a objcet its using string

const jsUser = {
    name : "Tafizur", //by default computer name ko "name" ko string mante hai
    "full name": "Tafizur Rahman",//we can't define this type of value as a . sign its a solution like that angel brackts[]
     age  :18,
     [mysym]: "key1",//this method to preffer
    location : "delhi",
    emial : "mustafizur@gmail.com",
    isLoggedIn : false,
    lastLogiDays : ["Monday", "Sunday"]

}

// console.log(jsUser.emial);
// console.log(jsUser["emial"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mysym);//avoid
// console.log(typeof ["mysym"]);

jsUser.emial = "tafizur4532@gmail.com"
// Object.freeze(jsUser)//freez kor diya error nhi ayega but kam nhi koraga
jsUser.emial = "tafizur@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    //console.log("hello js user");
    
}


jsUser.greetingTwo = function(){
   // console.log(`hello js user, ${this.name}`);
    
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

// ********************************part 2 object********************

// singleton or constructor

//const tinderUser = new object() //its a singleton object
const tinderUser = {}//non singleton object

tinderUser.id = "1234abc"
tinderUser.name = "samey"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    // nested loop its possible object ke ander object
    fullname :{
        userfullname : {
            firstname : "tafizur",
            lastname: "rahman"
        }

    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}

const obj2 = {3: "a", 4: "b"}

//const obj3 = (obj1, obj2)
//const obj3 = Object.assign(obj1, obj2)//use kam

const obj3 = {...obj1, ...obj2}//use this method
//console.log(obj3);

const user ={
    id: 1,
    emial: "tafizur@gmail.com"

}
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// objcet part 2

// {
//     //object ko json bolte hai
//     "name" : "tafizur",
//     "coursename" : "js in hindi",
//     "price" : " zero"
// }


