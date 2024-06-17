/*
  1. Functions
  2. Objects
*/


// <<<<<<<<<<<<<<<------------------------------------------------- 1. [[  Functions () ]] --------------------------------------------------------->>>>>>>>>>>

// ==>>>> Q1. Function Expression

// after const square = it is called anonymous function which has no name - this function can be assigned as variable or pass as callback function
const squareOne = function (nums) {
    return nums * nums;
};
console.log(squareOne(5));

// ==>>>>  Q2.  First class function - function that is treated as variable it can do everything same as variable do .. pass as variable

function squareTwo(num) {
    return num * num;
}

function displaySquareTwo(fn) {
    console.log('Square is', fn(5));
}

displaySquareTwo(squareTwo);


// <<<<<<<<<<<<<<<------------------------------------------------- 2. [[  Objects  ]] --------------------------------------------------------->>>>>>>>>>>

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

const userSix = {name: 'Lydia', age: 35};
const admin = {admin: true, ...userSix};
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
    fullName: {first},
} = userSeven;
console.log(first); //Dhananjay


//Level-13  Non-Writable Property Handling-
const user = {
    name: 'John ',
    aadhaarNo: 111,
    isActive: true
}

// Setting the 'aadhaarNo' property as non-writable
Object.defineProperty(user, "aadhaarNo", {
    writable: false
})

user.aadhaarNo = 222; // This assignment will be ignored due to non-writability
user.name = 'John Doe'; // This will be allowed
user.age = 30;
user.email = 'john@example.com';

console.log(user['name'], 'test') //John Doe test

console.log(user); //{ name: 'John Doe', aadhaarNo: 111, isActive: true ,age:30,email:'john@example.com' }


//--------------------------------------------------------------------------------------------> Type-2


const jsonData = {
    data: [
        {
            item: {
                ourrole: [
                    {
                        name: 'ourrole',
                        value: 'API Integration',
                        id: 'roll1',
                    },
                    // Other objects in "ourrole" array
                ],
            },
        },
        {
            item: {
                category: [
                    {
                        name: 'Web Development',
                        value: 'Web Development',
                        id: 'cat1',
                    },

                ],
            },
        },
        {
            item: {
                industry: [
                    {
                        name: 'Banking',
                        value: 'Banking',
                        id: 'ind1',
                    },
                    // Other objects in "industry" array
                ],
            },
        },
    ],
};
// Filtering roles with name starting with 'r'
const rolesStartingWithR = ourRoleArray.filter((role) => role.name.startsWith('r'));
console.log(rolesStartingWithR);

// Sorting roles based on their ids
const sortedRoles = ourRoleArray.sort((a, b) => a.id.localeCompare(b.id));
console.log(sortedRoles);

// Checking if all roles have a value
const allRolesHaveValue = ourRoleArray.every((role) => 'value' in role);
console.log(allRolesHaveValue);


// Counting the number of categories
const categoryCount = categoryArray.length;
console.log(categoryCount);

// Extracting unique category names
const uniqueCategoryNames = [...new Set(categoryArray.map((cat) => cat.value))];
console.log(uniqueCategoryNames);

// Summing the lengths of category names
const totalLengthOfCategories = categoryArray.reduce((total, cat) => total + cat.value.length, 0);
console.log(totalLengthOfCategories);

// Finding the industry with the longest name
const industryWithLongestName = industryArray.reduce((prev, current) => (prev.value.length > current.value.length ? prev : current));
console.log(industryWithLongestName);

// Grouping industries by the first letter of their names
const groupedIndustries = industryArray.reduce((groups, ind) => {
    const key = ind.value[0].toUpperCase();
    (groups[key] || (groups[key] = [])).push(ind);
    return groups;
}, {});
console.log(groupedIndustries);

//--------------------------------------------------------------------------------------------> Type-3

const arr = [1, 'Admin-1', { text: 'admin1@gmail.com', hyperlink: 'mailto:admin1@gmail.com' }, 7766838218];

const [userCodeId, name, emailObj, phone] = arr;

let emp = {
    email: emailObj.text,
    userProfile: {
        userCodeId: userCodeId,
        name: name,
        phone: phone
    },
    userType: 'admin',
    dashboardPermission: 'admin_dashboard',
};

console.log(emp);