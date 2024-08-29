// var c = 300

let a  = 300//global scope

if(true){
    let a = 10//local scope
    const b = 20
  //console.log("inner:", a);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

// neasted loop scop

function one(){
    const username = "tafizur"

    function two(){
        const website = "youtube"
        console.log(username);      
    }
    //console.log(website);//its not accsesable due to scop is 
    two()
    
}

//one()

// ex

if(true){
    const username = "tafizur"
    if(username === "tafizur"){
        const website = " youtube"
        //console.log(username + website);

    }
   // console.log(website);//not access
    
        
    
}
//console.log(username);//not access

// ++++++++++++++++++interesting++++++++++++++++++++
//console.log(addone(5))//easily access
function addone(num){
    return num + 1
}


// function declaration in different types
//addTwo(5)//before initialize we can't access
const addTwo = function(num){
    return num + 2

    
}
 
console.log(addTwo(5));
