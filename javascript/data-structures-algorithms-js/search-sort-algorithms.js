// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Search & Sort ]] -------------------------------------------------->>>>>>>>>>>

/* 

O(1) - Excellent/Best
O(log n) - Good
O(n) - Fair
O(n log n) - Bad
O(n^2), O(2^n) and O(n!) - Horrible/Worst


  1. Binary Search  [ Divide & Conquer Technique ]
  2. Linear Search
  3. Quick Sort
  4. Merge sort
  5. Bubble Sort without in-built method
  6. Selection Sort [https://www.youtube.com/watch?v=766JkxAAFJ4&list=PL_HlKez9XCSOi5thYDzipbJ2pEdzop7vx&index=16]
  7. Recursive function
  8. Custom Sort
*/


let num = Math.floor(Math.random() * 10000000000000000);
console.log(num);
const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    /*
    Math.random(): Generates a random decimal between 0 and 1.
    (max - min + 1): Computes the range of possible values. : Computes the range of possible values. Adding 1 ensures that the upper bound is inclusive in the range. For example, if min is 5 and max is 10, the range is 6 (10 - 5 + 1).
    Math.floor(...): Rounds down to the nearest whole number.
    + min: Shifts the range to start from min.
     */
};


console.log(randomInt(5, 10));


// <<<<<<<<<<<<<<<---------------------------------------------- 1. [[   Binary Search   ]] ---------------------------------------------------------->>>>>>>>>>>

/*
### Binary Search Process

1. **Initialization**:
   - `left = 0` (starting index of the array)
   - `right = arr.length - 1 = 5` (ending index of the array)

2. **First Iteration**:
   - Calculate `mid = Math.floor((left + right) / 2) = Math.floor((0 + 5) / 2) = 2`.
   - Check `arr[mid] = arr[2] = 5`.
   - Since `5` is greater than `3`, update `right = mid - 1 = 2 - 1 = 1`.

3. **Second Iteration**:
   - Calculate `mid = Math.floor((left + right) / 2) = Math.floor((0 + 1) / 2) = 0`.
   - Check `arr[mid] = arr[0] = 1`.
   - Since `1` is less than `3`, update `left = mid + 1 = 0 + 1 = 1`.

4. **Third Iteration**:
   - Calculate `mid = Math.floor((left + right) / 2) = Math.floor((1 + 1) / 2) = 1`.
   - Check `arr[mid] = arr[1] = 3`.
   - Since `3` is equal to the target `3`, return `Match found at index 1`.

*/
// Only we can apply on sorted array
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        // Find the middle index
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (target < nums[mid]) {
            // continue searching to the left
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

const result = binarySearch([1, 2, 3, 4, 5, 6], 4);
console.log('The elements found at index:' + result);
//Best Case Time Complexity : O(1)
//The Worst Case Time Complexity : O(logN)
//Space Complexity : O(1) for iterative, O(logN) for recursive.

const binarySearchRecursive = (arr, index, left = 0, right = arr.length - 1) => {
    if (left > right) {
        return -1; // Element not found
    }

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === index) {
        return `Found the element ${index} at index ${mid}`;
    } else if (arr[mid] < index) {
        return binarySearchRecursive(arr, index, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, index, left, mid - 1);
    }
};

console.log(binarySearchRecursive(arr, 9));
// <<<<<<<<<<<<<<<----------------------------------------------- 2. [[  Linear Search  ]] ---------------------------------------------------------->>>>>>>>>>>

const number = [2, 4, 67, 8, 44, 6, 12];

function linearSearch(number, num) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] === num) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(number, 8)); //3
console.log(linearSearch(number, 28)); //-1


// <<<<<<<<<<<<<<<-------------------------------------------------- 3. [[  Quick Sort  ]] ------------------------------------------------------------>>>>>>>>>>>


/*

### QuickSort Algorithm In-Depth Explanation:

1. **Initial Call:**
   - Input Array: `[8, 20, -2, 4, -6]`

2. **QuickSort Function:**
   - Pivot Selection: Initially, the pivot is the first element (`8`).
   - Iteration: Elements less than the pivot go to `leftArr`, and others go to `rightArr`.
   - Recursive Calls: Apply `quickSort` on both `leftArr` and `rightArr`.
   - Concatenation: Concatenate the sorted `leftArr`, pivot, and sorted `rightArr`.

3. **Sorting Process:**
   - **Round 1:**
     - Pivot: `8`
     - `leftArr`: `[-2, 4, -6]`
     - Recursive Call on `leftArr`: Pivot is `-2`.
     - Sorting `leftArr`: `[-6, -2, 4]`
     - Result: `[-6, -2, 4, 8, 20]`

4. **Output:**
   - Final Sorted Array: `[ -6, -2, 4, 8, 20 ]`

In summary, QuickSort selects a pivot, partitions the array into elements less than and greater than the pivot, and recursively applies the same process to each subarray.
The final sorted array is obtained by concatenating the sorted left subarray, the pivot, and the sorted right subarray.
This process continues until the base case (one or zero elements) is reached.

*/

const arr = [8, 20, -2, 4, -6];

const quickSort = (arr) => {
    //base case
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    // Skip the first element (pivot)
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arr));

