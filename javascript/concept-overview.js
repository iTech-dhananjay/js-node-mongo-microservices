// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All concepts]] ------------------------------------------------>>>>>>>>>>>
/* 
=> clg for console.log
=> MongoDB connections

**************

  1. Increment (++)
  2. Temporal Dead Zone
  3. Call back Hell , Inversion of Control - Call Back
  4. Promises - Creating Promise, Chaining , Error Handling
  5. Event Loop, Callback Queue, Microtask Queue
  6. The Scope Chain, 🔥Scope & Lexical Environment
  7. Functions Types & Higer Order Function
  8. Closures
  9. Objects {}
  10. IIFE (Immediately Invoked Function Expression)
  11. Currying
  12. Prototype and Prototypal Inheritance


**************

  13. Undefined vs Not defined
  14. Rest vs Spread Operator
  15. ['this'] keyword
  16. call() apply() & bind()
  17. Promise
  18. Async/Await
  19. Closures

*/

const mongoose = require('mongoose');
mongoose
    .connect(process.env.DATABASE_CLOUD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

//Tricky
const val = [1, 2, 3, 4, 5];
val[10] = 6;
console.log(val.length); //11
console.log(val); //[ 1, 2, 3, 4, 5, <5 empty items>, 6 ]
const arrays = [];
console.log(typeof arrays); //object

// <<<<<<<<<<<<<<<------------------------------------------------ 1. [[ Increment (++) ]] ----------------------------------------------------->>>>>>>>>>>
/*-
     ->  The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed. 
     -> y is operand and  ++ is operator 
     -> ++ (y = ++x) : Prefix : means first the value of x is increase by 1 and so, x become 6 and then it will assign to 6 as y
     -> ++ (b = a++) : Postfix : means a=5 initially when b = a++ means value of a already assign to b as 5 and then increment the value of a
 */

let x = 5;
let y;
y = ++x;
console.log(x); //6
console.log(y); //6

let a = 5;
let b;
b = a++;
console.log(a); //6
console.log(b); //5


let a = 5;

console.log(++a) //6
console.log(a++) //6
console.log(++a) //8
/* 


// <<<<<<<<<<<<<------------------------------------------------ 2. [[  Temporal Dead Zone ]] ---------------------------------------------------->>>>>>>>>>>

console.log(a)
let a=10

==> line 15 hasn't been executed but variable are hosted (a) in a separate space or memory (Script) and it was also assigned undefined but it has not been initialized 
        - this phase is called temporal dead zone until it goes to line no. 16 and temporal zone is ended
  
==> Temporal dead zone is a time since when let or const value is hoisted and till it is assigned some values.


1.  let and const are hoisted. we can't use them before initialization is result of "temporal dead zone" 
      && JS use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
2.  level of strictness ... var<<let<<const.

3.  var //no temporal dead zone, can redeclare and re-initialize, stored in GES
4.  let 
      //use TDZ, can't re-declare, can re-initialize, stored in separate memory 
   const 
     //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
   
     
5. syntax error is similar to compile error. while type and reference error falls under run time error.
-> syntax error ... violation of JS syntax
    type error ...  while trying to re-initialize const variable
    reference error ... while trying to access variable which is not there in global memory.

*/

console.log(x); //Reference Error : 'x' is not defined
console.log(a); //Reference Error : Cannot access 'a' before initialization
let a = 10;
let a = 100; // Syntax Error : Identifier 'a' has already been declared
const b = 1000;
b = 10000; // Type Error : Assignment to constant variable.

// <<<<<<<<<<<<<------------------------------------------------ 3. [[  Call back hell ]] --------------------------------------------------------->>>>>>>>>>>
/* 

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
     
      Call back hell - unreadable and unmaintaible - that's why called Pyramid of Doom
      Inversion of Control :  
       - Is when you lose control of your code when u are using cb
       - Whenever we have cb function and pass it to some other function means we are giving control of this function to some other 
         function - that leads what if prev function won't return anything
 */

console.log('Hello 1.0');
setTimeout(function () {
    //we gave cb f(n) to setTimeout
    console.log('Hello 2.0');
}, 5000);

const carts = ['shoes', 'boots', 'kurta'];

let api;
api.createOrders(carts, function (orderId) {
    api.proceedToPayment(function (orderId) {
        //cb hell- inside cb f(n) - again cb f(n) - nested
        api.showOrderSummary(function () {
            api.updateCartBalance();
        });
    });
});

// <<<<<<<<<<<<<--------------------------------------------------- 4. [[  Promises ]] ------------------------------------------------------------>>>>>>>>>>>
/* 

1. What are Promises?
     - The Promise is an object represents the eventual completion (or failure) of an asynchronous operation.[Best🫡]
     - They are just like placeholders to store a future value that will be returned after some time.
     - They contain two properties: PromiseState [ Pending ,Fulfilled ,Rejected] and PromiseResult.
     * Promises are immutable so it can't be altered 

2. Importance of Promises:
    a) Promises can help us to write trust worthy code.
    b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
    c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
    d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
    e) Nesting can be done in Promises and with the help of that we can return the values in each individual chain.

const GITHUB_API = ' https://api.github.com/users/itech-dhananjay';
const user = fetch(GITHUB_API);
console.log(user);

*/

// <<<<<<<<<<<<<------------------------------------------------- [[  Promises Miscellaneous ]] --------------------------------------------------->>>>>>>>>>>

const cart = ['shoes', 'shirts', 'jeans'];

// Promise Chaining
// attaching catch with cb f(n) to handle errors in promise
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    });

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //create order , validate order , return orderId
        if (!validateCart(cart)) {
            const error = new Error('Cart is not valid');
            reject(error);
        }
        // const orderId = DBcall.getOrderById()
        const orderId = '12345';
        //   if (orderId) {
        //        setTimeout(function () {
        //             resolve(orderId);
        //        }, 2000);
        //   }

        if (orderId) {
            resolve(orderId);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve('Payment Successful');
    });
}

