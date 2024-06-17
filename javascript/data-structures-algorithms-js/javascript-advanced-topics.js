// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All concepts]] ------------------------------------------------>>>>>>>>>>>

/* 

O(1) - Excellent/Best
O(log n) - Good
O(n) - Fair
O(n log n) - Bad
O(n^2), O(2^n) and O(n!) - Horrible/Worst


=> indexOf()
  1. JSON.parse() ||  JSON.stringify() || typeof || Grouping Operator () || 
  2. findIndex() || indexOf() || flatMap() 
  3. slice() || splice() || toString() || shift() || unshift() || includes() || isArray()
  4. Promises - Creating Promise, Chaining , Error Handling
  5. Event Loop, Callback Queue, Microtask Queue
  6. Undefined vs Not defined
  7. The Scope Chain, 🔥Scope & Lexical Environment
  8. Functions Types & Higher Order Function
  9. Closures
  10. Objects {}
  11. IIFE (Immediately Invoked Function Expression)
  12. Currying
  13. ['this'] keyword
  14. Prototype and Prototypal Inheritance  - Not required as of now

*/
//Tricky
const val = [1, 2, 3, 4, 5];
val[10] = 6;
console.log(val.length); //11
console.log(val); //[ 1, 2, 3, 4, 5, <5 empty items>, 6 ]
const arrays = [];
console.log(typeof arrays); //object

// <<<<<<<<<<<<<<<------------------------------------------------  1. [[ indexOf()  ]]]] ----------------------------------------------------->>>>>>>>>>>
/*   
     - The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.
*/

let languages = ['Java', 'JavaScript', 'Python', 'JavaScript'];

console.log(languages.indexOf('JavaScript'));

// Convert each element of the array to lowercase using map
let lowercaseLanguages = languages.map((language) => language.toLowerCase());

console.log(lowercaseLanguages.indexOf('javascript'));

//My way
let languagess = ['Java', 'JavaScript', 'Python', 'JavaScript'];

const result = languagess.map((ele) => {
    return ele.toLowerCase();
});
console.log(result.indexOf('javascript'));

// <<<<<<<<<<<<<<<------------------------------------------------  1. JSON.parse() || JSON.stringify() ]] ----------------------------------------------------->>>>>>>>>>>

// <<<<<<<<<<<<<<<------------------------------------------------- 2.  typeof || Grouping Operator () ]] ------------------------------------------------------>>>>>>>>>>>

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function that performs some asynchronous computation on a number
function doAsyncComputation(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * 2; // Some asynchronous computation
            resolve(result);
        }, 1000); // Simulating asynchronous operation with 1 second delay
    });
}

// An array of promises to perform the asynchronous computation on each number
const computationPromises = numbers.map((number) => doAsyncComputation(number));

// Using Promise.all to wait for all computations to complete
Promise.all(computationPromises)
    .then((results) => {
        console.log('Results:', results);
    })
    .catch((error) => {
        console.error('Error performing computation:', error);
    });
