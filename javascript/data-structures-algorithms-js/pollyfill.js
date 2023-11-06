// <<<<<<<<<<<<<<<-------------------------------------------- 1. [[  Pollyfill for map()  ]] ------------------------------------------------------->>>>>>>>>>>
/*
- prototype here is adding myMap[f(n)] to this[Array] method in curr js file
- Array.map((num,i,arr)=> {})
- here this will reference parent array
- temp [] empty array we took because map return a new array
- this[i] is current value
*/
const ab = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (cb) {
     // this is our custom map function
     let temp = [];
     for (let i = 0; i < this.length; i++) {
          temp.push(cb(this[i], i, this)); //this - is array
     }
     return temp;
};

const nums = [1, 2, 3, 4, 5, 6];
const output = nums.myMap((num, i) => {
     return num * 3 + i;
});

console.log(output); //[ 3, 7, 11, 15, 19, 23 ]

// <<<<<<<<<<<<<<<---------------------------------------------- 2. [[  Pollyfill for filter()  ]] ----------------------------------------------------->>>>>>>>>>>

Array.prototype.myFilter = function (cb) {
     let temp = [];
     for (let i = 0; i < this.length; i++) {
          if (cb(this[i], i, this)) {
               temp.push(this[i]);
          }
     }
     return temp;
};

const moreThanTwo = ab.myFilter((num) => {
     return num > 2;
});

console.log(moreThanTwo); // 3,4,5

// <<<<<<<<<<<<<<<---------------------------------------------- 3. [[  Pollyfill for filter()  ]] ------------------------------------------------------>>>>>>>>>>>
/* 
- Array.reduce((acc,curr,i,arr)={},initialValue)

*/

Array.prototype.myReduce = function (cb, initialValue) {
     let accumulator = initialValue;
     for (let i = 0; i < this.length; i++) {
          accumulator = accumulator
               ? cb(accumulator, this[i], i, this)
               : this[i]; // if initial value is not assigned then elsee block mean take first element of array
     }
     return accumulator;
};

const sum = ab.myReduce((acc, curr, i, arr) => {
     return acc + curr;
}, 0);
console.log(sum); //15