function validateCart(cart) {
    return true;
}

// <<--------------------------- 5. [[  EVENT LOOP  [ Microtask Queue has higher priority that Callback Queue or Task Queue ]]] -------------------------->>>>

/* 
    1. Javascript is synchronous single threaded language and it has one call stack [Present in JS Engine] and it can do one thing at a time. 
       & all the code of javascript is executed in the call stack (quickly executed whatever code comes in call stack)
    2. Whenever any JS program is run, a Global Execution Context (GEC) is created and put GEC in call stack. 
       & In GEC, now the whole code is run line by line 
    3. 'window' as global object in web-api has access to setTimeout, console, localStorage, location, fetch, web-api without window keyword as it's global

    2nd part - How Event Listeners works in JS...???? Microtask Queue has higher priority that Call back queue
    -> setTimeout register inside web api environment.
    4. whatever you call with document. eg. document.addEventListner() as part of web api as - [ DOM api]
    5. Event Loop has one job - Continuosly monitor call stack as well as callback queue, if this call stack is empty and This Event loop sees that 
       there is also a f(n) waiting to executed inside Call back Queue , it just takes the function and push it inside call stack. then call back method 
       get quickly executed & also Call back queue is quikly cleared.
    6. fetch() (goes and request a api call or network calls ) function retuns a promise
    7. Microtask Queue 
                 - Promises
                 - Mutation Observer
*/

console.log('Start');
setTimeout(function cb() {
    console.log('Callback');
}, 5000);

console.log('End');


// <<<<----------------------------------- 6. [[   The Scope Chain, 🔥Scope & Lexical Environment [Do it later]  ]]] ----------------------------------->>>>>>>
/* 
  To concise things:

0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.
1) Lexical Environment of its parent is the scope where a function is physically present or defined. So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is pushed in the call stack, it stores a reference to its parent's lexical environment i.e. the GEC's memory.
2) Whenever a new Execution Context is pushed in the Call Stack it holds a reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.
3) Global execution context holds reference to null.
4)  Javascript engine first looks for the variable/function being accessed in the local scope of the function, and if not found, it keeps on searching the lexical environment of its parent until it finds the variable/function being accessed.
5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.
6) If the variable accessed is not found in the Scope Chain, then you will get the variable is not defined error in the  browser's console.

function a() {
     console.log(b);
}
b = 10;
a(); // function a is invoked


function a() {
     c();
     function c() {
          console.log(b); //10
     }
}
b = 10;
a();

*/

