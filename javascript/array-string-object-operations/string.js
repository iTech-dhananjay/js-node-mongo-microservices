// Count number of each new fruit
const fruits = [
    {Apple: 4, Orange: 7, Grape: 3},
    {Guava: 6, Lemon: 4, Banana: 8},
    {Orange: 5, PineApple: 7, Apple: 7}
];

// Iterate over each object in the 'fruits' array
for (let key of fruits) {
    console.log(key); // Log each object (represents a set of fruits with quantities)
}

// Iterate over the indices of the 'fruits' array
for (let key in fruits) {
    console.log(key); // Log each index (0, 1, 2) of the 'fruits' array
}
