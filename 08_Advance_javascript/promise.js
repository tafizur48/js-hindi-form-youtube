//new is instance 
//new is instance 
// two parts mey kiya pehele varible mey store kiya uske bath aya

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        resolve()//its part next time print 
        console.log('Async task complete')
        
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

// ak part mey kor chakte hai direct not written any type of variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async tast 2');
        resolve()
        
    }, 1000)

}).then(function(){
    console.log('Async 2 resolved');
    
})

// task three
// resolve ke ander jitna bhi parameter pass korenge 
// sab milega print 
// kistarah se data cosumtion hota hai

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve({username: "chai", email: "chai@example.com"})
        

    }, 1000)
})

promiseThree.then(function(user){

    console.log(user);
    

})

// task four
// error handling or promise resolved task in than or catch 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false//false or true
        if(!error){
            resolve({username: "Tafizur", password: "123456"})

        }else{
            reject('ERROR: Somthing went wrong')
        }

    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
    

}).then((username) => {
    console.log(username);
    

}).catch(function(error) {
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected") )


// task five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false//false or true
        if(!error){
            resolve({username: "Javascript", password: "123456"})

        }else{
            reject('ERROR: JS  went wrong')
        }

    }, 1000)
})
// new method async await

async function consumePromiseFive(){
    // using try catch method to handle the error
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()


// using try catch ka syntax that help the 
// json response  kafi sare object ahmm access kor chakte hai
// using trycatch method
// fetch => isko chahiye ak url is url se uska data nikal chakte hai
// ismey thoda time leta hai isliye awiat use korte hai

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:", error);    
        
//     }
    
// }
// getAllUsers()

// isi dummy data or function ko .then cathch method se ko chekte hai kya
// lets try it

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
// error hadling
.catch((error) => console.log(error))