/* 
1. Scope is directly dependent on the lexical environment
2. Whenever executin context is created ( memory + code) a lexical environment is also created 
3. Lexical environment is local memory along with lexical environment of its parent (a function is parent to c functin which is lying in a f(n))



*/

/* 
   1. When we run this program a Global Execution Context is created and it is push on to the call stack
     - GEC has memory and code - it wil assign value to function a in GEC of call stack - a {}
     - when a function is invoked , a execution context is created and now this function a will reserve memory for b and function c
     - initially b has value undefined and c will be set to function reference and once code start executing b become = 10;
     - again c is function - the a execution context is created -(a chain of lexical enviroment is callled scope chain) this chain is called Scope chain
     - a function is lexically to global environment - a pysically sits in global environement similart c function present in a function

 */

function a() {
    var b = 10;
    c();

    function c() {
    } // c function is lexically sitting in a function - lexical basically call sequence or herarchys
}

a();
// b is not defined as when we put var in block scope it behaves like block scope only so it is not defined
console.log(b); // Reference Error : b is not defined

// <<<<<<<<<<<<<-------------------------------------------- 7. [[ Functions Types ]] -------------------------------------------------------->>>>>>>>>>>
/* 
 1.  Function Statement aka Function Declaration - Hoisting diffrence b/w F(n) Statement & b/w F(n) Expression
 2.  Function Expression
 3.  Anonymous Function
 4.  Named Function Expression
 5.  Difference b/w Parameters and Arguments?
 6.  Higher Order Functions
 7.  Arrow Functions


*/

//1.
function a() {
    console.log('a called');
}

a();

//2.Function act as a value
const b = function () {
    console.log('b called');
};
b();

//3. A f(n) has no name - this is used when function is used as value like function expression

//function(){
console.log(
    'return syntax error: - Functions statements requires a function name'
);
//}

//4.
const b = function xyz() {
    console.log(xyx); //you function inside the f(n)
};
b();
xyz(); // wrong

//5.
const b = function (param1, param2) {
    // parameters
    console.log('b called');
};
b(1, 3); //arguments pass- The value which pass inside a function called arguments

//6.
const b = function (param1, param2) {
    return function () {
        console.log('b called');
    };
};

function xyz() {
    console.log(xyx);
}

b(xyz()); // Pass functions as arguments or another function or return a function inside a function callled First-class-function

//7.First class function - function that is treated as variable it can do everything same as variable do .. pass as variable

function squareTwo(num) {
    return num * num;
}

function displaySquareTwo(fn) {
    console.log('Square is', fn(5));
}

displaySquareTwo(squareTwo);

// <<<<<<<<<<<<<-----------------------------------------------  [[Functional Programming]] ------------------------------------------------------>>>>>>>>>>>

/* 

1. We learnt how functions work in JS.
2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
3. In the first phase, the variables are assigned "undefined" while functions have their own code.
4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
5. Once the function ends, the EC is removed from the call stack.
6. When the program ends, even the global EC is pulled out of the call stack.

*/
var x = 1;
a(); // function invoked before initialize because of hoisting
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

/* 
10;
100;
1
 */

// <<<<<<<<<<<<<-----------------------------------------------  [[ Higher Order functions ]] ----------------------------------------------------->>>>>>>>>>>

/* 
A f(n) which takes another f(n) as an argument or returns functions from it - Higher Order functions
*/

function x() {
    // x is call-back function
    console.log('X is called');
}

function y(x) {
    // y is higher order function

    x();
}

