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

var car = {
    registrationNumber: "GA12345",
    brand: 'Toyota',
    displayDetails: function (ownerName) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);

    }
}
var myCarDetails = car.displayDetails.bind(car, "Vivian")
myCarDetails()