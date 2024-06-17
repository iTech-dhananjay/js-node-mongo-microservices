// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problems]] ------------------------------------------------>>>>>>>>>>>
/* 
  1.  Bubble Sort without in-built method 
  2.  Count Characters in String - Anagram
  3.  Reverse String  - Way : [1, 2, 3]
  4.  Infinite Currying
  5.  Remove Duplicate Item From Array - Way : [1, 2]
  6.  Promise  - Way : [1, 2]
  7.  Factorial of number
  8.  Check how many times an Element appears in an Array 
  9.  Sum  & Multiply of Array element
  10. Swap two numbers with temp
  11. Flatten the  Array without predefined function
   
*/


a =1
b=2
c=3

a=b
b=c
c=a

console.log(a,b,c)

//-----------------------------
const arrayOfObjects = [];

let obj1 = {
    name: 'Dhananjay',
    values: [],
};

let resultsss = {
    marks: 10,
    percent: 20,
};

obj1.values.push(resultsss);

arrayOfObjects.push(obj1);

console.log(JSON.stringify(arrayOfObjects, null, 2));
//Using JSON.stringify(arrayOfObjects, null, 2) allows you to pretty-print the arrayOfObjects array with an indentation level of 2. This way, you can see the contents of the nested object more clearly.
//The JSON.stringify() static method converts a JavaScript value to a JSON string,

let obj3 = {
    name: 'Dhananjay',
    values: [],
};

let subresult1 = {
    marks: 20,
    total: 25,
};

let subresult2 = {
    marks: 15,
    total: 20,
};

obj3.values.push(subresult1);

let nestedObj = {
    nestedProp: 'Nested Property',
    nestedArray: [
        {
            nestedName: 'Nested Object 1',
            nestedValues: [subresult2],
        },
        {
            nestedName: 'Nested Object 2',
            nestedValues: [],
        },
    ],
};

obj3.values.push(nestedObj);

console.log('obj3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', obj3);
console.log(
    'nestedObj!!!!!!!!!!!!!!!!!!!!!!!!!!!',
    JSON.stringify(nestedObj, null, 2)
);

// <<<<<<<<-------------------------- 1. [[ Bubble Sort without in-built method {Most asked sort question} ]] --------------------------------------------------->>>>>>>

/* 
20, 5, 1, 4, 80, 78 === i / here it will compare 20,5 (20-i ,5=j) first it will 20,20 
5, 20, 1, 4, 80, 78 === j
5, 1, 20, 4, 80, 78 === j
5, 1, 4, 20, 80, 78 === j  / here 20 is sorted and 20 is not greater than 80 then return false


20, 5, 1, 4, 80, 78 === i / here it will compare 20,5 (5-i ,1=j) 
1, 4, 5, 20, 80, 78 === j
1, 4, 5, 20, 80, 78 === j  / return false after 5 is sorted 

 */

let array = [20, 5, 1, 4, 80, 78];
let swap;

for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        if (array[i] > array[j]) {
            swap = array[i];
            array[i] = array[j];
            array[j] = swap;
        }
    }
}
console.log(array); //[ 1, 4, 5, 20, 78, 80 ]

// <<<<<<<<------------------------------------------------- 2. [[ Count Characters in String - Anagram ]] ----------------------------------------------------->>>>>>>
let string = 'hello world';

function getCountCharacters(string) {
    const histogram = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!histogram[char]) {
            histogram[char] = 0;
        }
        histogram[char]++;
    }
    return histogram;
}

console.log(getCountCharacters(string)); //{ h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// <<<<<<<<------------------------------------------------- 3. [[ Reverse String  - Way : 1  ]] ----------------------------------------------------------------->>>>>>>
const str1 = 'I can catch you up JAVASCRIPT';

function revStr() {
    // Take empty array
    const revArr = [];
    const length = str.length - 1;

    //loop from the end
    for (let i = length; i >= 0; i--) {
        revArr.push(str1[i]);
    }

    return revArr.join('');
}

console.log(revStr(str1));
// <<<<<<<<-------------------------------------------------  [[ Reverse String  - Way : 2  ]] ------------------------------------------------------------------->>>>>>>
const str2 = 'I can catch you up JAVASCRIPT';

function revStr() {
    let revStr = '';
    for (let i = str2.length - 1; i >= 0; i--) {
        revStr += str2[i];
    }
    return revStr;
}

console.log(revStr(str2));

// <<<<<<<<-------------------------------------------------  [[ Reverse String  - Way : 3  ]] ------------------------------------------------------------------->>>>>>>

const str3 = 'We are best';

function ReverseString() {
    return str3.split('').reverse().join('');
}

console.log(ReverseString(str3));

// <<<<<<<<-------------------------------------------------  [[ Reverse Array  - Way : 4  ]] ------------------------------------------------------------------->>>>>>>

let ars = [1, 2, 3, 4];
let revAr = [];

