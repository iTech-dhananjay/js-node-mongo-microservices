/*
1. FizzBuzz Implementation
2. Reverse WordsInPlace  -  Output: "yppaH !gnidoc"
3. Function to generate a list of prime numbers within a range
4. Merging Two Sorted Arrays
5. Find the longest common prefix string amongst an array of strings
5. Rotate Array
6. Given "hellohellohellohellohellohello", add space after every 5 elements.
7. Replace Comma with Space from given string
8. Duplicate List from Array
9. Reverse Words in a String

*/


//Tricky = Aamir

const a = [1, 2, 3, 4];
a.length = 2;

console.log(a); //[ 1, 2 ]

const promise = new Promise((reject) => {
    reject(2);
});

promise.then((result) => {
    console.log('resolved');
}).catch((err) => {
    console.log('rejected'); //resolved
});


// 1.FizzBuzz Implementation -----------------------------------------------------------------------------------------------$$$$$
function fizzBuzz(n) {
    const FIZZ = 3;
    const BUZZ = 5;

    if (n % FIZZ === 0 && n % BUZZ === 0) {
        console.log('FizzBuzz');
    } else if (n % FIZZ === 0) {
        console.log('Fizz');
    } else if (n % BUZZ === 0) {
        console.log('Buzz');
    } else {
        console.log(n);
    }
}

console.log(fizzBuzz(22));


// 2.Reverse WordsInPlace --------------------------------------------------------------------------------------------------$$$$$
function reverseWordsInPlace(str) {
    let words = str.split(' '); //  [ 'Happy', 'coding!]
    // let words = str.split('') // ['H', 'a', 'p', 'p', 'y', ' ', 'c', 'o', 'd', 'i', 'n', 'g', '! ']

    let reversedWords = [];

    for (let word of words) {
        let reversedWord = '';
        for (let i = word.length - 1; i > 0; i--) {
            reversedWord += word[i];
        }
        reversedWords.push(reversedWord); //yppaH ,!gnidoc (each word reversed)
    }


    return reversedWords.join(' '); //yppaH !gnidoc
}

const originalString = 'Happy coding!';
console.log(reverseWordsInPlace(originalString));


// 3.Function to generate a list of prime numbers within a range  ---------------------------------------------------------$$$$$
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function generatePrimesInRange(start, end) {
    const primes = [];

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

const primeList = generatePrimesInRange(2, 50);
const resultLength = primeList.length;
console.log(primeList, 'primeList Length :', resultLength);


// 4.Merging Two Sorted Arrays  -------------------------------------------------------------------------------------$$$$$
function mergeSortedArray(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from both arrays
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        //8 left - last value always left that's why we need to add remaining elements
        result.push(arr2[j]);
        j++;
    }

    return result;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(mergeSortedArray(arr1, arr2)); // Time complexity: O(n + m) | Best-case scenario: Similar-sized arrays with alternating elements


//5. Find the longest common prefix string amongst an array of strings --------------------------------------------------------$$$$$
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));


//6. Given "hellohellohellohellohellohello", add space after every 4 elements. --------------------------------------------------$$$$$

/*
  - Here's a step-by-step breakdown of the loop execution:
     -> Iteration 1: i = 0 - The loop starts at index 0. The substring 'hello' is extracted, and a space is added to the result.
     -> Iteration 2: i = 5 - The loop starts at index 5. The substring 'hello' is extracted (starting from the 5th character), and a space is added to the result.
     -> Iteration 3: i = 10 - The loop starts at index 10. The substring 'hello' is extracted (starting from the 10th character), and a space is added to the result.
 */

const str = 'hellohellohellohellohellohello';
let result = '';

// Loop through the string in steps of 5 characters
for (let i = 0; i < str.length; i += 5) {
    // Extract a substring of 5 characters using the slice method & concatenate a space after it
    result += str.slice(i, i + 5) + ' ';
}

console.log(result.trim()); //hello hello hello hello hello hello


//hannan.abdul007@gmail.com


// 7. Replace Comma with Space in string  --------------------------------------------------------------------------------------$$$$$
function replaceCommasWithSpaces(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            result += ' ';
        } else {
            result += input[i];
        }
    }
    return result;
}

let str = 'dsfg,fdg,fdgf,sadfg,sfdgd';
let replacedStr = replaceCommasWithSpaces(str);

console.log(replacedStr); //dsfg fdg fdgf sadfg sfdgd


// 8. Duplicate List from Array -----------------------------------------------------------------------------------------------$$$$$

const numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 7, 6, 6, 6, 6];

function findDuplicates(numbers) {
    // Create an object to store the frequency of each number
    const numFrequency = {};
    x;
    const duplicates = [];

    for (const num of numbers) {

        if (numFrequency[num]) {
            // If the number is encountered before, check its frequency
            if (numFrequency[num] === 1) {
                // If the frequency is 1, it's the first duplicate occurrence, so add to duplicates
                duplicates.push(num);
            }
            // Increase the frequency count for the number
            numFrequency[num]++;
        } else {
            // If the number is encountered for the first time, set its frequency to 1
            numFrequency[num] = 1;
        }
    }

    return duplicates;
}


console.log(findDuplicates(numbers));


// replaceThreeConsecutive
function replaceThreeConsecutive(inputString) {
    let result = '';
    let count = 1;

    for (let i = 0; i < inputString.length; i++) {
        if (i === inputString.length - 1 || inputString[i] !== inputString[i + 1]) {
            if (count !== 3) {
                result += inputString[i].repeat(count);
            }
            count = 1;
        } else {
            count++;
        }
    }

    return result;
}

const input = 'abbacccaabaa';
const output = replaceThreeConsecutive(input);
console.log(output); // Output: "abbbaabaa"

let a = '2343546576';


function sumNumbers(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {

        sum = sum + parseInt(a[i]);

    }
    return sum;
}

console.log(sumNumbers(a));

/*
The issue in your code is that you're still concatenating strings instead of adding numbers together. When you use the + operator with strings, it concatenates them, not performs arithmetic addition.

To fix this, you need to convert each character in the string a to a number before adding it to sum. You can do this using the parseInt() function.

In this corrected code, parseInt(a[i]) converts the character at index i to a number before adding it to sum. This way, you'll get the correct sum of the digits in the string "2343546576", which is 45.
 */
let a = 2343546571;
let sum = 0;

while (a > 0) {
    let digit = a % 10;
    sum += digit;
    a = Math.floor(a / 10);
}

console.log(sum); // Output: 45


// let str = "abcde"

// function sorting(str){

//     if(str[1]>str[0])
//     {
//         let temp = str[0];
//         str[0] = str[1];
//         str[1] = temp;
//     }
//     return str;
// }

// console.log(sorting(str));

let str = 'abcde';

function sorting(str) {
    // Convert the string into an array of characters
    let chars = str.split('');

    if (chars[1] > chars[0]) {
        let temp = chars[0];
        chars[0] = chars[1];
        chars[1] = temp;
    }

    // Convert the array back into a string
    return chars.join('');
}

console.log(sorting(str));


//Find odd missing number from array
//Array Rotation in Javascript
const arr = [1, 2, 3, 4, 5];
const k = 2;

function rotateArr(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k)); // arr.slice(k) - [ 3, 4, 5 ]   // arr.slice(0,k) [1,2]

}

console.log(rotateArr(arr, k));