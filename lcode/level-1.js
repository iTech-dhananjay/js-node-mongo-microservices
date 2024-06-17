// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problems]] ---------------------------------------------------->>>>>>>>>>>
/* https://www.youtube.com/watch?v=M04IJUf_jEQ&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr - RemoteState


 :: [[ Easy ]]
  1.   Two Sum 
  2.   Add Two Numbers
  9.   Palindrome Number
  13.  Roman to Integer
  14.  Longest Common Prefix
  20.  Valid Parentheses
  21.  Merge Two Sorted Lists
  189. Rotate Array
  26.  Remove Duplicates from Sorted Array
  58.  Length of Last Word
  27.  Remove Element
  88.  Merge Sorted Array
  66.  Plus One
  169. Majority Element
  28. [[ Find the Index of the First Occurrence in a String ]]
  70.  Climbing Stairs [NOT DONE]]
  387. First Unique Character in a String
  383. Ransom Note Problem
  35. Search Insert Position [Re-visit the code]
  67. Add Binary
  83. Remove Duplicates from Sorted List
  27. Remove Element


  :: [[ Medium ]]
  33. Search in Rotated Sorted Array
  151. Reverse Words in a String
  442. Find All Duplicates in an Array



[[Tricky]]
 */

var a = {}, b = {key: 'b'}, c = {key: 'c'}
a[b] = 123
a[c] = 456
console.log(a[b]) //456

/*
* console.log(b.toString()); //[object Object]
* Explanation :
*            -  When you use an object (b in this case) as a key in another object (a), JavaScript implicitly converts the object to a string.
             -  The default toString method of objects returns "[object Object]". Therefore, the assignment is essentially a['[object Object]'] = 123;.
             -  a[b] = 123 || a['[object Object]'] = 123  both are equal
* */

console.log([1, 2, 3] + [4, 5, 6])  //1,2,34,5,6
console.log([3-2-1]-[4-1-2])
//Find Second Largest Element
const secondLargestArr = (arr) => {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;  // Update the second largest before updating the largest
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];  // Update the second largest if the current element is between the largest and second largest
        }
        // Note: No action is taken if arr[i] is not greater than largest or between the largest and second largest
    }

    return secondLargest;
}

const arr = [3, 8, 2, 5, 10];
console.log(secondLargestArr(arr));


const arr = ['abcd', 'abc', 'abcdef', 'abcd']
const shortestStr = (arr) => {
    return arr.reduce((shortest, current) => {
        return current.length > shortest.length ? shortest : current

    }, arr[0])
}
console.log(shortestStr(arr)) //abc
/*
Explanation for each iteration:

    1. **Iteration 1:** `arr[1]` (8) is greater than `largest` (3), so `largest` becomes 8, and `secondLargest` becomes 3.

2. **Iteration 2:** `arr[2]` (2) is not greater than `largest` (8) and not between `largest` and `secondLargest`, so no update.

3. **Iteration 3:** `arr[3]` (5) is not greater than `largest` (8) and is between `largest` and `secondLargest` (3), so `secondLargest` becomes 5.

4. **Iteration 4:** `arr[4]` (10) is greater than `largest` (8), so `largest` becomes 10, and `secondLargest` becomes 8.

5. **Loop completes:** The function returns `secondLargest` which is now 8.

So, in the example array `[3, 8, 2, 5, 10]`, the second largest element is 8.*/


const arrObj = [
    {name: 'abc', slug: 'abc'},
    {name: 'pqr', slug: 'xyz'},
    {name: 'abc', slug: 'abc'},
    {name: 'abc', slug: 'xyz'}
];

function isUniqueSlug(value, index, self) {
    return self.findIndex(obj => obj.slug === value.slug) === index;
}

const uniqueArrObj = arrObj.filter(isUniqueSlug);

console.log(uniqueArrObj); //[ { name: 'abc', slug: 'abc' }, { name: 'pqr', slug: 'xyz' } ]
// <<<<<<<<<<<<<<<------------------------------------------------- 1. [[   Two Sum  ]] -------------------------------------------------------------->>>>>>>>>>>

