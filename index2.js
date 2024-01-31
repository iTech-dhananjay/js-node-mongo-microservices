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


function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    Car.call(this, "convertible", "petrol");
    this.brand = brand;
    console.log(`Car details = `, this);
}

// function definePrice(price) {
//     Car.call(this, "convertible", "diesel");
//     this.price = price;
//     console.log(`Car details = `, this);
// }

const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);