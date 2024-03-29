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


//aggreagete use - first name match and last name won't match
const arr = [1, 2, 3, 4, 5, 6];
const arrIndex = arr.findIndex(num => num === 2);

if (arrIndex !== -1) {
    arr.splice(arrIndex, 1);
}

console.log(arr); // Output: [1, 3, 4, 5, 6]

const images = [
    {

        publicId: "gbsd6vjvkczrufdr6wfw",
        assetImageType: "assetImages",
        createdAt: "2024-02-16T04:36:46.265Z"
    },
    {

        publicId: "zjr02ogbcxarzcfzsqh2",
        assetImageType: "assetImages",
        createdAt: "2024-02-16T04:36:46.265Z"
    }
]

const result = images.filter((image => image.publicId !== 'zjr02ogbcxarzcfzsqh2'))
console.log(result)