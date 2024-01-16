function isPalindrome(x) {
    // Handle negative numbers
    if (x < 0) {
        return false;
    }

    // Reverse the digits of the number
    let reversed = 0;
    let original = x;

    while (x > 0) {
        const digit = x % 10;
        console.log(digit, 'digit')
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // Check if the reversed number is equal to the original
    return original === reversed;
}

// Test cases
console.log(isPalindrome(121));    // Output: true
// console.log(isPalindrome(-121));   // Output: false
// console.log(isPalindrome(10));     // Output: false


function isPalindrome(x) {
    // Convert the integer to a string
    const str = x.toString();

    // Use two pointers approach to compare characters
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test cases
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(-121));   // Output: false
console.log(isPalindrome(10));     // Output: false

