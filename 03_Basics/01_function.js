// function declaration
// syntax
// function functionName(){
    
// }

// function sayMyNmae(){
//     console.log("t");
//     console.log("a");
//     console.log("f");
//     console.log("i");
//     console.log("z");
//     console.log("u");
//     console.log("r");
 
// }

// sayMyName()

function addTwoNumbers(number1, number2){//parameters
    // let result = number1 + number2
    // return result
    
    return number1 + number2
}

const result = addTwoNumbers(4, 8)//argumeters
// console.log("result:" , result);

function loginUserMessage(username = "sam"){//agr username given hai toh if condition mey enter nhi korega 
    if(username === undefined){//(!username) is the same things
       // console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tafizur"))//agr name given hai toh override hoga
// console.log(loginUserMessage(""))//""there is no name
//console.log(loginUserMessage())//undefined override


// part 2

function calculateCartPrice(...num1){ //rest operator(...) 3 dot array
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username : "tafizur",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

// object se pass korna
handleObject({
    username: "tafizur",
    price: 399
})

// array pass
const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
