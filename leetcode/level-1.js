// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problems]] ---------------------------------------------------->>>>>>>>>>>
/* https://www.youtube.com/watch?v=M04IJUf_jEQ&list=PLrClazTqVpJmY0TcHROxfaz62i31uiFzr - RemoteState


 :: [[ Easy ]]
  1.   Two Sum 
  2.   Add Two Numbers
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



  :: [[ Medium ]]
  33. Search in Rotated Sorted Array
  151. Reverse Words in a String
  442. Find All Duplicates in an Array
\
*/

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
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j >= i + 1; j--) {
            if (nums[i] === nums[j]) {
                nums.splice(i, 1);
            }
        }
    }
}; /* 


*/

// <<<<<<<<<<<<<<<---------------------------------------------- 58. [[Length of Last Word ]] -------------------------------------------------------->>>>>>>>>>>
/*

    - convert string into array - with split method we can covert string to array 
    - trim will remove white spaces from left or right of the string
*/

/**
 * @param {string} s
 * @return {number}
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


*/
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

arr.sort((a, b) => {
    // Compare scores
    if (a.score !== b.score) {
        return b.score - a.score; // Sort in descending order based on score
    }
    // If scores are equal, compare names alphabetically
    return b.name.localeCompare(a.name);
});

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