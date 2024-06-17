// <<<<<<<<<<<<<<<-----------------------------------------------  [[ Array Operations ]] ------------------------------------------------>>>>>>>>>>>

/*
=> indexOf()
  1. slice() || splice() || toString() || shift() || unshift() || includes() || isArray()
  2. JSON.parse() ||  JSON.stringify() || typeof || Grouping Operator () ||
  3. findIndex() || indexOf() || flatMap()
  4.

*/


//Tricky
null == undefined; // true
null === undefined; // false
typeof null; // 'object'
typeof undefined; // 'undefined'


//--------------------------------------------------------------------------------------------> Type-1
/*
=> Slice and Splice Methods

1. The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object
   selected from start to end (end not included) where start and end represent the index of items in that array.
   The original array will not be modified.

2. The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   splice(start, deleteCount, item1, item2,itemN  )
*/

//=> SLICE

const data = [1, 2, 3, 4, 5]

data.slice(2) //[ 1, 2, 3, 4, 5 ]- slice returns a shallow copy , won't change the original array
console.log(data)

const result = data.slice(2)
console.log(result) //[ 3, 4, 5 ]

const result1 = data.slice(2, 4)
console.log(result1) //[ 3, 4 ]

const result2 = data.slice(-1)
console.log(result2) //[ 5 ]

const result3 = data.slice(2, -1)
console.log(result3) // [3,4]


//=> SPLICE
const months = ['Jan', 'March', 'April', 'May'];
months.splice(3)
console.log(months) //[ 'Jan', 'March', 'April' ]

months.splice(1, 1, 'Feb', 'March')
console.log(months) //[ 'Jan', 'Feb', 'March', 'April' ]


//--------------------------------------------------------------------------------------------> Type-2

// Create an Array
const arrayA = ['a', 'b', 'c'];
console.log(arrayA); // [ 'a', 'b', 'c' ]

const arrayB = new Array('a', 'b', 'c'); // Create an array with constructor
console.log(arrayB); // [ 'a', 'b', 'c' ]

// Create String from Array
const arrayC = ['a', 'b', 'c'];
const resultString = arrayC.join(' ');
console.log(resultString); // 'a b c'

// Access array item by its index
const arrayD = ['a', 'b', 'c', 'd'];
console.log(arrayD[0]); // 'a'
console.log(arrayD[arrayD.length - 1]); // 'd' - last item

// Find the index of an item in an array
const arrayE = ['a', 'b', 'c'];
console.log(arrayE.indexOf('b')); // 1

// Check if an array contains certain items
const arrayF = ['a', 'b', 'c', 'a'];
console.log(arrayF.includes('e')); // false
console.log(arrayF.indexOf('a') !== -1); // true

// Append or add an item into array
const arrayG = ['a', 'b', 'c'];
arrayG.push('d');
console.log(arrayG); // [ 'a', 'b', 'c', 'd' ]

// Add a new first item into array
const arrayH = ['a', 'b', 'c'];
arrayH.unshift('0');
console.log(arrayH); // [ '0', 'a', 'b', 'c' ]

// Remove the last item from an array
const arrayI = ['a', 'b', 'c'];
const removedItem = arrayI.pop();
console.log(arrayI); // [ 'a', 'b' ]
console.log(removedItem); // 'c'

// Remove the first item from an array
const arrayJ = ['a', 'b', 'c'];
arrayJ.shift();
console.log(arrayJ); // [ 'b', 'c' ]

// Remove multiple items from the end of an array
const arrayK = ['a', 'c', 'd', 'd', 'e'];
arrayK.splice(1, 0, 'b');
console.log(arrayK); // [ 'a', 'b', 'c', 'd', 'd', 'e' ]

// Empty an array
const abcc = ['a', 'b', 'c'];
abcc.length = 0;
console.log(abcc); // [] - it will return an empty array


// Using flat to flatten nested arrays
let arr = [1, 2, 10, 3, 4, 5, 6, [7, 8, [6, [7, 9]]]];

let outputOne = arr.flat(Infinity);
console.log(outputOne); // [1, 2, 10, 3, 4, 5, 6, 7, 8, 6, 7, 9];

let outputTwo = arr.flat(2); // [1, 2, 10, 3, 4, 5, 6, 7, 8, 6, [7, 9]];  //flatten the array upto '2' level


//-----------------------------------------------------------------------------------------> Type-3