/*         [https://www.youtube.com/watch?v=mq6ZQv_apmc&list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma&index=60]
 [[Q]] ->  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
              Input: nums = [2,7,11,15], target = 9
              Output: [0,1]
              Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              Time Complexity :  O(n)
              Space Complexity : O(n)
              
 */

/*

      2  : 0
      7  : 1
      11 : 2
      15 : 3
      -creating  a hash and the values of each of the nums [2,7,11,15] is gonna be the set to the respective keys

      - Here we  create a hash [ const hash = {} ]
      - set the hash and map it to values (indices)
      - Here we get the values :  let value = nums[i];
      - Here we set the value to the index :  hash[value] = i;
 */

var twoSum = function (nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        hash[value] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let potentialValue = target - nums[i];
        if (hash[potentialValue] && hash[potentialValue] !== i) {
            return [i, hash[potentialValue]];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

// <<<<<<<<<<<<<<<--------------------------------------------  [[   Two Sum : Way - 2  ]] --------------------------------------------------------->>>>>>>>>>>

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}; // TC : O(n)^2

// <<<<<<<<<<<<------------------------------------------------- 2. [[   Add Two Numbers  ]] -------------------------------------------------------->>>>>>>>>>>

/*
   function ListNode(val, next) {
     this.val = val === undefined ? 0 : val;
     this.next = next === undefined ? null : next;
}

 */

var addTwoNumbers = function (l1, l2) {
};

// <<<<<<<<<<<<---------------------------------------------------- 13. [[ Roman to Integer ]] ------------------------------------------------------>>>>>>>>>>>

/*  - [https://www.youtube.com/watch?v=3QH-rpcoAoI]
    - Roman numerals are represented by seven different symbols: I -1, V-5, X-10, L-50, C-100, D-500 and M-1000.
      Input: s = "III"
      Output: 3
      Explanation: III = 3.
      Input: s = "LVIII"
      Output: 58
  
 */

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
    let result = 0;
    let hash = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
        let curr = hash[s[i]];  // Current Roman numeral value
        let next = hash[s[i + 1]];  // Next Roman numeral value

        if (curr < next) {
            // If current value is less than the next value (e.g., IV), subtract current from next
            result += next - curr;
            i++;  // Skip the next numeral, as it has already been considered
        } else {
            // If current value is greater than or equal to the next value, simply add the current value
            result += curr;
        }
    }

    return result;
}

console.log(romanToInt('IV')); // Output: 4

// <<<<<<<<<<<<------------------------------------------------- 13. [[ Longest Common Prefix  ]] ------------------------------------------------------->>>>>>>>>>>

/*  - [https://www.youtube.com/watch?v=0SF6RLMYBcE]
    - Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

       Input: strs = ["flower","flow","flight"]
       Output: "fl"  
   

     - strs[0][0] - here strs[0] as 1 will return 'flower' in loop and strs[0] as 2 will return each element of flower 'f'
            1  2
     - Comparing each charachter of element of array : 'f' in all 3 element then 'l' in all 3 element and so on.
       
  
 */

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

// <<<<<<<<<<<<<<<----------------------------------------------- 20. [[ Valid Parentheses ]] ---------------------------------------------------------->>>>>>>>>>>

/* 
  - Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
     Input: s = "()[]{}"
     Output: true

     Input: s = "(]"
     Output: false

     - if  '(', '{', '[' open bracket then we push into stack
     - if it's is closed bracket pop the element from the stack and compare it

*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let top = stack[stack.length - 1];

        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else if (
            (s[i] == ')' && top == '(') ||
            (s[i] == '}' && top == '{') ||
            (s[i] == ']' && top == '[')
        ) {
            stack.pop();
        } else return false;
    }
    return stack.length === 0;
};

console.log(isValid('()[]{}'));

// <<<<<<<<<<<<<<<--------------------------------------------- 21. [[  Merge Two Sorted Lists ]] ---------------------------------------------------->>>>>>>>>>>
/**  [[https://www.youtube.com/watch?v=W0Mwqk-uPsk&t=237s]]
 *   Definition for singly-linked list.
 *   function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 *   }
 */