// <<<<<<<<<<<<<<<------------------------------------------------ 4. [[   Merge sort  ]] ------------------------------------------------------------->>>>>>>>>>>
/*
   - Best Time complexity : O(nlogn)

Certainly, let's go through each step, tracking the position of `-2` throughout the process:

### Step 1 - Initial Call:

### Step 2 - Recursive Call 1:

- `mergeSort([8, 20])`
  - Splitting the array: `leftArr: [8]` and `rightArr: [20]`.
    - `mergeSort([8])`: Returns `[8]`.
    - `mergeSort([20])`: Returns `[20]`.
  - Merging the results: `merge([8], [20])` gives `[8, 20]`.

### Step 3 - Recursive Call 2:

- `mergeSort([-2, 4, -6])`
  - Splitting the array: `leftArr: [-2]` and `rightArr: [4, -6]`.
    - `mergeSort([-2])`: Returns `[-2]`.
    - `mergeSort([4, -6])`:
      - Splitting further: `leftArr: [4]` and `rightArr: [-6]`.
        - `mergeSort([4])`: Returns `[4]`.
        - `mergeSort([-6])`: Returns `[-6]`.
      - Merging the results: `merge([4], [-6])` gives `[-6, 4]`.

### Step 4 - Merge Results:

- Merging the results of `mergeSort([8, 20])` and `mergeSort([-2, 4, -6])`:
  - `merge([8, 20], [-6, 4])`:
    - Initializing `sortedArr: []`.
    - Comparing `8` and `-6`, pushing `-6` to `sortedArr`, and removing it from `rightArr`.
      - `sortedArr: [-6]`, `leftArr: [8, 20]`, `rightArr: [4]`.
    - Comparing `8` and `4`, pushing `4` to `sortedArr`, and removing it from `rightArr`.
      - `sortedArr: [-6, 4]`, `leftArr: [8, 20]`, `rightArr: []`.
    - Comparing `8` and no element in `rightArr`, pushing `8` to `sortedArr`, and removing it from `leftArr`.
      - `sortedArr: [-6, 4, 8]`, `leftArr: [20]`, `rightArr: []`.
    - Comparing `20` and no element in `rightArr`, pushing `20` to `sortedArr`, and removing it from `leftArr`.
      - `sortedArr: [-6, 4, 8, 20]`, `leftArr: []`, `rightArr: []`.
    - Loop ends as both `leftArr` and `rightArr` are empty.
    - Concatenating remaining elements in either `leftArr` or `rightArr` to `sortedArr`.
      - Result: `[-6, 4, 8, 20]`.

### Explanation:
The element `-2` is present in the original array `[8, 20, -2, 4, -6]`. During the sorting process, `-2` is correctly handled:

- It is part of the left subarray `leftArr: [-2]` during the split in the second recursive call.
- The recursive call `mergeSort([-2])` returns `[-2]`.
- In the merging process, when merging the results of `mergeSort([4])` and `mergeSort([-6])`, `[-2]` is not involved as it is part of the left subarray.

Therefore, after the complete sorting process, the final result is `[ -6, -2, 4, 8, 20 ]`, and `-2` is correctly positioned between `-6` and `4`.

 */
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()); // remove element from leftArr and push to sortedArr
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr];
    return resultArr;
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr)); //[ -6, -2, 4, 8, 20 ] Best Time complexity O(nlogn)

// <<<<<<<<----------------------------- 5. [[   Bubble Sort without in-built method [Most asked sort question] ]] --------------------------------------->>>>>>>>>>>
/* 
20, 5, 1, 4, 80, 78 === i / here it will compare 20,5 (20-i ,5=j) first it will 20,20 
5, 20, 1, 4, 80, 78 === j
5, 1, 20, 4, 80, 78 === j
5, 1, 4, 20, 80, 78 === j  / here 20 is sorted and 20 is not greater than 80 then return false


20, 5, 1, 4, 80, 78 === i / here it will compare 20,5 (5-i ,1=j) 
1, 4, 5, 20, 80, 78 === j
1, 4, 5, 20, 80, 78 === j  / return false after 5 is sorted 

 */
function bubbleSort(array) {
    let swap;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}

let array = [20, 5, 1, 4, 80, 78];
let sortedArray = bubbleSort(array); //[ 1, 4, 5, 20, 78, 80 ]

// <<<<<<<<<<<<<<<------------------------------------------------ 6. [[  Selection sort  ]] -------------------------------------------------------------->>>>>>>>>>>

// <<<<<<<<<<<<<<<------------------------------------------------- 7. [[  Recursive function ]] ---------------------------------------------------------->>>>>>>>>>>

/* 
    - [ Recursive function ] : When f(n) call itself 
                             : If f(n) call itself then there must be an end point
                             : otherwise it will get called for infinite time
    - Example : Sorting Using Recursive f(n) : [2, 3, 1, 5, 6, 4, 8, 7, 10]

 */
// Eg - 1
let counter = 1;
let numbers = 10;

function demo(numbers) {
    if (counter > numbers) {
        return;
    }
    console.log('Recursive function');
    counter++;
    demo(numbers); // Recursive f(n)
}

demo(numbers);



// <<<<<<<<----------------------------- 8. [[ Custom Sort ]] --------------------------------------->>>>>>>>>>>
let arr = [1, 9, -39, 3, -2];

function customSort(arr) {
    // Extract and sort positive numbers
    let positiveNumbers = arr.filter(num => num >= 0).sort((a, b) => a - b);

    // Iterator for the sorted positive numbers
    let posIndex = 0;

    // Iterate through the original array and replace positive numbers -For each non-negative number in the original array, replace it with the next number from the sorted array of positive numbers.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = positiveNumbers[posIndex];
            posIndex++;
        }
    }

    return arr;
}

console.log(customSort(arr));