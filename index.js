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
