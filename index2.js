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
// console.log(sortedArray);


// let user1 = {
//     name: 'Jack',
//     state: 'Bihar',
//     getName() {
//         return this.name
//     }
// }
//
// let user2 = {
//     name: 'John',
//     state: 'Uttar Pradesh',
// }
//
// user1.call(user2.name)

const arrObj = [
    {name: 'abc', slug: 'abc'},
    {name: 'pqr', slug: 'xyz'},
    {name: 'abc', slug: 'abc'},
    {name: 'abc', slug: 'xyz'}
];

function isUniqueSlug(value, index, self) {
    return self.findIndex(obj => obj.slug === value.slug) === index;
}

const uniqueArrObj = arrObj.filter(isUniqueSlug);

console.log(uniqueArrObj); //[ { name: 'abc', slug: 'abc' }, { name: 'pqr', slug: 'xyz' } ]