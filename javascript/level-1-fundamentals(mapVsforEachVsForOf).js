/* 
  1. Objects
  2. Functions
  3. Pollyfills map , filter & reduce
  4. Map vs forEach

*/


// <<<<<<<<<<<<<<<------------------------------------------------- 2. [[  Functions () ]] --------------------------------------------------------->>>>>>>>>>>

//Q1. Function Expression
// after const square = it is called anonymous function which has no name - this function can be assigned as variable or pass as callback function
const squareOne = function (nums) {
    return nums * nums;
};
console.log(squareOne(5));

//Q2.First class function - function that is treated as variable it can do everything same as variable do .. pass as variable

function squareTwo(num) {
    return num * num;
}

function displaySquareTwo(fn) {
    console.log('Square is', fn(5));
}

displaySquareTwo(squareTwo);

// <<<<------------------------------------- 3. Map, Filter, Reduce - [Polyfills and Output Based Questions] --------------------------------------------->>>>
// Map Level -1 Map will return new array + it takes call back f(n)[()=>{}] which takes three things [curr element ,index of array (0,1,2,3)+ acutal array(arri)]

const ab = [1, 2, 3, 4, 5];
const muliptlyAll = ab.map((num, i, arri) => {
    //  return num * 3;  [ 3, 6, 9, 12, 15 ]
    return num * 3 + i; //  [(3, 7, 11, 15, 19)];
});
// Filter Level -1 Filter returns only those elements in the array which fulfills the provided criteria

const moreThanTwo = ab.filter((num) => {
    return num > 2;
});

console.log(moreThanTwo); // 3,4,5

// Filter Level -1 Reduce method reduces the array of values down to just one value
// if it fails to take initial value in reduce then it will take first element as initial value and second value as current value

const sum = ab.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0);
console.log(sum);

//Level-2 Pollyfill for map(), filter() & reduce()

//Level-3 O/P
// Return  only name of students

let students = [
    {name: 'John', rollNumber: 10, marks: 60},
    {name: 'Tom', rollNumber: 4, marks: 90},
    {name: 'Wick', rollNumber: 8, marks: 100},
];
//traditional way
// let names = [];
// for (let i = 0; i < students.length; i++) {
//      names.push(students[i].name.toUpperCase());
// }
// console.log(names); // [ 'JOHN', 'TOM', 'WICK' ]

let names = students.map((stu) => stu.name.toUpperCase()); //[ 'JOHN', 'TOM', 'WICK' ]

(function () {
    var a = (b = 5); //var a = b;    b = 5;
})();

console.log(b); //5
