
//numbers
const score = 500
//console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const otherValue = 125.356

//console.log(otherValue.toPrecision(4));

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'));

// *******************Maths*****************************

// console.log(Math);
// console.log(Math.abs(-4));//-ve ko +ve kor deta hai
// console.log(Math.round(4.6));//height number 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));//lower number use
// console.log(Math.min(4,6,5,9));
// console.log(Math.max(4,6,5,9));


console.log(Math.random()); //under 0 or 1 ke bis mey
//  ayega like 0.1 0.2 0.5 etc
console.log(Math.random()*10 + 1);//khabhi value 0.1 toh us case mey math.floor 0 dega is 
// case ko avoid korne key liye *10multiply 
// liya or +1 kiya kuki 0 nhi ana chahiye 


console.log(Math.floor(Math.random()*10) + 1); // 1 se upar chahiye is case mey 1 se lekar 9 ke bis mey dega koi sa bhi random number


const min = 10
const max = 20


// formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

