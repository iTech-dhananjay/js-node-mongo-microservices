const passengers = [
     {
          id: 1,
          passengerName: 'Freddie Mercury',
          isVegetarianOrVegan: false,
          connectedFlights: 2,
     },
     {
          id: 2,
          passengerName: 'Amy Winehouse',
          isVegetarianOrVegan: true,
          connectedFlights: 4,
     },
     {
          id: 3,
          passengerName: 'Kurt Cobain',
          isVegetarianOrVegan: true,
          connectedFlights: 3,
     },
     {
          id: 3,
          passengerName: 'Michael Jackson',
          isVegetarianOrVegan: true,
          connectedFlights: 1,
     },
];

const passengerNames = [];
passengers.forEach((passenger) => {
     passengerNames.push(passenger.passengerName);
});

console.log('passengerNames', passengerNames);

const pasengerList = [];
passengers.forEach((passenger) => {
     if (passenger.isVegetarianOrVegan === true) {
          pasengerList.push(passenger.passengerName);
     }
});
console.log('pasengerList', pasengerList);

/*  
[[ Call back ]] -
The two problems that we  faced in callbacks are:-
1) Callback hell  :  Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations 
                     it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.

2) Inversion Of Control  :  When we give the control of callbacks being called to some other API, this may create a lot of issues. That API may be buggy, 
                            may not call our callback and create order as in the above example, may call the payment callback twice etc.

*/

/* 
1. What are Promises? 
   Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time.
   They contain two properties: PromiseState and PromiseResult.

2. Importance of Promises:
   a) Promises can help us to write trust worthy code.
   b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
   c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
   d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
   e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.

*/

/* 
[[ Event Loop ]] -

Things learned:
 1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, 
     fetch, local storage.
 2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
 3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
 4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
 5. Micro task is given priority over callback tasks.
 6. Too many micro tasks generated can cause Starvation (not giving time to callback tasks to execute).

*/

/* 
Q: Is MongoDB better than MySQL?
A:  It all depends on the type of data that you are working on whether it is structured or unstructured and your system requirement and use case.
    If it is structured and needs a traditional relational database then for MySQL and if it is unstructured then go for MongoDB.

Q: Can MongoDB replace MySQL?
    MongoDB is a cross-platform document-oriented and NoSQL database that allows fast changes over time in the database as the application grows but both have their pros and cons
    Mysql is open source, secure, and provides high flexibility 
    Whereas MongoDB provides speed, ability to handle unstructured data, etc. Considering all these points we can say yes MongoDB has the potential to replace MySQL.

Q: Which database is fastest?
A: Out of MySQL and MongoDB, MongoDB is fast because of its schema-less feature and ability to handle unstructured data.

 */

// program to check if an object is an array
function checkObject(arr) {
     // check if arr is array
     const result = Array.isArray(arr);

     if (result) {
          console.log(`[${arr}] is an array.`);
     } else {
          console.log(`${arr} is not an array.`);
     }
}
const array = [1, 2, 3];

// call the function
checkObject(array); //[1,2,3] is an array.

//empty an array
const arrays = [1, 2, 3];
arrays.length = 0;
console.log(arrays);

/* 
for...of with Strings
You can use for...of loop to iterate over string values. For example
 
*/

const string = 'code';

// using for...of loop
for (let i of string) {
     console.log(i);
}
let code = 'string';

for (let i = 0; i < code.length; i++) {
     console.log(code[i]);
}
//c
//o
//d
//e

// program to merge and remove duplicate value from an array
const array1 = [1, 2, 3];
const array2 = [2, 3, 5];

function getUniqueAfterMerge(arr1, arr2) {
     // merge two arrays
     let arr = arr1.concat(arr2);
     let uniqueArr = [];

     // loop through array
     //The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc). i - items in the iterable
     for (let i of arr) {
          if (uniqueArr.indexOf(i) === -1) {
               uniqueArr.push(i);
          }
     }
     console.log(uniqueArr);
}

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2); //[ 1, 2, 3, 5 ]

/* 
 - The two arrays are merged using the concat() method.
 - The for...of loop is used to loop through all the elements of arr.
 - The indexOf() method returns -1 if the element is not in the array.
 Hence, during each iteration, if the element equals -1, the element is added to the uniqueArr array using the push() method.

*/

/* 
The slice() method returns a shallow copy of a portion of an array
 into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
The original array will not be modified. 


The splice() method changes the contents of an array by removing or replacing existing elements 
and/or adding new elements in place. To access part of an array without modifying it, see slice().
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// <<<<<<<<<<<<<------------------------------------------------- [[   ]] --------------------------------------------------->>>>>>>>>>>
const arr = [1, 3, 2, 3, 7, 4, 7, 9, 6, 2];

//duplicate item

function dupArr(arr) {
     let bb = [];

     for (let i = 0; i < arr.length; i++) {
          for (let j = i; j < arr.length; j++)
               if (arr[i] === arr[j + 1]) {
                    bb.push(arr[i]);
               }
     }
     return bb;
}
console.log(dupArr(arr)); //[ 3, 2, 7 ]
const as = ['a', 'b', 'c', 'd']; //output = "a,b,c,d";

// <<<<<<<<<<<<<------------------------------------------------- [[  Plann to be skilled ]] --------------------------------------------------->>>>>>>>>>>
/* 
1. Solve Technical Suneja 5-8 problems 
2. Node Js - explore more
3. AWS - explore more
4. Leet code - solve problems
*/

