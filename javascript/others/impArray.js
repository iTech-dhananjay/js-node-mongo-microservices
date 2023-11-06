// <<<<<<<<<<<<<<<------------------------- Create an Array-------------------------------->>>>>>>
const aa = ['a', 'b', 'c'];
console.log(aa); //[ 'a', 'b', 'c' ]

const aaa = new Array('a', 'b', 'c'); //create an array with constructor
console.log(aaa); //[ 'a', 'b', 'c']

// <<<<<<<<<<<<<<<-------------------------Create String from Array -------------------------------->>>>>>>
const aaaa = ['a', 'b', 'c'];
const resultString = aaaa.join(' ');
console.log(resultString); //a b c

// <<<<<<<<<<<<<<<-------------------------Access array item by its index -------------------------------->>>>>>>
const ab = ['a', 'b', 'c', 'd'];
console.log(ab[0]); //a
console.log(ab[ab.length - 1]); //d -last item

// <<<<<<<<<<<<<<<-------------------------Find the index of an item in an array -------------------------------->>>>>>>
const aabb = ['a', 'b', 'c'];
console.log(aabb.indexOf('b')); //1

// <<<<<<<<<<<<<<<-------------------------Check if an array contains certain items -------------------------------->>>>>>>
const abb = ['a', 'b', 'c', 'a'];

console.log(abb.includes('e')); //false
console.log(abb.indexOf('a') !== -1); //true

// <<<<<<<<<<<<<<<-------------------------Append or add an item into array -------------------------------->>>>>>>
const aab = ['a', 'b', 'c'];
aab.push('d');
console.log(aab); //[ 'a', 'b', 'c', 'd' ]

// <<<<<<<<<<<<<<<-------------------------Add a new first item into array -------------------------------->>>>>>>
const aaabc = ['a', 'b', 'c'];
aaabc.unshift('0');
console.log(aaabc); //[ '0', 'a', 'b', 'c' ]

// <<<<<<<<<<<<<<<------------------------- Remove the last item from an array -------------------------------->>>>>>>

const abc = ['a', 'b', 'c'];
const results = abc.pop();
console.log(abc); //[ 'a', 'b' ]

// <<<<<<<<<<<<<<<-------------------------Remove the first item from an array-------------------------------->>>>>>>
const abbc = ['a', 'b', 'c'];
abbc.shift();
console.log(abbc); //[ 'b', 'c' ]

// <<<<<<<<<<<<<<<-------------------------Remove multiple items from the end of an array -------------------------------->>>>>>>
//before you need to understand slice method
const aabc = ['a', 'c', 'd', 'd', 'e'];
aabc.splice(1, 0, 'b');

console.log(aabc); //[ 'a', 'b', 'c', 'd', 'd', 'e' ]

const fruits = ['apple', 'banana', 'ban', 'orange', 'tick'];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits); //[ 'apple', 'banana' ]
console.log(removedItems); //[ 'ban', 'orange', 'tick' ]

// <<<<<<<<<<<<<<<-------------------------Empty an array-------------------------------->>>>>>>
// const abcc = ['a', 'b', 'c'];
// abcc.length = 0;
// console.log(abcc); //[] - it will return empty array

// <<<<<<<<<<<<<<<-------------------------slice and splice method ------------------------------->>>>>>>
/* 
1. - The slice() method can be used to create a copy of an array or return a portion of an array. 
   - It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.
   - You can also use negative indexes which will start extracting elements from the end of the array.

2. - Unlike the slice() method, the splice() method will change the contents of the original array.
   - The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

*/

const cities = ['Tokyo', 'Cairo', 'Los Angeles', 'Paris', 'Seattle'];
const newCities = cities.slice(2); //[ 'Los Angeles', 'Paris', 'Seattle' ]
console.log(newCities);
const newCity = cities.slice(-2);
console.log(newCity); //[ 'Paris', 'Seattle' ]
const aabck = ['a', 'c', 'd', 'd', 'e'];
aabc.splice(1, 0, 'b');
console.log(aabck); //[ 'a', 'b', 'c', 'd', 'd', 'e' ]

let arr = [1, 2, 10, 3, 4, 5, 6, [7, 8, [6, [7, 9]]]];

let outputOne = arr.flat(Infinity);
console.log(outputOne); //[1, 2, 10, 3, 4, 5, 6, 7, 8, 6, 7, 9];

let outputTwo = arr.flat(2); //[1, 2, 10, 3, 4, 5, 6, 7, 8, 6, [7, 9]];
