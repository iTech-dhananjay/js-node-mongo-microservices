//ARRAY METHODS

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'keyboard', price: 25},
];

//Filter Methods
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);

//Map Methods
const itemNames = items.map((item) => {
    return item.price;
});
console.log(itemNames);

//Find items

const foundItem = items.find((item) => {
    return item.name === 'Book';
});
console.log(foundItem);

//forEach Method
items.forEach((item) => {
    console.log(item.price);
});

//some method -> it will only return true or false value
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 10;
});
console.log(hasInexpensiveItems);

//every method => it will check as every item is less than 100 or not True or False
const hasExpensiveItems = items.every((item) => {
    return item.price <= 100;
});
console.log(hasExpensiveItems);

// reduce method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

console.log(total);

// includes method

const number = [1, 2, 3, 4, 5];
const includesSeven = number.includes(7);
console.log(includesSeven);

// <<<<<<<<<<<<<<<---------------------------------Array Sum  ------------------------------------------------------------>>>>>>>

const arr = [1, 2, 3, 4, 5];

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum(arr));

// <<<<<<<<<<<<<<<-------------------------------------------[ Sum of Array elements :- Anonymous Function ] ------------------------------------------------------------>>>>>>>
const arraySum = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};

let result = arraySum(arr);
console.log(result);
