// const complexArray = [
//     {
//         id: 1,
//         name: 'John',
//         details: {
//             age: 30,
//             address: {
//                 city: 'New York',
//                 zipCode: '10001',
//                 country: 'USA',
//             },
//         },
//         hobbies: ['reading', 'traveling'],
//     },
//     {
//         id: 2,
//         name: 'Jane',
//         details: {
//             age: 28,
//             address: {
//                 city: 'San Francisco',
//                 zipCode: '94105',
//                 country: 'USA',
//             },
//         },
//         hobbies: ['painting', 'gardening'],
//     },
//     {
//         id: 3,
//         name: 'Bob',
//         details: {
//             age: 35,
//             address: {
//                 city: 'London',
//                 zipCode: 'WC2N',
//                 country: 'UK',
//             },
//         },
//         hobbies: ['photography', 'cooking'],
//     },
// ];
//
//
// // function groupByCountry(arr) {
// //
// //     const groupedByCountry = {};
// //
// //     for (const item of arr) {
// //         const country = item.details.address.country;
// //
// //         if (!groupedByCountry[country]) {
// //             groupedByCountry[country] = [];
// //         }
// //
// //         groupedByCountry[country].push(item);
// //     }
// //
// //     return groupedByCountry;
// // }
//
//
// // console.log(groupByCountry(complexArray))

let arr = [20, 90, 70, 40, 10]

const secLar = (arr) => {
    let largest = arr[0]
    let secondLargest = -Infinity

    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else {
            if (arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i]
            }
        }
    }
    return secondLargest
}

console.log(secLar(arr))