y(x);
////////////////////////////////calculate the area,circumfrence and diameter of these 4 circles
const radius = [1, 3, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function (radius, logic) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// <<<<<<<<<----------------------------------------  [[ Higher Order functions : [ Map , Filter , Reduce]]] ---------------------------------------->>>>>>>>>
const arr = [1, 2, 3, 4, 5, 6];

// Double && Binary["1","10","11","100","101","110"]

//Map()
const doubleArray = arr.map((double) => {
    return double * 2;
});
console.log(doubleArray); // map : it will create a new array basically mapping each and every values of array and return new array

const binaryArray = arr.map((binary) => {
    return binary.toString(2);
});

console.log(binaryArray);

//filter() odd values from array

/* 
function isEven(x){
     return x%2===0
}
const output = arr.filter(isEven);

//OR
const output = arr.filter((x)=> x > 4)
*/

const filterValue = arr.filter((odd) => {
    return odd % 2;
});

console.log(filterValue); //[1,3,5]

//reduce - we have to use where we have to take whole elements of array and return a single value of it

//find sum - traditional way
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

//2nd way - with reduce
const outputA = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(outputA);

//find max- traditional way

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr)); //6

//find max- with reduce function

const outputB = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(outputB);

////////
const users = [
    {firstName: 'Dhananjay', lastName: 'Kumar', age: 25},
    {firstName: 'Soumen', lastName: 'Pramanick', age: 26},
    {firstName: 'Rohit', lastName: 'Singh', age: 35},
    {firstName: 'Abhay', lastName: 'Singh', age: 38},
];

//list of full names
const outputt = users.map((user) => user.firstName + ' ' + user.lastName);
console.log(outputt);

// we need to return as object from array so we use reduce -  acc = { 22 : 1, 25 :2 , 35 : 1, 38: 1 }
// bcause of no date present in it so we pass initial value to empty object

const outputC = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }

    return acc;
}, {});
console.log(outputC); //{ '22': 1, '25': 2, '26': 1 }

/////////
// first name of all users whose age is less than 30
const outputD = users
    .filter((userAge) => userAge.age < 30)
    .map((user) => user.firstName);

console.log(outputD); //[ 'Dhananjay', 'Soumen' ]

// <<<<<<<<<<<<<------------------------------------------------ 8. [[ Closures ]] --------------------------------------------------------->>>>>>>>>>>
/*
    =>  Prime Definition - The ability of function to access variables or functions that are lexically out of scope are called closures
    =>  Closure definition: A function bound together with its lexical environment. This means an inner nested function has access to its parents' lexical scope,
                            and is able to remember variables the were declared in that environment, even after that functions has been removed from the call stack.

    =>  Uses of Closures
        - Module Design Pattern
        - Currying
        - memoize
        - setTimout
        - Maintain state in async world
*/

function x() {
    var a = 7;

    function y() {
        console.log(a); //7

        /*
        JS is having something called lexical scope when you execute and y tries to run  and it try to find a in local memory store
          and it doesn't find it so it goes to its lexial parent  x f(n)
         */
    }

    y();
}

x();

//2nd
function x() {
    var a = 7;

    function y() {
        console.log(a); //100 - a is refrence to var a not value - that is closure
    }

    x = 100;
    return y;
}

var z = x();
console.log(z);

// Interview questions with setTimout and Closures
// Q.1
//Q.2

function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log('Namaste JavaScript');
    // o/p -> Namaste JavaScript then print 1 after 3 sec
    // setTimeout is part of web api as it does not wait for setTimout to execute it will run(Time ,Tide and JS wait for none)
    // The innner function has access to outer f(n) [Lexical environment or outer enviroment] or variable , this forms closures
}

x();

//Q.2
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); //6
            // for let it's behave differently as it is blocked-scope and it created a new copy everytime and in var it refrence to same memory
        }, i * 1000);
    }
    console.log('Namaste JavaScript');
}

x(); // 6 ,6 ,6, 6, 6, 6

//Q.3
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x); //
            }, x * 1000);
        } //here it creates a new copy when loop is in run
        close(i);
    }
}

x(); // 1,2,3,4,5,6

//Q4.
function outer() {
    var i = 5;

    function inner() {
        console.log(i);
    }

    return inner;
    // we can access outside the function , it still remember what the value of a was.
}

outer()(); // An inner function can be directly called using two parenthesis ()().

// 1. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
// 2. Unused variables are automatically deleted in High Level Programming language by garbage collector.
//Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
// 3. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.

// <<<<<<<<<<<<<-----------------------------------------------  [[ Functions Hoisting ]] ------------------------------------------------------>>>>>>>>>
var x = 21;
var fun = function () {
    console.log(x); //undefined
    var x = 20;
};
fun();