/*
    -  dummyHead :   create new linked list 
    -  currentNode : it will itterate through the list
    -  will take node or value of first list l1 and list l2 and compare it , smaller will be pushed into new list
 
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead; // it will itterate through this list

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    if (l1 !== null) {
        currentNode.next = l1;
    }
    if (l2 !== null) {
        currentNode.next = l2;
    }
    return dummyHead.next;
};

// <<<<<<<<<<<<<<<----------------------------------------------- 189. [[  Rotate Array    ]] ----------------------------------------------------->>>>>>>>>>>
/*   
    - Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
    - Input: nums = [1,2,3,4,5,6,7], k = 3
        Output: [5,6,7,1,2,3,4]
          Explanation:
            rotate 1 steps to the right: [7,1,2,3,4,5,6]
            rotate 2 steps to the right: [6,7,1,2,3,4,5]
            rotate 3 steps to the right: [5,6,7,1,2,3,4]
    - k = k % nums.length :-  If 'k' is larger than length of nums - this works when in array there will be two or one elements"

let reverseNums = (nums, start, end) => {
     while (start < end) {
          let temp = nums[start];
          nums[start] = nums[end];
          nums[end] = temp;

          start++;
          end--;
     }
};

var rotate = function (nums, k) {
     k = k % nums.length;
     reverseNums(nums, 0, nums.length - 1);
     reverseNums(nums, 0, k - 1);
     reverseNums(nums, k, nums.length - 1);
};
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let reverseNums = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

var rotate = function (nums, k) {
    k = k % nums.length;
    reverseNums(nums, 0, nums.length - 1);  // Reverse the entire array
    reverseNums(nums, 0, k - 1); // Reverse the subarray from the beginning to index k-1
    reverseNums(nums, k, nums.length - 1); // Reverse the subarray from index k to the end

    return nums; // Return the rotated array
};

// <<<<<<<<<<<--------------------------------------- 189. [[ Remove Duplicates from Sorted Array   ]] -------------------------------------------->>>>>>>>>>>

// splice will not modify arr and remove element form specific position  nums.splice(i, 1); i -> position and 1 -> one element should be deleted
function removeDuplicates(nums) {
    // Check if the array is empty or has only one element
    if (nums.length <= 1) {
        return nums.length;
    }

    // Use two pointers approach
    let uniqueIndex = 0;

    // Iterate through the array starting from the second element
    for (let i = 1; i <= nums.length; i++) {
        // If the current element is different from the previous unique element
        if (nums[i] !== nums[uniqueIndex]) {
            // Move the unique index forward
            uniqueIndex++;

            // Update the unique element at the new index
            nums[uniqueIndex] = nums[i];
        }
    }
    // Remove the remaining elements at the end of the array
    nums.splice(uniqueIndex)
    return nums
}

let sortedArray = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(removeDuplicates(sortedArray))


//2-way
function removeDuplicates(nums) {
    // Use the filter method to keep only elements that are different from their previous element
    nums = nums.filter((value, index) => value !== nums[index - 1]);

    return nums.length;
}

// Example usage:
let sortedArray = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6];
let newLength = removeDuplicates(sortedArray);

console.log(sortedArray.slice(0, newLength)); // Output: [1, 2, 3, 4, 5, 6]
/*



*/

// <<<<<<<<<<<<<<<---------------------------------------------- 58. [[Length of Last Word ]] -------------------------------------------------------->>>>>>>>>>>
/*

    - convert string into array - with split method we can covert string to array 
    - trim will remove white spaces from left or right of the string
*/

/**
 * Example 1:
 Input: s = "Hello World"                          => Output: 5     => Explanation: The last word is "World" with length 5.

 * Example 2:
 * Input: s = "   fly me   to   the moon  "        => Output: 4     => Explanation: The last word is "moon" with length 4.

 * Example 3:
 * Input: s = "luffy is still joyboy"              => Output: 6     => Explanation: The last word is "joyboy" with length 6.
 */
