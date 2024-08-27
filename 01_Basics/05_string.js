const name = "Tafizur"
const repoCount = 100

// to use this method in string
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// new string eclaration

const gameName = new String('Tafizur-hc')

// console.log(gameName[0]);//T
// console.log(gameName.__proto__); //object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//2ND POSITION MEY KO SA HAI
console.log(gameName.indexOf('z'));


// example of string all about function hai sab
// method all about string
const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     tafizur    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tafizur.com/tafizur%20rahman"
console.log (url.replace('%20', '-'))

console.log(url.includes('sander'));


console.log(gameName.split('.'));