/* 
   In Global Scope we have x = 21 but inside our local scope (as function create separate execution context for that function (here fun))
   It will initialize the global scope and then again it  initialize the variable in local scope as well - first hoist the variable (console.log(x)-undefined)
 */

// <<<<<<<<<<<<<-------------------------------------------  [[ Spread vs Rest Operator  ]] --------------------------------------------------->>>>>>>>>>>
//Q1.
function multiply(...nums) {
    //Rest Operator
    console.log(nums[0] * nums[1]);
}

const values = [5, 6];
multiply(...values); //spread operator

//Q2.
const fn = (a, x, y, ...numbers) => {
    console.log(x, y, numbers);
};
fn(1, 2, 3, 4, 5);

// <<<<<<<<<<<<<------------------------------------------------ 9. [[ Objects {} ]] ----------------------------------------------------------->>>>>>>>>>>
/* 

1.  An object is a collection of properties, and a property is an association between a name (or key) and a value. 
      A property's value can be a function, in which case the property is known as a method.

 */

// Level -1
const user = {
    name: 'Dhananjay',
    age: 35,
    value: deleteMe,
};
delete user.value; // it will delete properties(value) of user object

console.log(user);

// Level -2
const func = (function (a) {
    // here a is local variable , delete keyword is only use when we want to delete property of any object not a local variable ,here not affect a at all.
    delete a;
    return a;
})(5);
console.log(func); //5

//Level-3

// <<<<<<<<<--------------------------------- 10. [[ IIFE (Immediately Invoked Function Expression) ]] ------------------------------------------------>>>>>>>>>

(function squareThree(num) {
    console.log(num * num);
})(5); // wrap into parenthesis call it right away no need to invoke function is called IIFE

//Q1.
(function (x) {
    return (function (y) {
        console.log(x); //1 - it gonna srch in inner scope first and when it doesn't gonna find x in inner scope
        //and then again it srch for x in it's parent scope and x exits - this happens because of closure
    })(2);
})(1);

// <<<<<<<<<<<<<----------------------------------------------------- 11. [[ Currying  ]] ----------------------------------------------------------->>>>>>>>>>>
/* 
   - Currying function takes one function at a time returning a new function  expecting a next argument
 */

// function(a,b) -> function(a)(b) this is currying function
function a(a) {
    return function (b) {
        return `${a} ${b}`;
    };
}

console.log(a(5)(6));


// <<<<<<<<<--------------------------------- 12. [[ Prototype and Prototypal Inheritance in Javascript]] ------------------------------------------------>>>>>>>>>

/* 
ONE OBJECT TRYING TO GET THE PROPERTIES OF OTHER OBJECTS
 */
let objectOne = {
    name: 'Dhananjay',
    city: 'Noida',
    getIntro: function () {
        console.log(this.name + 'from' + this.city);
    },
};

let objectTwo = {
    name: 'Dhananjay-Update',
};

objectTwo.__proto__ = objectOne; // objectTwo.city = 'Noida' - 2nd object as access two first object


//  => Objects are not compared by value: two objects are not equal even if they have the same properties and values.
//     This is true of arrays too: even if they have the same values in the same order.

var o = {x: 1},
    p = {x: 1}; // Two objects with the same properties
o === p; // => false: distinct objects are never equal
var a = [],
    b = []; // Two distinct, empty arrays
a === b; // => false: distinct arrays are never equal


// <<<<<<<<<<<<<----------------------------------------- 13. [[  Undefined vs Not defined  ]] ----------------------------------------------------->>>>>>>>>>>
/*

  -  Undefined is like a placeholder till a variable is not assigned a value.
  -  undefined !== not defined
  -  JS- weakly or loosely typed language since it doesn't depend on data type declarations


memory is already allocated to 'a'
console.log(x); // Reference Error , x is not defined
console.log(a); // undefined
var a = 7;
console.log(a); // 7


var a;
if (a === undefined) {
     console.log('a is undefined');
} else {
     console.log('a is not defined');
}

*/

