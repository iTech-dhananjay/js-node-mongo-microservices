let arr = [1, 1, 2, 2, 3, 4, 5, 5, 6]

const removeDuplicates = (arr) => {
    let uniqueIndex = 0
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i]
        }
    }
    arr.splice(uniqueIndex)
    return arr
}
console.log(removeDuplicates(arr))