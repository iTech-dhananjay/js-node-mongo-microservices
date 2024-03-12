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