var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
a = 'Hello World'; //loosely typed-language as it can store undefined,number, string sometimes,javascript is called loosely typed language.
console.log(a); //Hello World
a = undefined; // not a good practice to do this


// <<<<<<<<<<<<<----------------------------------------- 14. [[  Rest vs Spread Operator  ]] ----------------------------------------------------->>>>>>>>>>>

/* Rest Operator (...)
 1. Usage in Function Declarations
     - The rest operator can be used in both function declarations and function expressions.

 2. No Need for arguments Object
     - The rest operator provides a more modern and concise way to handle variable arguments compared to the older arguments object.
* */
function exampleFunction(arg1, arg2, ...restArgs) {
    console.log(arg1);      // 1
    console.log(arg2);      // 2
    console.log(restArgs);  // [3, 4, 5]
}

exampleFunction(1, 2, 3, 4, 5);

function exampleFunction(...args) {
    console.log(args); // [1, 2, 3, 4, 5]
}

exampleFunction(1, 2, 3, 4, 5);


// Spread Operator (...)
/*
* 1. Usage with Arrays:
*     - Used to spread the elements of an array into another array.

* 2. Usage with Objects:
*     - Used to spread the properties of an object into another object.

* */
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3, d: 4};


const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const combinedArray = [...arr3, ...arr4];

/* [[ Key Differences ]]
Rest Operator:
     =>   Used in function parameters to collect arguments into an array.
     =>   Particularly useful for functions with a variable number of arguments.
     =>   Does not allow default values.

Spread Operator:
     =>   Used with arrays and objects to spread elements or properties into another array or object.
     =>   Efficient for creating copies of arrays and objects and merging multiple arrays or objects.
     =>   Promotes immutable operations when creating copies.
* */

// <<<<<<<<<<<<<----------------------------------------------------- 15. [[ this keyword  ]] ------------------------------------------------------->>>>>>>>>>>

/*
   - In JavaScript, this keyword refers to the object where it is called. Arrow functions do not have their own this
    1. this Inside Global Scope :
            - When this is used alone, this refers to the global object (window object in browsers). For example, let a = this;  console.log(a);  o/p -> Window {}
              || this.name = 'Sarah'; console.log(window.name); o/p -> Sarah

    2. this Inside Function  :
            - When this is used in a function, this refers to the global object (window object in browsers). For example,

    3. this Inside Constructor Function
            - In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, this refers to the object inside
              which it is used. For example-
    4. this Inside Object Method
            - When this is used inside an object's method, this refers to the object it lies within. For example,



* */

function greet() {
    // this inside function        [[2.this Inside Function ]]
    // this refers to the global object
    console.log(this);
}

greet(); // Window {}

function Person() {
    this.name = 'Joe'
    console.log(this)          // [[ 3.this Inside Constructor Function ]]
}

let person1 = new Person()
console.log(person1.name) //Here, this refers to the person1 object. That's why, person1.name gives us Jack.


//VVI
const person = {
    name: 'Jack',
    age: 25,

    // this inside method        [[ 4. this Inside Object Method ]]
    // this refers to the object itself
    greet() {
        console.log(this);
        console.log(this.name);
    }
}

person.greet();  //  {name: "Jack", age: 25, greet: ƒ}  || Jack   => In the above example, this refers to the person object.


// <<<<<<<<<<<<<----------------------------------------- 16. [[ call() apply() && bind()  ]] ----------------------------------------------------->>>>>>>>>>>

/*
     =>  Working with JavaScript “this” keyword can be tricky. Not knowing the background rules may end up with the famous “it works, but I don’t know why” or worse: “it doesn’t work and
         I don’t know why”. It’s good to know the theory before putting things into practice. Call(), Apply() and Bind() methods can come in handy when setting the “this” value.

     =>  Basic rules worth remembering :
           1. -> “this” always refers to an object.
           2. -> “this” refers to an object which calls the function it contains.
           3. ->  In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

* */

var car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function () {
        console.log(this.registrationNumber + " " + this.brand);
    }
}

