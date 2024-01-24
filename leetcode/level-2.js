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


/*
*        -----  The first condition checks if the property in user1 is not null, is an object, and if the corresponding property exists in result. If all these conditions are true, it means there is a nested object,
                and the function recursively calls itself (mergeObjects) to merge the nested objects..
         -----  The second condition checks if the property in user1 is not null or if the property in result is undefined. If either of these conditions is true, it means that the property exists in user1 but not in result,
                so it assigns the value from user1 to the result object.
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

function mergeObjects(user1, user2) {
    const result = {...user2};

    for (const key in user1) {
        if (user1.hasOwnProperty(key)) {
            if (user1[key] !== null && typeof user1[key] === 'object' && result[key]) {
                // Recursively merge nested objects
                result[key] = mergeObjects(user1[key], result[key]);
            } else if (user1[key] !== null || result[key] === undefined) {
                result[key] = user1[key];
            }
        }
    }

    return result;
}

console.log(mergeObjects(user1, user2))


const person = {
    name: "John",
    age: 25,
    address: {
        city: "Exampleville",
        zipCode: "12345",
        country: "Sampleland",
    },
    hobbies: ["Reading", "Coding", "Traveling"],
};

function getObjectDepth(obj) {
    if (typeof obj !== 'object' || obj === null) {
        // Base case: if obj is not an object or is null, return 0 depth
        return {maxDepth: 0, currentDepth: 0};
    }

    let maxDepth = 0;
    let currentDepth = 1; // Initialize currentDepth to 1 for the current object level

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const depths = getObjectDepth(obj[key]);
            maxDepth = Math.max(maxDepth, depths.maxDepth);
        }
    }

    return {maxDepth: maxDepth + 1, currentDepth};
}


const depthInfo = getObjectDepth(person);
console.log("Current Depth of the object:", depthInfo.currentDepth);
console.log("Max Depth of the object:", depthInfo.maxDepth);