function revArr(ars) {
    for (let i = ars.length - 1; i >= 0; i--) {
        revAr.push(ars[i]);
    }
    return revAr;
}

console.log(revArr(ars)); //[ 4, 3, 2, 1 ] //[ 1, 2, 3, 4 ]

// <<<<<<<<---------------------------------------------------  [[ Reverse string in place ]] ------------------------------------------------------------------>>>>>>>

const strin = 'I can catch you up JAVASCRIPT';

function reverseInPlace() {
    return strin.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(reverseInPlace(strin));

// <<<<<<<<------------------------------------------------------  4. [[ Infinite Currying ]] ------------------------------------------------------------------->>>>>>>
//Q. USE ADD Function - console.log(add(5)(4)(3)(2)())

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(5)(4)(3)(2)()); //14

// <<<<<<<<------------------------------------------------------  [[ Implement the code ]] -------------------------------------------------------------------->>>>>>>

/* 
  const result= calc.add(10).multiply(5).subtract(30).add(10)  -> console.log(result.total)
   here we are returning this because i need to return whole object over here(cal.add.multiply are function) 
   only then we are going able to access the more of function of the object (calc)

 */

const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a;
        return this;
    },
    multiply(a) {
        this.total = this.total * a;
        return this;
    },
    subtract(a) {
        this.total = this.total - a;
        return this;
    },
};

const results = calc.add(10).multiply(5).subtract(30).add(10); //30
console.log(results.total);

// <<<<<<<<--------------------------------------------------- 5. [[ Remove Duplicate Item From Array]] ---------------------------------------------------------->>>>>>>
//Brute Force Algo
const aa = [1, 2, 1, 2, 3, 4, 5];
const bb = [];
const len = aa.length;

for (let i = 0; i < len; i++) {
    if (bb.indexOf(aa[i]) === -1) {
        // before pushing to bb , it will check the element is present or not.
        bb.push(aa[i]);
    }
}
console.log(bb);

// <<<<<<<<--------------------------------------------  [[ Remove Duplicate Item From Array -Way : 2]] --------------------------------------------------------->>>>>>>

const aaaaa = [1, 2, 1, 2, 3, 4, 5, 6, 7, 7, 6];
const resultUniqueValues = [...new Set(aaaaa)];
console.log(resultUniqueValues);

// <<<<<<<<------------------------------------------------------ 6. [[ Promise - Way : 1 ]] --------------------------------------------------------------------->>>>>>>

const callMe = new Promise((resolve, reject) => {
    if (true) {
        resolve('Resolve');
    } else {
        reject('Reject');
    }
});
callMe
    .then((result) => {
        console.log(result); //Resolve
    })
    .catch((error) => {
        console.log(error);
    });
// <<<<<<<<------------------------------------------------------  [[ Promise - Way : 2 ]] ---------------------------------------------------------------------->>>>>>>

const f = () => {
    return 'I am f';
};
const g = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I am g');
        }, 3000);
    });
};

const h = () => {
    return 'I am h';
};

const callMine = async () => {
    let ff = f();
    console.log(ff);

    let gg = await g();
    console.log(gg);

    let hh = h();
    console.log(hh);
};
callMine(); // I am f ->  I am g -> I am h

// <<<<<<<<------------------------------------------------------ 7. [[ Factorial of number ]] -------------------------------------------------------------------->>>>>>>

function factorial(n) {
    let fact = 1;
    if (n == 0 || n == 1) {
        return fact;
    } else {
        for (let i = n; i >= 1; i--) {
            fact = fact * i;
        }
        return fact;
    }
}

const resultt = factorial(5);
console.log(resultt);

// <<<<<<<<---------------------------------------- 8.  [[ Check how many times an Element appears in an Array ]] ---------------------------------------------------->>>>>>>

const arrCount = ['a', 'b', 'a', 'a'];
let count = 0;

arrCount.forEach((element) => {
    if (element === 'a') {
        count += 1;
    }
});

console.log(count);

// <<<<<<<<------------------------------------------------------  [[ Sort an array - Way : 2]] -------------------------------------------------------------------->>>>>>>
const arri = [1, 5, 2, 4, 3];
const result = arri.sort((a, b) => {
    return a - b;
});
console.log(result); //[ 1, 2, 3, 4, 5 ]

// <<<<<<<<<<<<<<<----------------------------------------------- 9. [[ Sum of Array elements :- Anonymous Function ]] --------------------------------------------->>>>>>>
const value = [1, 2, 3, 4, 5];
const arraySum = function (value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum = sum + value[i];
    }
    return sum;
};

let resultss = arraySum(value);
console.log(resultss);

// <<<<<<<<<<<<<<<----------------------------------------------   [[ Multiply numbers in an array using for loops ]] ---------------------------------------------->>>>>>>
const ari = [2, 2, 3, 4];

