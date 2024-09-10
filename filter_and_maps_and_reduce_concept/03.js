// reduce methode => accumulator and curretnt value, initial value
// ismey accumulator + current value ,initial -in the 
// initial value whatever we given like - starting 1,2 something like that
// reduce method also a callback function
 const myNums = [1, 2, 3]

//const myTotal = myNums.reduce(function (accumulator, currentvalue) {
    //     console.log(`accumulator : ${accumulator} and currentvalue : ${currentvalue}`);
    // scop open kiya toh return dena porega
    //return accumulator + currentvalue
//}, 0)//this 0 is define the initial value


// using arrow method
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
//console.log(myTotal);


// using object

const shoppingCart = [

    {
        itemName : 'js course',
        price : 2999
    },

    {
        itemName : 'py course',
        price : 999
    },

    {
        itemName : 'mobile development course',
        price : 5999
    },

    {
        itemName : 'Data science course',
        price : 12999
    },
]

// using reduce method to add all the price
// ismey item means =>  currentvalue 

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