//Aloha Technologies
/* 
1. Fabonnic Series  || fiboncci series and printing it in Reverse Order
2. Separate 1 and 0 in array 
3. count a Word in String
4. Factorial of number
5.  prime number
6. Write a program to print the words that contains vowel in it.

Appinventiv
 - JS basics and ES6 questions
 - merge sort 
 - Find Duplicate Numbers in List 2. Draw Pascal Triangle

 */

//The split() method splits a string into an array of substrings.

let str1 = 'Hire the top 1% freelance developers';

const split_string = str1.split(' ');
console.log(split_string); //[ 'Hire', 'the', 'top', '1%', 'freelance', 'developers' ]

// console.lo(a); // undefined
// let a = 10;

// undeclared;
// console.log(x);

// i = 10;
// i = 'string;';

//https://stackoverflow.com/questions/16210863/how-to-recover-from-error-during-bulk-insert-in-mongodb

const arrayi = [
     { name: 'xhf', score: 40 },
     { name: 'nhn', score: 90 },
     { name: 'aij', score: 40 },
     { name: 'ryy', score: 30 },
     { name: 'qwe', score: 20 },
     { name: 'agh', score: 40 },
     { name: 'lok', score: 10 },
];

const result = arrayi.sort((a, b) => {
     const sort = a.score - b.score;
     return sort;
});

console.log(result);

Math.abs();
//The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. The result is therefore always a positive number or 0.
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
//Math.abs() coerces its parameter to a number. Non-coercible values will become NaN, making Math.abs() also return NaN.
Math;
Math.abs('-1'); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(''); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs('string'); // NaN
Math.abs(); // NaN

// function z() {
//      let a = 10;
//      a++;
//      setTimeout(() => {
//           console.log(`from setTimeout : ${a}`);
//      }, 600);

//      console.log(`from last console log : ${++a}`);
// }

// z();

// for (var i = 0; i < 4; i++) {
//      setTimeout(() => console.log(i), 0); //4
// }

// let arr = [1, 2, 3, 3, 2, 4];

// //remove duplicate

// function removeDup(arr) {
//      let bb = [];

//      for (let i = 0; i < arr.length - 1; i++) {
//           if (bb.indexOf(arr[i]) === -1) {
//                bb.push(arr[i]);
//           }
//      }
//      return bb;
// }

// console.log(removeDup(arr));

// from last console log : 12
// [ 1, 2, 3 ]
// 4
// 4
// 4
// 4
// from setTimeout : 12

// const arr = [
//      {
//           name: 'Aditya',
//           score: 32,
//      },
//      {
//           name: 'Aditi',
//           score: 34,
//      },
//      {
//           name: 'Chaman',
//           score: 32,
//      },
//      {
//           name: 'Dhananjay',
//           score: 27,
//      },
//      {
//           name: 'Krishna',
//           score: 34,
//      },
// ];

// const result = arr.sort((a, b) => {
//      const val = b.score - a.score;
//      return val;
// });

// console.log(result);

/* 

// name:'Aditya',
// score: 32,

// name: 'Aditi',
// score: 34,

// name: 'Chaman',
// score: 32,

// name: 'Dhananjay',
// score: 27,

// name: 'Krishna',
// score: 34,

// //sort this array with score top to last
// // descending order : 

// name: 'Krishna',
// score: 34,

// name: 'Aditi',
// score: 34,

// name: 'Chaman',
// score: 32,

// name:'Aditya',
// score: 32,

// name: 'Dhananjay',
// score: 27,
 */

// const arr = [
//      {
//           name: 'Aditya',
//           score: 32,
//      },
//      {
//           name: 'Aditi',
//           score: 34,
//      },
//      {
//           name: 'Chaman',
//           score: 32,
//      },
//      {
//           name: 'Dhananjay',
//           score: 27,
//      },
//      {
//           name: 'Krishna',
//           score: 34,
//      },
// ];

// const result = arr.sort((a, b) => {
//      return b.name.localeCompare(a.name) || b.score - a.score;
// });

// console.log(result);

// const arr = [
//      { name: 'Aditya', score: 32 },
//      { name: 'Aditi', score: 34 },
//      { name: 'Chaman', score: 32 },
//      { name: 'Dhananjay', score: 27 },
//      { name: 'Krishna', score: 34 },
// ];

// arr.sort((a, b) => {
//      if (b.score !== a.score) {
//           return b.score - a.score;
//      } else {
//           return b.name.localeCompare(a.name);
//      }
// });

//credflow

// Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”. And for multiples of 3 and 5 both print “FizzBuzz”

