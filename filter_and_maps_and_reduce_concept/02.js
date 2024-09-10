// using map method

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//let newNums = myNumbers.map( (num) => num + 10)
//  override
// open scop the return use
// newNums = myNumbers.map( (num) =>{return num + 10})

//console.log(newNums);

//  chianing method

const newNums = myNumbers
    .map((num) => num * 10)//nmumber multiply by 10
    .map((num) => num + 1)// //ismey value kabhi first value nhi ayega ismey jiske upar hoke value ayega usmey add hoga like  first => value 1*10=10 after that +1 = 11 ayega
    .filter((num) => num >= 40)

console.log(newNums);

