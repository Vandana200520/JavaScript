// reduce - like can use in shopping cart price additions

//accumulator - empty at starting,then takes initial value,then changes as condition

/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function( acc,currval){
//     console.log(`acc is ${acc} and currval is ${currval}`);
//     return acc+currval;
// },0)                                      //initial value
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc,currval)=> acc + currval ,0)                                      //initial value
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotalPrice = shoppingCart.reduce( (acc,item) => acc + item.price ,0)                                      //initial value
console.log(myTotalPrice);