// for(let i =0;i<=100;i++){
//     if(i%3===0 && i %5 ===0){
//         console.log('FizzBuzz')
//     }
//     else if(){

//     }

// }

// const arr = [1,2,3,4,5,6]

// function revArr(arr){
//     let swap;

//     for(let i =0 ;i<arr.length)

// }

// const obj = {a : 1}
// const obj2 = obj1;
// obj2.b=  2;
// console.log(obj2);
// You16:08
// {
// {
// a:1,
// b:2}
// Arpit Shrivastava16:16
// var a = 23;
// var a = 24;
// Arpit Shrivastava16:20
// setTimeout(function timeout() {
//   console.log('Timed out!');
// }, 0);

// function promiseMe() {
//     Promise.resolve(1).then(function resolve() {
//     	console.log('Promise');
//     	promiseMe();
//     });
// }

// promiseMe();
// console.log("Console")
// You16:22
// console
// Promise
// TimedOut
// Arpit Shrivastava16:28
// function f1() {
// 	var a = 1;

// 	return  function () {
// 	  console.log(a++);
// }
// }

// const func1 = f1();

// func1()
// func1()
// f1()()
// You16:28
// db.collectionName.createIndex({name:}
// Arpit Shrivastava16:32
// Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of the number and for the multiples of ‘5’ print “Buzz”. And for multiples of 3 and 5 both print “FizzBuzz”
// Example:
// For 1 to 15:
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

// const obj = {a : 1}
// const obj2 = obj;
// obj2.b=  2;
// console.log(obj);

// var a = 23;
// var a = 24;

// function a(){
//     var a=5;
//     c()
//     function c(){
//         console.log(a)

//     }
// }

// function f1() {
// 	var a = 1;

// 	return  function () {
// 	  console.log(a++);
// }
// }

// const func1 = f1();

// func1() //1
// func1() //2
// f1()()

//  for(let i =0;i<=100;i++){
//     if(i%3===0 && i %5 ===0){
//         console.log('FizzBuzz')
//     }
//     else if(i%3===0){
//         console.log

//     }

// <<<<<<<<<<<<<<<-------------------------Hoisting-------------------------------->>>>>>>

/*
Variable Hoisting && Function Hoisting

Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting- hoisted in diffrent ways temporal dead zone.

 */

//using test before declaration :-> Since the variable test is only declared and has no value, undefined value is assigned to it.

console.log(test); //undefined
var test;

console.log(a); //undefined
var a = 5;

/* 
program to display value
 */

function greet() {
     b = 'hello';
     console.log(b); // hello
     var b;
}

greet(); // hello
console.log(b); //Uncaught ReferenceError: b is not defined

//Variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function.

/* If a variable is used with the let keyword, that variable is not hoisted. */
a = 5;
console.log(a); //Uncaught ReferenceError: Cannot access 'a' before initialization
// let a;

//A function can be called before declaring it.
greet();

function greet() {
     console.log('Hi , there');
}

//In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

// <<<<<<<<<<<<<<<-------------------------JavaScript Date and Time -------------------------------->>>>>>>

/*
In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods. 

There are four ways to create a date object.

1. new Date()
2. new Date(milliseconds)
3. new Date(Date string)
4. new Date(year, month, day, hours, minutes, seconds, milliseconds)


 */
//You can create a date object using the new Date() constructor.

const timeNow = new Date();
console.log(timeNow); // shows current date and time :-  2022-11-25T12:36:28.623Z

// <<<<<<<<<<<<<<<-------------------------Debugging JavaScript in Browser -------------------------------->>>>>>>

/* 
1. Using console.log() 
2. Using debugger
The debugger keyword stops the execution of the code and calls the debugging function.
The debugger is available in almost all JavaScript engines. like V8 engine

3. Setting Breakpoints - JavaScript will stop executing at each breakpoint and lets you examine the values. Then, you can resume the execution of code.


*/

let a = 6;
let b = 9;
let c = a * b;

// stops the execution
debugger;

console.log(c);

// // <<<<<<<<<<<<<<<-------------------------JavaScript Regex -------------------------------->>>>>>>
// const a = [5, 4, -3, 20, 17, -33, -4, 18];

// const positiveNums = a.flatMap((index) => {
//      let result = index > 0 ? index : [];
//      return result;
// });
// console.log(positiveNums); //[ 5, 4, 20, 17, 18 ]

// const postiveNumsTwo = a.map((index) => {
//      let result = index > 0 ? index : -1;
//      return result;
// });

// console.log(postiveNumsTwo); //[  5,  4, -1, 20, 17, -1, -1, 18]

//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const array11 = [1, 2, 3];

const firstElement = array11.shift();

console.log(array11);

let a = 'abcaba';

function removeDup(a) {
     let removeDup = '';
     for (let i = 0; i < a.length - 1; i++) {
          if (removeDup.indexOf(a[i]) === -1) {
               removeDup = a[i] + removeDup;
          }
     }

     return removeDup;
}

console.log(removeDup(a)); //cba
