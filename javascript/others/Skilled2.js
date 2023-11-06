// <<<<<<<<<<<<<<<-------------------------Map vs Foreach -------------------------------->>>>>>>

const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map((ar) => {
     return ar + 2; //[ 3, 4, 5, 6, 7 ]
});

// Map will return a new array also it will not modify the original array
// We can chain method like filter or anything after it

const forEachResult = arr.forEach((ar, i) => {
     // return ar + 2; //undefined
     arr[i] = ar + 2; //[ 3, 4, 5, 6, 7 ] - modified array a
});
//[ 3, 4, 5, 6, 7 ] - modified array and cannot chain method in array because it return undefined

console.log(mapResult, forEachResult, arr);

// <<<<<<<<<<<<<<<-------------------------Flatten the Array -------------------------------->>>>>>>

let array = [
     [1, 2],
     [3, 4],
     [5, 6, 7, 8, 9],
     [10, 11, 12],
];

let flattened = [].concat(...array);
console.log(flattened); //[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12]

let aa = [
     [1, 2],
     [3, 4],
     [5, 6, [7, 8], 9],
     [10, 11, 12],
];
//use method flat
console.log(aa.flat(2)); //[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12]

// <<<<<<<<<<<<<<<-------------------------null vs undefined -------------------------------->>>>>>>
/* 
 null - it's a actual value
 undefined - variable is declared but not initialized

*/
console.log(typeof null); //object
console.log(typeof undefined); // undefined
console.log(null == undefined); // true
console.log(null === undefined); // false : here it will check the types as well for null it's object and undefined is undefined

// <<<<<<<<<<<<<<<-------------------------var /const/let -------------------------------->>>>>>>s
{
     let a = 10;
}
console.log(a); //ReferenceError: a is not defined

{
     var a = 10;
}
console.log(a); //10

function addWeight(weights) {
     let weightArray = [];

     Object.keys(weights).forEach((key) => {
          for (let i = 0; i < weights[key]; i++) {
               weightArray.push(key);
          }
     });
     return weightArray[Math.floor(Math.random() * weightArray.length)];
}

const weights = {
     green: 1,
     yellow: 2,
     red: 3,
};

console.log(addWeight(weights));

//------------------1----------------->
(function () {
     let a = (b = 10); //here b is not defined using let keyboard, so it will behave like a global .
})();
console.log(b); //10
console.log(a); //ReferenceError: 'a' is not defined

//------------------2----------------->
//need desired result what will be the value of 'i'
// let i

console.log(i * i); //0
console.log(i + 1); //1
console.log(i - 1); //-1
console.log(i / i); //1

//------------------3----------------->
let x = [1, 2, 3] + [4, 5, 6];
console.log(x); //1,2,34,5,6

//------------------4----------------->
console.log(55555555555555555555); //55555555555555560000
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991 - IT WILL RETURN MAX INTEGER NUMBER THAT JS CONTAIN IF ABOVE IT WILL PRINT ZERO
