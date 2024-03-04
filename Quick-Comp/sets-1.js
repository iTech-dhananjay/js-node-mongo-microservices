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
