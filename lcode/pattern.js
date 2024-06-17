// <<<<<<<<<<<<<<<------------------------------------------------- 1. [[  Square Pattern ]] --------------------------------------------------------->>>>>>>>>>>
const ns = 5;
let squarePrint = '';

for (let i = 0; i < ns; i++) {
    for (let j = 0; j < ns; j++) {
        squarePrint += '*';
    }
    // newline after each row
    squarePrint += '\n';
}
//First for loop starts with  the 'first row' and 2nd complete the entire column up to 'n' in first row and so on

console.log(squarePrint);
/* 
*****
*****
*****
*****
*****

*/
let n = 5, string = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        string += "*";
    }
    //break
    string += "\n";
}
console.log(string);

// <<<<<<<<<<<<<<<------------------------------------------------ 2. [[ Pyramid Pattern  ]] ---------------------------------------------------------->>>>>>>>>>>
const n = 5;
let pyramidPrint = '';
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        pyramidPrint += ' ';
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        pyramidPrint += '*';
    }
    pyramidPrint += '\n';
}
console.log(pyramidPrint);
/* 
    *
   ***
  *****
 *******
*********

*/

let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
    for (let num = 1; num <= n; num++) {
        pattern += n;
    }
    
    // Add a new line character after contents of each line
    pattern += "\n";
}
console.log(pattern);
/*
12345
1234
123
12
1
* */