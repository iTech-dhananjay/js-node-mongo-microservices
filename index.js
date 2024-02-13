// function getObjectDepth(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         // Base case: if obj is not an object or is null, return 1
//         return 1;
//     }
//
//     let maxDepth = 1; // Initialize maxDepth to 1
//
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const depth = getObjectDepth(obj[key]);
//             maxDepth = Math.max(maxDepth, depth);
//         }
//     }
//
//     return maxDepth;
// }
//
// // Example usage:
// const person = {
//     name: "John",
//     age: 25,
//     address: {
//         city: "Exampleville",
//         zipCode: "12345",
//         country: "Sampleland",
//     },
//     hobbies: ["Reading", "Coding", "Traveling"],
// };
//
// const depth = getObjectDepth(person);
// console.log("Depth of the object:", depth);
// const data1 = [
//     {name: "jack", score: 20},
//     {name: "joe", score: 20},
//     {name: "deepak", score: 10},
//     {name: "rock", score: 15},
//     {name: "adam", score: 30},
// ]
const results = [].forEach((text) => {
    return text
})

console.log(results)

let obj = {
    a: 'Joe',
    b: 'Doe'
}

let result;

for (let item in obj) {
    if (item === 'b') {
        result = obj[item];
        break;
    }
}

console.log(result);


const arr = [1, 2, 3, 4, 5]

function skipIndexMultiplying(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let track = arr[i]
       

    }
}

console.log(skipIndexMultiplying(arr))