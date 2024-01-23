// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problems]] ---------------------------------------------------->>>>>>>>>>>
/*

  :: [[ Medium ]]
  33. Search in Rotated Sorted Array
  151. Reverse Words in a String
  442. Find All Duplicates in an Array
  29. Divide Two Integers


 */

/*
*
* Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.

*
*
*
*
*
* */

const user1 = {
    name: "Rajan",
    age: null,
    address: {
        pincode: 1234444,
        city: null,
    },
    test: null,
};

const user2 = {
    name: "Piyush",
    age: null,
    address: {
        pincode: 843434,
        city: "GGN",
        state: "haryana",
    },
    mobile: 1234567890,
};

function mergeObjects(obj1, obj2) {
    const result = {...obj2};

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (obj1[key] !== null && typeof obj1[key] === 'object' && result[key]) {
                // Recursively merge nested objects
                result[key] = mergeObjects(obj1[key], result[key]);
            } else if (obj1[key] !== null || result[key] === undefined) {
                result[key] = obj1[key];
            }
        }
    }

    return result;
}


const mergedUser = mergeObjects(user1, user2);
console.log(mergedUser);
