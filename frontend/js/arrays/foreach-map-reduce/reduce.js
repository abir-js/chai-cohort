const nums = [1, 2, 3, 4];

// const myTotal = nums.reduce(function (acc, curVal) {
//     console.log(`acc: ${acc} && curval: ${curVal}`);
//     return acc + curVal
// }, 0);

const myTotal = nums.reduce((acc, curVal) => acc + curVal, 0);

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299,
    },
    {
        itemName: "py course",
        price: 299,
    },
    {
        itemName: "mob-dev course",
        price: 5999,
    },
    {
        itemName: "data-science course",
        price: 12999,
    },
]

let finalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(finalPrice)