// // Find the max  of the following array
// //     [22,34,78,12,10,5,28]
//
// const arr = [22, 34, 78, 12, 10, 5, 28, 99]
//
// const maxArr = (arr) => {
//     let max = arr[0]
//     for (let i = 1; i <= arr.length - 1; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
//
// }
// console.log(maxArr(arr))
//
//
// //------------------------------------------------------------------//------------------------------------------------------------------
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
// // Perform Advanced Operations:
//
// // 1. Flatten the array of objects:
// const flattenedArray = complexArray.map(obj => ({
//     id: obj.id,
//     name: obj.name,
//     age: obj.details.age,
//     city: obj.details.address.city,
//     zipCode: obj.details.address.zipCode,
//     country: obj.details.address.country,
//     hobbies: obj.hobbies.join(', '),
// }));
//
// console.log('Flattened Array:', flattenedArray);
//
//
// //with forEach
// const flattenArray = [];
// complexArray.forEach(obj => {
//     flattenArray.push({
//         id: obj.id,
//         name: obj.name,
//         age: obj.details.age,
//         city: obj.details.address.city,
//         zipCode: obj.details.address.zipCode,
//         country: obj.details.address.country,
//         hobbies: obj.hobbies.join(', '),
//     });
// });
//
// console.log('Flattened Array:', flattenArray);
//
// // 2. Group objects by country:
// function groupByCountry(arr) {
//
//     const groupedByCountry = {};
//
//     for (const item of arr) {
//         const country = item.details.address.country;
//
//         if (!groupedByCountry[country]) {
//             groupedByCountry[country] = [];
//         }
//
//         groupedByCountry[country].push(item);
//     }
//
//     return groupedByCountry;
// }
//
// const groupedResult = groupByCountry(complexArray);
// console.log('Grouped by Country:', groupedResult);
//
//
// // 3. Remove duplicates based on zipCode:
// const uniqueByZipCode = complexArray.filter((obj, index, self) =>
//     index === self.findIndex((o) => o.details.address.zipCode === obj.details.address.zipCode)
// );
//
// console.log('Unique by Zip Code:', uniqueByZipCode);
//
// // 4. Sort objects by age in descending order:
// const sortedByAgeDesc = complexArray.sort((a, b) => b.details.age - a.details.age);
//
// console.log('Sorted by Age (Descending):', sortedByAgeDesc);
//
//
// //------------------------------------------------------------------//------------------------------------------------------------------
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
//         scores: {
//             math: [90, 85, 92],
//             science: [85, 88, 90],
//             history: [78, 85, 80],
//         },
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
//         scores: {
//             math: [95, 92, 88],
//             science: [92, 85, 90],
//             history: [80, 75, 78],
//         },
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
//         scores: {
//             math: [88, 90, 85],
//             science: [75, 78, 80],
//             history: [82, 85, 88],
//         },
//     },
// ];
//
// // Perform Advanced Operations:
//
// // 1. Calculate the average score for each student and subject:
// const averageScores = complexArray.map((student) => {
//     const subjectAverages = Object.entries(student.scores).reduce((averages, [subject, scores]) => {
//         const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
//         averages[subject] = average;
//         return averages;
//     }, {});
//     return {...student, averageScores: subjectAverages};
// });
//
// console.log('Average Scores for Each Student and Subject:', averageScores);
//
// // 2. Filter students with an average score above a certain threshold:
// const filteredByAverageScore = averageScores.filter((student) =>
//     Object.values(student.averageScores).some((average) => average > 88)
// );
//
// console.log('Filtered by Average Score Threshold:', filteredByAverageScore);
//
// // 3. Asynchronously fetch additional data for each student:
// async function fetchDataForStudents(students) {
//     const asyncData = await Promise.all(
//         students.map(async (student) => {
//             // Simulate an asynchronous operation (e.g., fetching additional data from an API)
//             const additionalData = await fetchAdditionalData(student.id);
//             return {...student, additionalData};
//         })
//     );
//     return asyncData;
// }
//
// // Simulated asynchronous function
// async function fetchAdditionalData(studentId) {
//     // Simulate fetching additional data (e.g., from an API)
//     return {studentId, additionalInfo: 'Lorem ipsum'};
// }
//
// fetchDataForStudents(complexArray).then((studentsWithAsyncData) => {
//     console.log('Students with Additional Asynchronous Data:', studentsWithAsyncData);
// });
//
//
// // Perform More Advanced Operations:
//
// // 4. Dynamically add a new subject and score for each student:
// const dynamicallyAddSubject = (students, subject, newScores) => {
//     return students.map((student) => {
//         return {
//             ...student,
//             scores: {
//                 ...student.scores,
//                 [subject]: newScores,
//             },
//         };
//     });
// };
//
// const subjectsToAdd = ['programming', 'music'];
// const newScores = [[85, 90, 88], [92, 88, 95]];
//
// const studentsWithNewSubjects = subjectsToAdd.reduce(
//     (students, subject, index) => dynamicallyAddSubject(students, subject, newScores[index]),
//     complexArray
// );
//
// console.log('Students with Dynamically Added Subjects:', studentsWithNewSubjects);
//
// // 5. Implement a custom sorting algorithm to sort students by total score:
// const sortByTotalScore = (students) => {
//     return students.sort((a, b) => {
//         const totalScoreA = Object.values(a.scores).flat().reduce((sum, score) => sum + score, 0);
//         const totalScoreB = Object.values(b.scores).flat().reduce((sum, score) => sum + score, 0);
//         return totalScoreB - totalScoreA;
//     });
// };
//
// const studentsSortedByTotalScore = sortByTotalScore(complexArray);
//
// console.log('Students Sorted by Total Score:', studentsSortedByTotalScore);
//
//
// //------------------------------------------------------------------//------------------------------------------------------------------
//
// const {MongoClient} = require('mongodb');
//
// const uri = 'mongodb://localhost:27017';
// const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//
// async function addOrganization(organizationName) {
//     try {
//         await client.connect();
//
//         // Create a new database for the organization
//         const dbName = organizationName.toLowerCase().replace(/\s+/g, '_');
//         const db = client.db(dbName);
//
//         // Add organization details to the new database
//         const organizationDetails = {
//             name: organizationName,
//             // Add other organization details as needed
//         };
//
//         // Insert organization details into a collection (e.g., 'organizations')
//         const organizationsCollection = db.collection('organizations');
//         await organizationsCollection.insertOne(organizationDetails);
//
//         // Create additional collections with initial data if needed
//         await createDefaultCollections(db);
//
//         console.log(`Organization '${organizationName}' added with database '${dbName}'`);
//     } finally {
//         await client.close();
//     }
// }
//
// async function createDefaultCollections(db) {
//     // Create additional collections and insert initial data if needed
//     const usersCollection = db.collection('users');
//     await usersCollection.insertMany([
//         {username: 'admin', password: 'adminpassword'},
//         // Add more initial user data as needed
//     ]);
//
//     const productsCollection = db.collection('products');
//     await productsCollection.insertMany([
//         {name: 'Product 1', price: 19.99},
//         // Add more initial product data as needed
//     ]);
//
//     // Add more collections and initial data as needed
// }
//
// // Example usage
// const organizationName = 'My Organization';
// addOrganization(organizationName);
//
//
// //---------
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
//         scores: {
//             math: [90, 85, 92],
//             science: [85, 88, 90],
//             history: [78, 85, 80],
//         },
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
//         scores: {
//             math: [95, 92, 88],
//             science: [92, 85, 90],
//             history: [80, 75, 78],
//         },
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
//         scores: {
//             math: [88, 90, 85],
//             science: [75, 78, 80],
//             history: [82, 85, 88],
//         },
//     },
// ];
//
// // More Advanced Operations:
//
// // 6. Filter students based on multiple criteria (age and total score):
// const filterStudents = (students, ageThreshold, totalScoreThreshold) => {
//     return students.filter((student) => {
//         const totalScore = Object.values(student.scores).flat().reduce((sum, score) => sum + score, 0);
//         return student.details.age <= ageThreshold && totalScore >= totalScoreThreshold;
//     });
// };
//
// const filteredStudents = filterStudents(complexArray, 30, 250);
//
// console.log('Filtered Students:', filteredStudents);
//
// // 7. Simulate asynchronous data fetching with more realistic scenarios:
// const simulateAsyncDataFetching = (student) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // Simulate fetching additional data (e.g., from an API)
//             const additionalData = {
//                 studentId: student.id,
//                 attendance: '90%',
//                 performance: 'Excellent',
//             };
//             resolve({...student, additionalData});
//         }, 1000);
//     });
// };
//
// // Perform asynchronous data fetching for all students:
// const fetchAsyncDataForStudents = async (students) => {
//     const asyncData = await Promise.all(students.map(simulateAsyncDataFetching));
//     return asyncData;
// };
//
// fetchAsyncDataForStudents(complexArray).then((studentsWithAsyncData) => {
//     console.log('Students with Additional Asynchronous Data:', studentsWithAsyncData);
// });
//
// // 8. Dynamically transform data based on conditions:
// const dynamicDataTransformation = (students, conditionFunction, transformationFunction) => {
//     return students.map((student) => {
//         if (conditionFunction(student)) {
//             return transformationFunction(student);
//         }
//         return student;
//     });
// };
//
// const conditionFunction = (student) => student.details.address.country === 'USA';
// const transformationFunction = (student) => ({
//     ...student,
//     additionalInfo: 'Transformed in USA',
// });
//
// const transformedDataBasedOnCondition = dynamicDataTransformation(
//     complexArray,
//     conditionFunction,
//     transformationFunction
// );
//
// console.log('Transformed Data Based on Condition:', transformedDataBasedOnCondition);
/*
* 4. Write a program to get total vowel count from String ?
*Write a program to check if value/target exists or not in ascending array in O(log n) time complexity ?
Write a program to find duplicate numbers in an integer array ?
*
*How do you remove duplicates from an integer array ?
*10. We have group of people in the form of array and you have to group people basis upon age ?
let peopleArr = [
    {name: 'A', age: 10},
    {name: 'B', age: 17},
    {name: 'C', age: 14},
    {name: 'D', age: 10},
];

let resultObj = {};
for(let i=0; i<peopleArr.length; i++)
{
    if(resultObj[peopleArr[i].age]){
       resultObj[peopleArr[i].age].push(peopleArr[i].name);
    }else{
       resultObj[peopleArr[i].age] = [peopleArr[i].name];
    }
}
console.log(resultObj)
*
*
*
* 387. First Unique Character in a String
Easy
Topics
Companies
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.



Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*


* */