//Find the triplet sum equal to 9 from an array with On^2 time complexity.

function findTriplets(arr) {
    const result = [];

    // Sort the array to make it easier to handle duplicates
    arr.sort((a, b) => a - b);

    const n = arr.length;

    // Fix the first element and find other two
    for (let i = 0; i < n - 2; i++) {
        // To find the other two elements, start two index variables from two corners of the array and move them toward each other
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === 9) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (sum < 9) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1];
const triplets = findTriplets(array);
console.log("Triplets with sum equal to 9:", triplets);
//----------------------------------------------------------------

// Function to calculate the sum of squares of digits of a number
function sumSquares(num) {
    let sum = 0;
    while (num !== 0) { // Continue until all digits are processed
        sum += (num % 10) ** 2; // Add the square of the last digit to the sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum; // Return the calculated sum
}

// Function to check if a number is a happy number
function isHappy(num) {
    const seen = new Set(); // Set to keep track of numbers encountered
    while (num !== 1 && !seen.has(num)) { // Continue until we find 1 (happy number) or a cycle is detected
        seen.add(num); // Add the current number to the set
        num = sumSquares(num); // Calculate the sum of squares of digits using the sumSquares function
    }
    return num === 1; // Return true if the number is 1 (happy number), false otherwise
}

// Test the isHappy function
console.log(isHappy(19)); // true

//---------------------------------------------- Nth Largest number
function nthLargestNumber(arr, n) {
    const sortedArray = arr.slice().sort((a, b) => b - a);
    return sortedArray[n - 1];
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5,8];
const n = 2;n
console.log(nthLargestNumber(numbers, n));

//---------------------------------------------- Nth Largest number - tEST
// function foo() {
//     var x = 10; // Variable x is declared and initialized to 10
//
//     if (true) {
//         var x = 20; // This redeclares x within the same function scope
//         console.log(x); // This prints the value of the inner x which is 20
//     }
//
//     console.log(x); // This prints the value of the outer x which is also 20 due to redeclaration
// }
//
// foo();
//
//
// function outer() {
//     var x = 10;
//
//     function inner() {
//         console.log(x);
//     }
//
//     return inner;
// }
//
// var innerFn = outer();
// innerFn();
// //JavaScript is a scripting language used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page. Features like: animated graphics. photo slideshows
//
// /*
//
// * Sure, let's break it down in more detail.
//
// In JavaScript, variables declared with `var` have function scope, not block scope. This means that regardless of where within a function a variable is declared with `var`, it is accessible throughout the entire function.
//
// In the provided code:
//
// ```javascript
// function foo() {
//   var x = 10; // Variable x is declared and initialized to 10
//
//   if (true) {
//     var x = 20; // This redeclares x within the same function scope
//     console.log(x); // This prints the value of the inner x which is 20
//   }
//
//   console.log(x); // This prints the value of the outer x which is also 20 due to redeclaration
// }
//
// foo();
// ```
//
// - Inside the `foo()` function, the variable `x` is declared and initialized to `10`.
// - Then, within the `if` block, another `x` is declared using `var` and initialized to `20`. This is a redeclaration of the same variable `x` within the same function scope.
// - When `console.log(x)` is called within the `if` block, it prints the value of the inner `x`, which is `20`.
// - After the `if` block, when `console.log(x)` is called again, it prints the value of the outer `x`, which has also been reassigned to `20` due to the redeclaration within the `if` block.
//
// So, both `console.log` statements within the `foo()` function print `20`.
//
// This behavior can be quite confusing, especially for those coming from languages with block-level scoping. However, it's important to understand this quirk of JavaScript's scoping rules when working with `var` declarations.
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// * */
//
// let countries = [
//     {
//         _id: 1,
//         name: "India",
//         states: []
//     },
//     {
//         _id: 2,
//         name: "United States"
//     }
// ]
//
// let states = [
//     {
//         _id: 101,
//         name: "Uttar Pradesh",
//         countryId: 1
//     },
//     {
//         _id: 102,
//         name: "Maharashtra",
//         countryId: 1
//     },
//     {
//         _id: 103,
//         name: "California",
//         countryId: 2
//     },
//     {
//         _id: 104,
//         name: "New York",
//         countryId: 2
//     }
// ]
//
// const arr = [
//     {
//         _id: 1,
//         name: "locationIndia",
//         dynamicOptions: [],
//     },
//     {
//         _id: 2,
//         name: "locationUS",
//         dynamicOptions: [],
//     },
// ]
//
//
// arr.forEach((item) => {
//     if (item.name === 'locationIndia') {
//         const filterCountries = countries.filter((c) => c.name === "India")
//         item.dynamicOptions.push(...filterCountries)
//     }
// });
//
//
// console.log(arr[0].dynamicOptions)
//
//
// //  `JSON.parse()` is used to parse the `jsonString` into a JavaScript object, which is then logged to the console.
//
// const jsonString = '{"name": "John", "age": 30}';
// const parsedData = JSON.parse(jsonString);
// console.log(parsedData); // { name: 'John', age: 30 }
//
//
/*
I had an issue where every time I opened a new project, it would attach as a new window instead of a tab, which was quite irritating. I resolved this by navigating to System Settings on my Mac, then selecting Desktop & Dock -> Windows -> and choosing 'Prefer tabs when opening documents' under the Windows setting.
* */