var lengthOfLastWord = function (s) {
    if (s.length === 0) return 0;
    let arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};

// <<<<<<<<<<<<<<<---------------------------------------------- 27. [[  Remove Element  ]] -------------------------------------------------------->>>>>>>>>>>
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1); // splice will remove elements form specific position of an original array
        }
    }
};

// <<<<<<<<<<<<---------------------------------------------------- 88. [[   Merge Sorted Array ]] ------------------------------------------------>>>>>>>>>>>
/*   
     -  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing
        the number of elements in nums1 and nums2 respectively. 
     -  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
        Output: [1,2,2,3,5,6]
*/

var merge = function (nums1, m, nums2, n) {
};

/* 


 [[ Level - >> Medium  ]]


*/

// <<<<<<<<<<<------------------------------------------ 33. [[  Search in Rotated Sorted Array ]] ------------------------------------------------>>>>>>>>>>>
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4


*/

var search = function (nums, target) {
};

// <<<<<<<<<<<------------------------------------------ 151.  [[   Reverse Words in a String ]] --------------------------------------------------->>>>>>>>>>>
var reverseWordss = function (s) {
    const string = s.split(' ');
    let revStr = '';

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] == '') continue;
        if (revStr.length > 0) revStr = revStr + ' ';
        revStr = revStr + string[i];
    }

    return revStr;
};
console.log(
    reverseWordss(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    )
);

// <<<<<<<<<<<------------------------------------------ 442.  [[  Find All Duplicates in an Array ]] ------------------------------------------------>>>>>>>>>>>

/* [[ https://www.youtube.com/watch?v=PGjb8X4g7V8 ]]
   - Input: nums = [4,3,2,7,8,2,3,1]
     Output: [2,3]
   - Input: nums = [1,1,2]
     Output: [1]

   -  let index = Math.abs(nums[i]) - 1 : we are looping to [1,length of array]
   -  if value is less than 0 we put this into result array 
   -  if value is grater than 0 when assign it as negative value : logically means it is visited before 
 

 */

var findDuplicates = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        let value = nums[index];

        if (value < 0) {
            result.push(Math.abs(nums[i]));
        } else {
            nums[index] = -nums[index];
        }
    }
    return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

const findDuplicates = (nums) => {
    let duplicates = [];
    let uniqueSet = new Set();

    for (let num of nums) {
        if (uniqueSet.has(num)) {
            duplicates.push(num);
        } else {
            uniqueSet.add(num);
        }
    }

    return duplicates;
}

console.log(findDuplicates(nums));

// <<<<<<<<<<<<<<<------------------------------------------------- 66. [[  Plus One ]] -------------------------------------------------------------->>>>>>>>>>>
/* [[ https://www.youtube.com/watch?v=P3K_hKNU2ME ]]
   - Input: digits = [1,2,3]
      Output: [1,2,4]
      Explanation: The array represents the integer 123.
                   Incrementing by one gives 123 + 1 = 124.
                   Thus, the result should be [1,2,4].

   - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
     Eg :  const array1 = [1, 2, 3]; console.log(array1.unshift(4, 5)); [4, 5, 1, 2, 3]
   - Here it will add 1 at the beginning of the array if digits is 99 -> with for loop 00 we achieve and 1 from unshift()


   => The unshift method in JavaScript returns the new length of the array after the element has been added. So, if you want to directly return the result of digits.unshift(1),
   you would be returning the new length of the array, not the modified array itself.
  [ not return digits.unshift() it will return length of array as 3 , so we need to first unshift and then return]
   => If you want to return the modified array with the new digit added at the beginning, you should use unshift separately and then return the digits array.


*/

//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5)); // Expected output: 5
console.log(array1);  // Expected output: Array [4, 5, 1, 2, 3]

//Correct approach
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
};

// <<<<<<<<<<<<<<<------------------------------------------------- 412. [[  Fizz Buzz ]] ------------------------------------------------------------->>>>>>>>>>>

function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

