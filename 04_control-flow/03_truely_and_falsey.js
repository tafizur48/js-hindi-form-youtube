//const useremail = [], "", "tafizur"
// agr email dia hai toh got the value agr nhi hai toh don't means else mey jayega
// agr hai toh true nhi toh false mannega agr array type hai toh true manega
// // string hai toh false manega
// if (useremail) {
//     console.log("got user email");
    
// }else{
//     console.log("don't have user email");
    
// }


// falsey values

// false, 0, -0 , BigInt 0n, "", null, undefined, NaN

// Truthy value
// "0", 'false', " space", [], {}, function(){}

// false ==0
//true
//false = ''
//false == ""
//true
//0 == ""
// true

// age empty array ko check korna hai

const useremail = []
if (useremail.length === 0) {
    console.log("Array is empty");
    
    
}

// agr object is empty hai toh check kese kore

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined
// usng database
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined  ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// ternary operator or nullish operator those are different things
// condition ? true : false

const iceTeaPrice = 100
//iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
