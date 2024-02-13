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