// <<<<<<<<<<<<<<<-------------------------------------------------  [[ List of All Problems]] ------------------------------------------------------->>>>>>>>>>>
/* 
O(1) - Excellent/Best
O(log n) - Good
O(n) - Fair
O(n log n) - Bad
O(n^2), O(2^n) and O(n!) - Horrible/Worst


=>   Recursive function
  1. Check Prime Number
  2. Fibonacci series  up to n terms - Recursive
  3. Factorial of number 'n' & Recursive Approach
  4. Palindrome
  5. Sum Zero Problem
  6. String Anagram
  7. Count Unique Numbers
  8. Check Square Elements of Another Array
  9. Find the Maximum Occurring Character in String
  10. Largest Sum of Consecutive Digits 
  11. Longest Substring Without Repeating Characters [https://www.youtube.com/watch?v=hVPCWIOMxrk&list=PL_HlKez9XCSOi5thYDzipbJ2pEdzop7vx&index=20]
  12. Words that contains vowel
  13. Words count
  14. Find Max of array elements
  15. Move Array Elements with position index
*/


/*
  - Recursive function - Recursion is a process of calling itself. A function that calls itself is called a recursive function.
  - A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
  - Once the condition is met, the function stops calling itself. This is called a base condition.


 */


// <<<<<<<<<<<<<<<----------------------------------------------- => [[ Recursive Function  ]] --------------------------------------------------------->>>>>>>>>>>

console.log(Array.from('String').reverse().join('')) //gnirtS


function fact(s) {
    if (s === 0) {
        return 1;
    } else {
        const result = s * fact(s - 1);
        return result;
    }
}

console.log(fact(4));

//--------------------------
function sumUpTo(n) {
    if (n === 1) {
        return 1;
    } else {
        // Recursive case: sumUpTo(n) = n + sumUpTo(n - 1)
        return n + sumUpTo(n - 1);
    }
}

// Example usage:
const n = 5;
const result = sumUpTo(n);
console.log(`The sum of numbers up to ${n} is: ${result}`);

// <<<<<<<<<<<<<<<----------------------------------------------- 1. [[ Check Prime Number  ]] --------------------------------------------------------->>>>>>>>>>>
//Yes, 2 is a prime number[ According to the definition of prime numbers, any whole number which has only 2 factors is known as a prime number. Now, the factors of 2 are 1 and 2. Since there are exactly two factors of 2, it is a prime number]