// <<<<<<<<<<<<<<<------------------------------------------------- VVI. [[  Fizz Buzz ]] ------------------------------------------------------------->>>>>>>>>>>
const arr = [
    {name: 'Krishna', score: 34},
    {name: 'Aditi', score: 27},
    {name: 'Aditya', score: 27},
    {name: 'Chaman', score: 32},
    {name: 'Dhananjay', score: 32},
];

// Bubble sort implementation
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        // Compare scores
        if (arr[j].score < arr[j + 1].score) {
            // Swap objects
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        } else if (arr[j].score === arr[j + 1].score) {
            // If scores are equal, compare names alphabetically
            if (arr[j].name > arr[j + 1].name) {
                // Swap objects
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const arr = [
    {name: 'Krishna', score: 34},
    {name: 'Aditi', score: 27},
    {name: 'Aditya', score: 27},
    {name: 'Chaman', score: 32},
    {name: 'Dhananjay', score: 32},
];

function sortArray(arr) {
    arr.sort((a, b) => {
        // Compare scores
        if (a.score !== b.score) {
            return b.score - a.score; // Sort in descending order based on score
        }
        // If scores are equal, compare names alphabetically
        return b.name.localeCompare(a.name);
    });
}

sortArray(arr);
console.log(arr);



// Loop through ASCII values for uppercase letters (A-Z)----------------------------------------------------------
for (let i = 65; i <= 90; i++) {
    // Convert ASCII value to corresponding character and print
    console.log(String.fromCharCode(i));
}


const arr = [1, 2, 3, 2, 3, 4, 2, 6, 2, 3, 5, 2, 7];


//169. Majority Element


// <<<<<<<<<<<<<<<------------------------------------------------- 169. [[ Majority Element ]] -------------------------------------------------------------->>>>>>>>>>>
/*

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

const arr = [2, 2, 1, 1, 1, 2, 2]

const majorityElement = (arr) => {
    let maxCount = 0;
    let maxElement = null;
    let hash = {};
    let mid = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (hash[element]) {
            hash[element]++;
        } else {
            hash[element] = 1;
        }

        if (hash[element] > maxCount) {
            maxCount = hash[element];
            maxElement = element;
        }
    }

    if (maxCount > mid) {
        return maxElement;
    }

    return -1;
};

console.log(majorityElement(arr));


// <<<<<<<<<----------------------------- 28. [[ Find the Index of the First Occurrence in a String ]] ------------------------------------------>>>>>>>>>>>

/*
  - Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  - Input: haystack = "sadbutsad", needle = "sad"   / Output: 0 , Explanation: "sad" occurs at index 0 and 6.
  - Input: haystack = "lcode", needle = "leeto"



  1. **Iteration 1 (i = 0):**
- Outer Loop: `i=0`
- Inner Loop: `j=0`, `haystack[0] (s) !== needle[0] (s)` (no mismatch)
- Inner Loop: `j=1`, `haystack[1] (a) !== needle[1] (a)` (no mismatch)
- Inner Loop: `j=2`, `haystack[2] (d) !== needle[2] (d)` (no mismatch)
- Match found! Returning index: `0`

2. **Iteration 2 (i = 1):**
- Outer Loop: `i=1`
- Inner Loop: `j=0`, `haystack[1] (a) !== needle[0] (s)` (mismatch, breaks out of the inner loop)

3. **Iteration 3 (i = 2):**
- Outer Loop: `i=2`
- Inner Loop: `j=0`, `haystack[2] (d) !== needle[0] (s)` (mismatch, breaks out of the inner loop)

The function returns `0` in the first iteration because it finds a match at index 0, the starting position of "sad" in the `haystack`.
If there is no match, it continues iterating until a match is found or all possibilities are exhausted.

*/
const hayNeed = (haystack, needle) => {
    if (needle === "") {
        return 0;
    }

    for (let i = 0; i <= haystack.length - 1; i++) {
        let match = true;
        for (let j = 0; j <= needle.length - 1; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }
    return -1;
}

console.log(hayNeed("adbutsad", "akar"));
console.log(hayNeed("sadbutsad", "sad"));
console.log(hayNeed("lcode", "leeto"));

// Use indexOf
let haystack = "sadbutsad"
let needle = "but"

function hayNeed(haystack, needle) {
    return haystack.indexOf(needle)
}

console.log(hayNeed(haystack, needle)) //3


// <<<<<<<<<----------------------------------------- 28. [[ Climbing Stairs ]] ------------------------------------------------------>>>>>>>>>>>

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n) {
    // Storage array for caching previously calculated results
    let cache = [];

    // Recursive function with caching
    function calculateWaysToClimb(n, cache) {
        // Base case: If there are 1 or 2 steps, there are n ways to climb.
        if (n <= 2) {
            return n;
        }

        // Check if the result is already cached
        if (cache[n]) {
            return cache[n];
        }

        // Calculate the number of ways for each step and cache the result
        cache[n] = calculateWaysToClimb(n - 1, cache) + calculateWaysToClimb(n - 2, cache);
        return cache[n];
    }

    return calculateWaysToClimb(n, cache);
}

// Example usage:
let steps1 = 2;
console.log(climbStairs(steps1)); // Output: 2

let steps2 = 3;
console.log(climbStairs(steps2)); // Output: 3

// <<<<<<<<<<-------------------------------------------------- 387. [[ First Unique Character in a String ]] --------------------------------------------------->>>>>>>>>>>

/*
* -- Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*
*
* */
function firstUniqChar(s) {
    const charFrequency = {};

    // Count the frequency of each character
    for (const char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Find the first character with a frequency of 1
    for (let i = 0; i < s.length; i++) {
        if (charFrequency[s[i]] === 1) {
            return i;
        }
    }

    // If no unique character is found, return -1
    return -1;
}

// Test cases
console.log("Example 1:", firstUniqChar("lcode"));        // Output: 0
console.log("Example 2:", firstUniqChar("loveleetcode"));    // Output: 2
console.log("Example 3:", firstUniqChar("aabb"));            // Output: -1


// <<<<<<<<<<-------------------------------------------------- 383. [[ Ransom Note ]] --------------------------------------------------->>>>>>>>>>>

/*
*   - Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
*    Example 1:
     Input: ransomNote = "a", magazine = "b"    // Output: false
     Example 2:
     Input: ransomNote = "aa", magazine = "ab"  // Output: false
     Example 3:
     Input: ransomNote = "aa", magazine = "aab" // Output: true
     *
     * { a: 2, b: 1 } magazineFreq
        Before decrement: a - 2
        After decrement: a - 1
        Before decrement: a - 1
        After decrement: a - 0
        true
* */

let ransomNote = 'a', magazine = 'b'
const canConstruct = (ransomNote, magazine) => {
    const magazineFreq = {}
    for (let char of magazine) {
        magazineFreq[char] = (magazineFreq[char] || 0) + 1
    }

    for (let char of ransomNote) {
        // If the character is not in the magazine or its frequency is 0, return false
        if (!magazineFreq[char]) {
            return false
        }

        // Decrease the frequency of the character in the magazineFreq
        magazineFreq[char]--
    }
    return true
}

console.log(canConstruct(ransomNote, magazine))

// <<<<<<<<<<------------------------------------------------ 9. [[ Palindrome Number ]] --------------------------------------------------->>>>>>>>>>>
/*
*   - Given an integer x, return true if x is palindrome, and false otherwise.
    Example 1:
     Input: x = 121  // Output: true
     //Explanation: 121 reads as 121 from left to right and from right to left.
    Example 2:
     Input: x = -121  // Output: false
     Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    Example 3:
     Input: x = 10    // Output: false
     Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
* */

function isPalindrome(x) {
    // Convert the integer to a string
    const str = x.toString();

    // Use two pointers approach to compare characters
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test cases
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(-121));   // Output: false
console.log(isPalindrome(10));     // Output: false


// <<<<<<<<<<------------------------------------------------ 35. [[ Search Insert Position ]] --------------------------------------------------->>>>>>>>>>>

/*
*
* =>   Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
       You must write an algorithm with O(log n) runtime complexity.
       Example 1:  Input: nums = [1,3,5,6], target = 5             // Output: 2
       Example 2:  Input: nums = [1,3,5,6], target = 2             // Output: 1
       Example 3:  Input: nums = [1,3,5,6], target = 7             // Output: 4

* */

function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}

// Example usage:
const nums1 = [1, 3, 5, 6];
const target1 = 5;

const nums2 = [1, 3, 5, 6];
const target2 = 2;

const nums3 = [1, 3, 5, 6];
const target3 = 7;

console.log(searchInsert(nums1, target1));  // Output: 2
console.log(searchInsert(nums2, target2));  // Output: 1
console.log(searchInsert(nums3, target3));  // Output: 4

// <<<<<<<<<<------------------------------------------------ 67. [[ Add Binary]] --------------------------------------------------->>>>>>>>>>>

/*
    * let num =10 ======>> console.log(num.toString(2)) 1010
*   =>  Given two binary strings a and b, return their sum as a binary string.
        Example 1:
        Input: a = "11", b = "1"          // Output: "100"
        Explanation : a is "11" in binary, which represents the decimal number 3,b is "1" in binary, which represents the decimal number 1. add (3+1) 4 have binary 100
        Example 2:
        Input: a = "1010", b = "1011"    // Output: "10101"

* */
function addBinary(a, b) {
    // Convert binary strings to decimal
    const num1 = BigInt('0b' + a);
    const num2 = BigInt('0b' + b);


    // Add the decimal numbers
    const sum = num1 + num2;

    // Convert the sum back to binary
    const binarySum = sum.toString(2);

    return binarySum;
}

// Example usage:
const result1 = addBinary("11", "1");
console.log(result1); // Output: "100"

const result2 = addBinary("1010", "1011");
console.log(result2); // Output: "10101"

// function addBinary(a, b) {
//     let result = '';
//     let carry = 0;
//
//     // Make both strings the same length by padding zeros
//     const maxLength = Math.max(a.length, b.length);
//     a = a.padStart(maxLength, '0');
//     b = b.padStart(maxLength, '0');
//
//     // Iterate through the strings from right to left
//     for (let i = maxLength - 1; i >= 0; i--) {
//         const bitA = parseInt(a[i]);
//         const bitB = parseInt(b[i]);
//
//         // Calculate the sum of the current bits and the carry
//         const sum = bitA + bitB + carry;
//
//         // Determine the current bit in the result
//         result = (sum % 2) + result;
//
//         // Calculate the carry for the next iteration
//         carry = Math.floor(sum / 2);
//     }
//
//     // Add any remaining carry to the result
//     if (carry > 0) {
//         result = carry + result;
//     }
//
//     return result;
// }
//
// // Example usage:
// console.log(addBinary("11", "1"));      // Output: "100"
// console.log(addBinary("1010", "1011")); // Output: "10101"

// <<<<<<<<<<------------------------------------------------ 83. [[ Remove Duplicates from Sorted List ]] --------------------------------------------------->>>>>>>>>>>
/*
*
* =>   Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
       Example 1:  Input: head = [1,1,2]          // Output: [1,2]
       Example 2:  Input: head = [1,1,2,3,3]      // Output: [1,2,3]
* */
var deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let current = head;

    while (current.next !== null) {
        if (current.val === current.next.val) {
            // Duplicate found, update the next pointer to skip the duplicate
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head;
};

// Example usage:
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// Create a sample linked list: 1 -> 1 -> 2 -> 3 -> 3
let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
let result = deleteDuplicates(head);

// Output the result
let output = [];
while (result !== null) {
    output.push(result.val);
    result = result.next;
}
console.log(output); // Output: [1, 2, 3]

/*
* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.



Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

*
*
*
*
*
* */
var removeElement = function (nums, val) {
    let k = 0; // Variable to track the count of elements not equal to val

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val, update nums array
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// Test cases
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1)); // Output: 2, nums1 = [2, 2, _, _]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2)); // Output: 5, nums2 = [0, 1, 4, 0, 3, _, _, _]