// const coding  = ['js', 'python', 'java', 'cpp', 'ruby']

// const values = coding.forEach(  (item) =>{
//     console.log(item);
//     return item//for each loop return nhi korta
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter method also take the callback function
// also filter method return the value
// const newNums = myNums.filter( (num) =>  num > 4)
// console.log(newNums);

// agr scop{} use korte hai toh return likhna porega
// const newNums = myNums.filter( (num) => {
//     return num > 4})

// using forEach

const newNums = []
myNums.forEach(  (num) => {
    if (num > 4) {
        newNums.push(num)
        
    }
})

//console.log(newNums);

// create object
// books ka array
const books = [
    {title: 'book one', genre : 'fiction', publish: '1981', edition: '2004'},
    {title: 'book two', genre : 'Non-fiction', publish: '1992', edition: '2010'},
    {title: 'book three', genre : 'history', publish: '1999', edition: '2008'},
    {title: 'book four', genre : 'Social', publish: '1981', edition: '2004'},
    {title: 'book five', genre : 'science', publish: '1989', edition: '2005'},
    {title: 'book six', genre : 'fiction', publish: '1988', edition: '2007'},
    {title: 'book seven', genre : 'Non-fiction', publish: '1987', edition: '1999'},
    {title: 'book eight', genre : 'social', publish: '2005', edition: '2004'},
    {title: 'book nine', genre : 'history', publish: '1986', edition: '2022'},
    {title: 'book ten', genre : 'science', publish: '2018', edition: '2024'},

];

// doesn't use scop
let userBooks = books.filter(  (books) =>books.genre === 'history')

// using scop
//  userBooks = books.filter(  (book) =>{
//     return book.publish >= 2000})

 userBooks = books.filter(  (book) =>{
    return book.publish >= 1995 && book.genre === 'history'})
console.log(userBooks);