const multiply = (ari) => {
    var pro = 1;
    for (i = 0; i < ari.length; i++) pro = pro * ari[i];
    return pro;
};

console.log(multiply(ari)); //48

//2nd-way
const pro = arr.reduce((a, b) => a * b, 1);

console.log(pro); // 48

// <<<<<<<<<<<<<<<----------------------------------------------------  10. [[ Swap two numbers with temp ]] -------------------------------------------------------->>>>>>>
var a = 1;
var b = 2;
var temp; // way-1

temp = a;
a = b;
b = temp;
console.log(a, b); //2,1

let a = 1;
let b = 2;

[a, b] = [b, a]; // Destructuring way -2
console.log(a, b); //2,1

// <<<<<<<<<<<<<<<---------------------------------------------   [[ Swap two numbers using  Arithmetic Operators]] ------------------------------------------------->>>>>>>

let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // Arithmetic way -3

// <<<<<<<<<<<<<<<------------------------------------------- 11. [[ Flatten the  Array without predefined function]] ------------------------------------------------>>>>>>>

/*
https://www.youtube.com/watch?v=abbdJ4Yfm54  - Flatten array + setTimeout best question 

 - recursion
 - we have empty result array(result)
 - here we are mapping whole array(arr) with forEach loop
 - 'ar' first in loop it will encounter first arr [1,2] then it will check is it array [here it find it's an array and depth is 1 by default]
 - 'result.push' [1,2] now depth becomes 0  here it will check 1 is it array - no because depth is 0 and then move to else statement push to result and same for 2 in array
 - [1,2] in loop it is checking 1 is array or not if not push to result then 2 it will check

 */

const arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12],
];

function customFlat(arr, depth = 1) {
    let result = [];
    arr.forEach((ar) => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...customFlat(ar, depth - 1));
        } else result.push(ar);
    });
    return result;
}

console.log(customFlat(arr, 2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(customFlat(arr)); //[1, 2, 3, 4, 5, 6, [7, 8], 9, 10, 11, 12];

// <<<<<<<<<<<<<<<-----------------------------------------------------   [[ Explian Call Apply and Bind ]] -------------------------------------------------------->>>>>>>
var person = {
    name: 'Dhananjay',
    hello: function (thing) {
        console.log(this.name + ' says hello ' + thing);
    },
};

var alterEgo = {
    name: 'iTech dhananjay',
};

person.hello.call(alterEgo, 'world'); //iTech dhananjay says hello world - call needs an object as params
person.hello.apply(alterEgo, ['world']); //iTech dhananjay says hello world - apply will take args in array

const newHello = person.hello.bind(alterEgo);
newHello('world'); //iTech dhananjay says hello world - bind doesn't take the 2nd param - bind will return a function

// <<<<<<<<<<<<<<<--------------------------------------------------------------- [[  Promise.all ]] ------------------------------------------------------------->>>>>>>
function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text, time);
        }, 1000);
    });
}

// if one promise fails all promise gonna failed
Promise.all([
    showText('Hello', 1000),
    Promise.resolve('Hi'),
    Promise.reject('Bye'),
])
    .then((value) => {
        console.log(value); //[ 'Hello', 'Hi', 'Bye' ] reject ->  resolve or else uncaught error
    })
    .catch((err) => {
        console.log(err);
    });

// <<<<<<<<<<<<<<<------------------------------------------------- [[  Create a two dimensional array  ]] --------------------------------------------------------->>>>>>>

function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 2;
const y = 3;

const resulti = twoDimensionArray(x, y);
console.log(resulti); //[ [ 0, 1, 2 ], [ 0, 1, 2 ] ]

// <<<<<<<<<<<----------------------------------------------- [[  Merge Two Arrays and Remove Duplicate Items ]] ---------------------------------------------------->>>>>>>

const array1 = [1, 2, 3];
const array2 = [2, 3, 5];

function getUniqueAfterMerge(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(getUniqueAfterMerge(array1, array2)); //[ 1, 2, 3, 5 ] - also we can use for ...of loop to achieve this

/* 
   Using the RegExp() constructor function:
   You can also create a regular expression by calling the RegExp() constructor function. For example,
   const reguarExp = new RegExp('abc');
   For example,
 */

const regex = new RegExp(/^a...s$/);
console.log(regex.test('alias')); // true

/*
   Q. JavaScript Program to Shuffle Deck of Cards
   Q. JavaScript Iterators and Iterables - Programiz both the quest
   Q. JavaScript Regex
   Q.Array rotation 
*/
const arrii = [1, 2, 3, 4, 5];
const randomIndex = Math.floor(Math.random() * (arrii.length - 1)) + 1;
const randomValue = arrii[randomIndex];
console.log(randomValue);
/* 

Welcome  Dhananjay Kumar, Your Acknowledgement Number is 133642690M Please Note the same.

133642690M 
133642690M

*/