function isPrime(n) {
    if (n < 2) {
        return `{n} is not a prime number`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is prime number`;
}

const value1 = isPrime(6);
console.log(value1);

// <<<<<<<<<<<<-------------------------------------------- 2. [[  Fibonacci series  up to n terms ]] --------------------------------------------------->>>>>>>>>>>

function fibonaciNumber(n) {
    let n1 = 0,
        n2 = 1,
        nextTerm;

    for (let i = 0; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

//fibonaciNumber(8) - we can directly call function without console.log to avoid 'undefined' at the end
let values = fibonaciNumber(12);
console.log(values); //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 - Time Complexity - O(n)

// Recursive Approach
function fibonacci(n) {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(12));

// <<<<<<<<<<<<-------------------------------------------- 3. [[  Factorial of number Approach One ]] --------------------------------------------------->>>>>>>>>>>
function factorial(n) {
    let fact = 1;
    if (n == 0 || n == 1) {
        return fact;
    } else {
        for (var i = n; i >= 1; i--) {
            fact = fact * i;
        }
        return fact;
    }
}

let n = 4;
facts = factorial(n);
console.log('The factorial of ' + n + ' is ' + facts);

function isFactorial(n) {
    let fact = 1;
    if (n == 0 || n == 1) {
        return fact;
    }
    for (let i = n; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log(isFactorial(0));

// <<<<<<<<<<<<<<<---------------------------------------------------- 4. [[  Palindrome ]] --------------------------------------------------------------->>>>>>>>>>>

const str = 'madam';

function checkPalindrome(str) {
    let newStr = str.toLowerCase();
    let left = 0;
    let right = newStr.length - 1;
    while (left < right) {
        if (newStr[left] !== newStr[right])
            return `${newStr} is not a palindrome`;

        left++;
        right--;
    }
    return `${newStr} is a palindrome`;
}

console.log(checkPalindrome(str));

//2nd-approach
const checkPalindrome = (str) => {
    // Loop through the first half of the string
    for (let i = 0; i < str.length / 2; i++) {
        // Compare characters from the beginning and end of the string
        if (str[i] !== str[str.length - 1 - i]) {
            // If characters don't match, return early
            return `Not ${str} Palindrome`;
        }
    }
    // If the loop completes without returning, the string is a palindrome
    return `Given ${str} is palindrome`;
}

const str = "madam";
console.log(checkPalindrome(str));


// <<<<<<<<<<<<<<<---------------------------------------------------- 5. [[  Sum Zero Problem  ]] ----------------------------------------------------------->>>>>>>>>>>
/* 
   Traverse : To visit each and every element of array
   [-4, 4] - o/p
   O(n^2)  Quadratic time complexity

*/
let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkSumPairZero(arr) {
    for (number of arr) {
        for (let j = 1; j < arr.length; j++) {
            if (number + arr[j] === 0) return [number, arr[j]];
        }
    }
}

console.log(checkSumPairZero(arr)); // [ -4, 4 ]

// <<<<<<<<<<<<<<<------------------------------------------------------- 6. [[  String Anagram ]]
const str1 = "silentkk";
const str2 = "listen";

function validString(str1, str2) {
    let count = 0;
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                count++;
                break;
            }
        }
    }
    if (count === str1.length) {
        return `Given str is valid`;
    } else {
        return `Given str is not valid`;
    }
}
console.log(validString(str1, str2));


// --------------------------------------------------------------->>>>>>>>>>>
let string = 'hello world';

function getCountCharacters(string) {
    const histogram = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!histogram[char]) {
            histogram[char] = 0;
        }
        histogram[char]++;
    }
    return histogram;
}

console.log(getCountCharacters(string)); //{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

let strk = 'Hello world';

function anagram(str) {
    let histogram = {};

    for (let i = 0; i < strk.length; i++) {
        let char = strk[i];

        if (histogram[char]) {
            histogram[char]++;
        } else {
            histogram[char] = 1;
        }
    }
    return histogram;
}

console.log(anagram(strk)); //{ H: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// <<<<<<<<<<<<<<<--------------------------------------------------- 7. [[ Count Unique Numbers ]] ------------------------------------------------------------>>>>>>>>>>>
/* 
  - Unique Count - 8
                    i  j
  - Conditions -   [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];
               -    i = 0; j = 1;
               -    if [ i , j ] value match together [i > 1, j > 1] then loop will be running and also j value will increment now j -> 2
               -    Again [i > 1, j > 2] - here it's not same so it will go in the condition and increment the value of i and put j value in i 
                    [1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8] - basically replaced 1,1, -> 1,2
               -     https://www.youtube.com/watch?v=rs75oZD8lW4&list=PL_HlKez9XCSOi5thYDzipbJ2pEdzop7vx&index=4 - logic

*/

let arrOne = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];

function countUniqueNumbers(arrOne) {
    if (arrOne.length > 0) {
        let i = 0;
        for (let j = 1; j < arrOne.length; j++) {
            if (arrOne[i] !== arrOne[j]) {
                i++;
                arrOne[i] = arrOne[j];
            }
        }
        return i + 1;
    } else {
        throw new Error('Array is empty');
    }
}

const result = countUniqueNumbers(arrOne);
console.log(result); //8

// <<<<<<<<<<<<--------------------------------------------- 8. [[ Check Square Elements of Another Array ]] ------------------------------------------------->>>>>>>>>>>

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 9, 4, 16];

function isSquareCheck(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let isSquare = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] === arr2[j]) {
                isSquare = true;
            }
            if (j === arr2.length - 1) {
                if (!isSquare) {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(isSquareCheck(arr1, arr2)); // true

// <<<<<<<<<<<<------------------------------------------ 9. [[ Find the Maximum Occurring Character in String]] -------------------------------------------->>>>>>>>>>>
const strOne = 'Hello worldddd'; // d

function findMaximumOccurrenceString(strOne) {
    let histogram = {};
    strOne.split('').forEach((element) => {
        histogram[element] = histogram[element] ? histogram[element] + 1 : 1;
    });

    let max = 1;
    let char = strOne[0]; // by default we store the first character of string

    for (let k in histogram) {
        if (histogram[k] > max) {
            max = histogram[k];
            char = k;
        }
    }
    return char;
}

const resultOne = findMaximumOccurrenceString(strOne);
console.log(resultOne); //d

// <<<<<<<<<<<<-------------------------------------------- 10. [[   Largest Sum of Consecutive Digits ]] ------------------------------------------------->>>>>>>>>>>

// <<<<<<<<<<<<----------------------------------------------- 12. [[   Words that contains vowel  ]] ----------------------------------------------------->>>>>>>>>>>
let s = 'welcome';

for (let i = 0; i <= s.length - 1; i++) {
    let c = s[i]; // or s.charAt(i)
    if (
        c == 'a' ||
        c == 'e' ||
        c == 'i' ||
        c == 'o' ||
        c == 'u' ||
        c == 'A' ||
        c == 'E' ||
        c == 'I' ||
        c == 'O' ||
        c == 'U'
    ) {
        console.log(c); // e o e
    }
}

const ss = 'welcome';

for (let i = 0; i < ss.length; i++) {
    let c = ss[i].toLowerCase();
    if ('aeiou'.includes(c)) {
        console.log(c);
    }
}

// <<<<<<<<<<<<----------------------------------------------------- 13. [[   Words count  ]] -------------------------------------------------------------->>>>>>>>>>>
function wordCount(w) {
    let count = 0;
    let words = w.split(' '); //console.log(words) [ 'this', 'is', 'the', 'place' ]
    for (i = 0; i < words.length; i++) {
        if (words[i] != '') {
            count += 1;
        }
    }
    return count;
}

console.log(wordCount('This is a list of words')); //6


const words = "There is word count ";

const wordCount = (words) => {
    let count = 0;
    const wordArray = words.split(' ');

    for (let word of wordArray) {
        if (word) {
            count++;
        }
    }

    return count;
};

console.log(wordCount(words));


// <<<<<<<<<<<<----------------------------------------------------- 14. [[   Find Max of array  ]] -------------------------------------------------------------->>>>>>>>>>>
let arrk = [2, 4, 5, 7, 8];

function findMax(arrk) {
    let max = 0;
    for (let i = 0; i < arrk.length; i++) {
        if (arrk[i] > max) {
            max = arrk[i];
        }
    }
    return max;
}

console.log(findMax(arrk));


// <<<<<<<<<<<<----------------------------------------------------- 14. [[ Move Array Position  ]] -------------------------------------------------------------->>>>>>>>>>>
function moveArrayElements(arr, positions) {
    const movedArray = [];
    const length = arr.length;

    // Iterate through the array starting from the specified positions
    for (let i = positions; i < length; i++) {
        movedArray.push(arr[i]);
    }
    // Iterate through the array from the beginning up to the specified positions
    for (let i = 0; i < positions; i++) {
        movedArray.push(arr[i]);
    }

    return movedArray;
}

const inputArray = [2, 6, 3, 9, 7, 5];
const positionsToMove = 2;

const movedArray = moveArrayElements(inputArray, positionsToMove);
console.log(movedArray);