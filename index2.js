// const data = ['mastertable', 'usermanagement', 'asset', 'form', 'profile'];
//
// function bubbleSort(arr) {
//     const n = arr.length;
//
//     for (let i = 0; i <= n - 1; i++) {
//         for (let j = 0; j <= n; j++) {
//
//         }
//     }
//
//     return arr;
// }
//
// const sortedArray = bubbleSort(data.slice());
// console.log(sortedArray)
// const arrObj = [
//     {name: 'abc', slug: 'abc'},
//     {name: 'pqr', slug: 'xyz'},
//     {name: 'abc', slug: 'abc'},
//     {name: 'abc', slug: 'xyz'}
// ];
//
// function isUniqueSlug(value, index, self) {
//     return self.findIndex(obj => obj.slug === value.slug) === index;
// }
//
// const uniqueArrObj = arrObj.filter(isUniqueSlug);
//
// console.log(uniqueArrObj); //[ { name: 'abc', slug: 'abc' }, { name: 'pqr', slug: 'xyz' } ]

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("one"), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("two"), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("three"), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("four"), 4000);
// });
// const p5 = new Promise((resolve, reject) => {
//     reject(new Error("reject"));
// });
//
// // Using .catch:
// Promise.all([p1, p2, p3, p4, p5])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });


// const arr = [1, 2, 3, 4, 5];
//
// function skipIndexMultiplying(arr) {
//     const result = [];
//     let totalProduct = 1;
//
//     // Calculate the total product of all elements in the array
//     for (let num of arr) {
//         totalProduct *= num;
//     }
//
//     // Calculate the result array
//     for (let num of arr) {
//         // Divide the total product by the current element to get the product of all other elements
//         result.push(totalProduct / num);
//     }
//
//     return result;
// }
//
// console.log(skipIndexMultiplying(arr));

