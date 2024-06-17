const arr = [1, 2, 3, 4, 5];

function skipIndexMultiplying(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let mul = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                mul *= arr[j];
            }
        }
        result.push(mul);
    }

    return result;
}

console.log(skipIndexMultiplying(arr));


/*
Here's how the loop works:

1. **Calculating Total Product:**
- Initially, `totalProduct` is `1`.
- Loop through each element of the array (`1, 2, 3, 4, 5`).
- Multiply each element with `totalProduct`.
- `totalProduct = 1 * 1 = 1`
- `totalProduct = 1 * 2 = 2`
- `totalProduct = 2 * 3 = 6`
- `totalProduct = 6 * 4 = 24`
- `totalProduct = 24 * 5 = 120`

    2. **Calculating Result Array:**
- Loop through each element of the array (`1, 2, 3, 4, 5`).
- For each element `num`, divide `totalProduct` by `num` and push the result into the `result` array.
- Calculation:
- `result[0] = 120 / 1 = 120` (Product of all elements except `1`)
- `result[1] = 120 / 2 = 60`  (Product of all elements except `2`)
- `result[2] = 120 / 3 = 40`  (Product of all elements except `3`)
- `result[3] = 120 / 4 = 30`  (Product of all elements except `4`)
- `result[4] = 120 / 5 = 24`  (Product of all elements except `5`)

The `result` array will be `[120, 60, 40, 30, 24]`.*/


const obj1 = [
    '65c0733598fa8dc6df45be49',
    '65c0735098fa8dc6df45be51',
    '65c0735698fa8dc6df45be55',
    '65d596bdf24e665d875ba1c1',
];

const obj2 = [
    '65c0733598fa8dc6df45be49',
    '65c0735098fa8dc6df45be51',
];

const filter = obj1.filter(obj => !obj2.includes(obj));

console.log(filter); // ['65c0735698fa8dc6df45be55', '65d596bdf24e665d875ba1c1']


////////////
const test = {
    name: 'Dhananjay',
    id: 1,
    account: []
};

const account = [1, 2];
const accountVerify = 'Yes'
test.account = account;
test.accountVerify = accountVerify

console.log(test);


// finding next greater elemetn
function nextGreaterElement(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let nextGreater = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                nextGreater = arr[j];
                break;
            }
        }
        result.push(nextGreater);
    }

    return result;
}

// Example usage:
const ar = [4, 5, 2, 25, 10];
const nextGreater = nextGreaterElement(ar);
console.log(nextGreater); // Output: [5, 25, 25, -1, -1]


