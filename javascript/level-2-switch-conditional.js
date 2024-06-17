function calc(n1, n2, operation) {
    let result;
    switch (operation) {
        case 'add' :
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
            break;
        case 'mul':
            result = n1 * n2;
            break;
        default:
            result = 'Invalid operation';
            break;
    }
    return result;
}

let n1 = 5;
let n2 = 6;

console.log(calc(n1, n2, 'add')); // Output: 11


// <<<<<<<<<<<--------------------------------------------- 1. [[  Conditional Statement : Level -1  ]] ------------------------------------------------->>>>>>>>>>

// Set balance and price of item -> Check if there is enough funds to purchase item

let itemPrice = 75;
let cartBalance = 50;

if (cartBalance >= itemPrice) {
    console.log('Balance is up ! You can buy an item');
} else {
    console.log('Balance is low ! Sorry');
}

// <<<<<<<<<<<--------------------------------------------- 2. [[  Conditional Statement : Level -2  ]] ------------------------------------------------->>>>>>>>>>

//JavaScript will attempt to run all the statements in order, and if none of them are successful, it will default to the else block
// Grade of 90 and above is an A : Grade of 80 to 89 is a B :  Grade of 70 to 79 is a C

let Grade = 20;

if (Grade >= 90) {
    console.log('Congrats ! You have Grade : A');
} else if (Grade > 80) {
    console.log('Congrats ! You have Grade : B');
} else {
    console.log('OK ! You have Grade : C');
}

// <<<<<<<<<<<---------------------------------------- 3. [[  Conditional Statement : Ternary Operator - 1  ]] ------------------------------------------->>>>>>>>>>

let age = 18;
const oldAge = age > 20 ? 'Age is above 20' : 'Age is below 20';
console.log(oldAge);

// <<<<<<<<<<<------------------------------------------ [[  Conditional Statement : Ternary Operator - 2  ]] -------------------------------------------->>>>>>>>>>
// program to check if number is positive, negative or zero
let number = 9;
const checkNumber =
    number >= 0
        ? number == 0
            ? 'Number is zero'
            : 'Number is positive'
        : 'Number is negative';
console.log(checkNumber); //Number is positive

// <<<<<<<<<<<------------------------------------------- 4. [[  Conditional Statement : 'switch' case  ]] ------------------------------------------------->>>>>>>>>>
let color = 'green';

switch (color) {
    case 1:
        if (color === 'red') {
            //  return false;
        }
        break;

    case 2:
        if (color === 'green') {
            // return true;
        }
        break;

    default:
        break;
}
console.log('You match with color : ', color); //You match with color :  green

// <<<<<<<<<<<--------------------------------------------- 5. [[  Conditional Statement : 'continue' ]] --------------------------------------------------->>>>>>>>>>

//The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

for (let i = 1; i <= 5; i++) {
    // condition to continue
    if (i == 3) {
        continue;
    }

    console.log(i); // 1 2 {skip->3} 4 5
}

// <<<<<<<<<<<------------------------------------------------ 6. [[  JavaScript Constructor Function  ]] -------------------------------------------------->>>>>>>>>>

/* 
In JavaScript, a constructor function is used to create objects. For example,
JavaScript Built-in Constructors

let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

n JavaScript, strings can be created as objects by:
const name = new String ('John');
console.log(name); // "John"

In JavaScript, numbers can be created as objects by:
const number = new Number (57);
console.log(number); // 57

NOTE :- You should not declare strings, numbers, and boolean values as objects because they slow down the program.

*/

// constructor function
function Person() {
    (this.name = 'John'), (this.age = 23);
}

// create an object
const person = new Person(); //To create an object from a constructor function, we use the new keyword.
