// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All concepts]] ------------------------------------------------>>>>>>>>>>>
/* 

  1. Increment (++)
  2. Temporal Dead Zone
  3. Call back Hell , Inversion of Control - Call Back
  4. Promises - Creating Promise, Chaining , Error Handling


*/

// <<<<--------------------------------------------  [[  JavaScript Type and Coercion Examples ]] -------------------------------------------->>>>
var num = 42, str = "5" + 5; console.log((str)); // Output: "55"
console.log(typeof(4-'4'));           // Output: number
console.log(4 + undefined);           // Output: NaN
//console.log({}==={});               // Output: false
console.log(NaN === NaN);             // Output: false
console.log(typeof NaN);              // Output: number
console.log(null===null);             // Output: true
console.log(typeof null);             // Output: object
//console.log({}==={});               // Output: false
//console.log([]===[]);               // Output: false

// Additional unique questions
console.log(0.1 + 0.2 === 0.3);       // Output: false
console.log(9999999999999999);        // Output: 10000000000000000 (Precision issue) [  17-digit ] 
console.log(1 + '2' + '2');           // Output: 122 (String concatenation)
console.log('A' - 'B' + '2');         // Output: NaN2 (Subtraction of non-numeric strings)
console.log('A' - 'B' + 2);           // Output: NaN (Subtraction of non-numeric strings)
console.log([] + null + 1);           // Output: null1 (Array concatenation)
console.log([] + 1 + 2);              // Output: 12 (Array concatenation)
console.log(undefined + null);        // Output: NaN (Addition of undefined and null)