/*
    - The above will work perfectly fine as long as we use it this way: car.displayDetails(); // GA12345 Toyota
    - But what if we want to borrow a method?
           var myCarDetails =  car.displayDetails;
           myCarDetails();
    - Well, this won’t work as the “this” will be now assigned to the global context which doesn’t have neither the registrationNumber nor the brand property.

     The bind() Method - This means bind() can be used by every single function.
     var myCarDetails = car.displayDetails.bind(car);
     myCarDetails(); // GA12345 Toyota

    - The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”.
      This way the bind() method enables calling a function with a specified “this” value.
    - What if we would like to pass a parameter to the displayDetails function? We can use the bind method again.
      The following argument of the bind() method will provide an argument to the function bind() is called on.
* */

var car = {
    registrationNumber: "GA12345",
    brand: 'Toyota',
    displayDetails: function (ownerName) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

/*
     1. Borrowing Method and Calling It : bind()
     => Explanation: In this example, we are borrowing the displayDetails method from the car object and binding it to the car object itself.
                     The bind method returns a new function with the specified context (this value) and initial arguments. Here, we set the owner name to "Vivan".
                     By calling myCarDetails(), we execute the method in the context of the car object, and the output will be logged to the console.
* */

// When we have to borrow a method of one object and call it in another context
var myCarDetails = car.displayDetails.bind(car, "Vivan")
myCarDetails()


/*
     1. Borrowing Method Without Calling It: call and apply
     => Explanation: In this example, we are using the apply or call method to borrow the displayDetails method from the car object.
                     Both apply and call allow us to set the context (this value) and pass arguments to the method. However, in this case, we are not immediately calling the method.
                     This is useful when you want to store a reference to the method with specific arguments for later use. If you later decide to execute the method,
                     you can do so by calling myCarDetails(), and the output will be logged to the console.
* */


// When we want to borrow a method without immediately calling it
var myCarDetails = car.displayDetails.apply(car, ["Vivan"])

//OR
var myCarDetails = car.displayDetails.call(car, "Vivan")

// <<<<<<<<<<<<<--------------------------------------------------- 17. [[  Promises ]] ------------------------------------------------------------>>>>>>>>>>>
/*
1. What are Promises?
     - The Promise is an object represents the eventual completion (or failure) of an asynchronous operation.[Best🫡]
     - They are just like placeholders to store a future value that will be returned after some time.
     - They contain two properties: PromiseState [ Pending ,Fulfilled ,Rejected] and PromiseResult.
     - Promises are immutable so it can't be altered
* */

// Q-1 -----------------------
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("foo")
    }, 2000)
})
myPromise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

// Q-2 -----------------------
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 3000);
});

const p4 = new Promise((resolve, reject) => {
    reject(new Error("reject"));
});
Promise.all([p1, p2, p3, p4])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error.message); //OP - reject

    });


// <<<<<<<<<<<<<--------------------------------------------------- 18. [[ Async/Await ]] ------------------------------------------------------------>>>>>>>>>>>
/*
*  -  Async functions and the await keyword provide a more concise and readable way to write asynchronous code, especially when dealing with Promises.
   -  async keyword: It is used to define an asynchronous function, which returns a Promise implicitly. Within an async function,
            you can use the await keyword to pause the execution of the function until the Promise is resolved.
   -  await keyword: It is used to pause the execution of an async function until the Promise is resolved. It can only be used inside an async function.
   -  In the fetchDataWrapper function, await fetchData() pauses the execution until the Promise returned by fetchData() resolves. This makes the code look
            synchronous while still being asynchronous under the hood. This approach improves readability and makes asynchronous code easier to understand and maintain.
* */

async function fetchData() {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async/Await Check')
        }, 2000)
    })
}

async function fetchDataWrapper() {
    const data = await fetchData()
    console.log(data)
}


// <<<<<<<<<<<<<------------------------------------------------ 19. [[ Closures ]] --------------------------------------------------------->>>>>>>>>>>
/*
    =>  Prime Definition - The ability of function to access variables or functions that are lexically out of scope are called closures
    =>  Closure definition: A function bound together with its lexical environment. This means an inner nested function has access to its parents' lexical scope,
                            and is able to remember variables the were declared in that environment, even after that functions has been removed from the call stack.

    =>  Uses of Closures
        - Module Design Pattern
        - Currying
        - memoize
        - setTimout
        - Maintain state in async world
*/