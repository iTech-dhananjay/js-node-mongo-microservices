/* 
  1. Objects
  2. Functions
  3. Pollyfills map , filter & reduce
  4. Map vs forEach

*/

/* 

  Map vs forEach
         - map will return new array but forEach will modify original array
         - map return new array so you can chain additional method [filter ,sort ,etc]
         - forEach will not able to add additional method
 */

// <<<<<<<<<<<<<<<------------------------------------------------- 1. [[  Objects {}  ]] --------------------------------------------------------->>>>>>>>>>>
/* 

1.  An object is a collection of properties, and a property is an association between a name (or key) and a value. 
      A property's value can be a function, in which case the property is known as a method.

 */

// Level -1
const userOne = {
     name: 'Dhananjay',
     age: 35,
     value: deleteMe,
};
delete user.value; // it will delete properties(value) of user object

console.log(userOne);

// Level -2
const func = (function (a) {
     // here a is local variable , delete keyword is only use when we want to delete property of any object not a local variable ,here not affect a at all.
     delete a;
     return a;
})(5);
console.log(func); //5

//Level-3
const userTwo = {
     name: 'Dhananjay-Update',
     age: 35,
     'Depth JavaScript': true,
};
// delete user['Depth JavaScript'];
console.log(userTwo['Depth JavaScript']); //true

//Level-4 - How to add dynamic key value pair to an object
const property = 'firstName';
const name = 'Dhananjay';

const userThree = {
     [property]: name, //To add dynamic property like this as wrap into []
};

console.log(userThree.firstName);

//Level-5 - we have object and we want to loop each of its keys and print the value
//The for ...in loop in JavaScript allows you to iterate over all property keys of an object.
const userFour = {
     name: 'Dhananjay-Update',
     age: 35,
     'Depth JavaScript': true,
};

for (key in userFour) {
     console.log(userFour[key]); // Dhananjay-Update , 35, true
     console.log(key); // name, age, Depth JavaScript
}

//Level-6 - we have object and we want to loop each of its
const obj = {
     a: 'One',
     b: 'Two',
     a: 'Three',
};
console.log(obj); // a: 'Three', b: 'Two' -later added will be considered

//Level-7 -Create a function multiplyByTwo(obj) that multiplies all numeric property value of nums by 2.

let nums = {
     a: 100,
     b: 200,
     title: 'My nums',
};
multiplyByTwo(nums);

function multiplyByTwo(obj) {
     for (key in obj) {
          if (typeof obj[key] === 'number') {
               obj[key] = obj[key] * 2;
          }
     }
}
console.log(nums); //{ a: 200, b: 400, title: 'My nums' }

//Level-8  :  What is JSON.stringify and JSON.parse ?

//convert objects as string
const userFive = {
     name: 'Dhananjay',
     age: 23,
};
const strObj = JSON.stringify(userFive); //I would recommend using JSON.stringify, which converts the set of the variables in the object to a JSON string.
// console.log(strObj);  {"name":"Dhananjay","age":23} - converted object as string
console.log(JSON.parse(strObj)); //{ name: 'Dhananjay', age: 23 }

//Level-9 : What is output?
console.log([...'Lydia']); //[ 'L', 'y', 'd', 'i', 'a' ] spread all of this characters inside of the array

const userSix = { name: 'Lydia', age: 35 };
const admin = { admin: true, ...userSix };
console.log(admin); //{ admin: true, name: 'Lydia', age: 35 }

//Level-10 :
const settings = {
     username: 'Dhananjay',
     level: 19,
     health: 50,
};
const data = JSON.stringify(settings, ['level', 'health']); //{"level":19,"health":50} - it converted only health and level to string and ignored username

//Level-11 : What is output?

const shape = {
     radius: 10,
     diameter() {
          return this.radius * 2;
     },
     perimeter: () => 2 * Math.PI.this.radius,
};

console.log(shape.diameter()); //20 //when this keyword got refernce to shape object
console.log(shape.perimeter()); //NaN When you call arrow function it got reference to window object

//Level-12 What is destructuring in object -  - Taking out specific properties from an object

let userSeven = {
     name: 'Dhananjay',
     age: 21,
     fullName: {
          first: 'Dhananjay',
          last: 'Kumar',
     },
};

const {
     fullName: { first },
} = userSeven;
console.log(first); //Dhananjay

// <<<<<<<<<<<<<<<------------------------------------------------- 2. [[  Functions () ]] --------------------------------------------------------->>>>>>>>>>>

//Q1. Function Expression
// after const square = it is called anonymous function which has no name - this function can be assigned as variable or pass as callback function
const squareOne = function (nums) {
     return nums * nums;
};
console.log(squareOne(5));

//Q2.First class function - function that is treated as variable it can do everything same as variable do .. pass as variable

function squareTwo(num) {
     return num * num;
}

function displaySquareTwo(fn) {
     console.log('Square is', fn(5));
}

displaySquareTwo(squareTwo);

// <<<<------------------------------------- 3. Map, Filter, Reduce - [Polyfills and Output Based Questions] --------------------------------------------->>>>
// Map Level -1 Map will return new array + it takes call back f(n)[()=>{}] which takes three things [curr element ,index of array (0,1,2,3)+ acutal array(arri)]

const ab = [1, 2, 3, 4, 5];
const muliptlyAll = ab.map((num, i, arri) => {
     //  return num * 3;  [ 3, 6, 9, 12, 15 ]
     return num * 3 + i; //  [(3, 7, 11, 15, 19)];
});
// Filter Level -1 Filter returns only those elements in the array which fulfills the provided criteria

const moreThanTwo = ab.filter((num) => {
     return num > 2;
});

console.log(moreThanTwo); // 3,4,5

// Filter Level -1 Reduce method reduces the array of values down to just one value
// if it fails to take initial value in reduce then it will take first element as initial value and second value as current value

const sum = ab.reduce((acc, curr, i, arr) => {
     return acc + curr;
}, 0);
console.log(sum);

//Level-2 Pollyfill for map(), filter() & reduce()

//Level-3 O/P
// Return  only name of students

let students = [
     { name: 'John', rollNumber: 10, marks: 60 },
     { name: 'Tom', rollNumber: 4, marks: 90 },
     { name: 'Wick', rollNumber: 8, marks: 100 },
];
//traditional way
// let names = [];
// for (let i = 0; i < students.length; i++) {
//      names.push(students[i].name.toUpperCase());
// }
// console.log(names); // [ 'JOHN', 'TOM', 'WICK' ]

let names = students.map((stu) => stu.name.toUpperCase()); //[ 'JOHN', 'TOM', 'WICK' ]

(function () {
     var a = (b = 5); //var a = b;    b = 5;
})();

console.log(b); //5
