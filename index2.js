// var deleteDuplicates = function (head) {
//
//     if (!head || !head.next) {
//         return head;
//     }
//
//     let current = head;
//     console.log(current, 'current')
//
//     while (current.next !== null) {
//         if (current.val === current.next.val) {
//             // Duplicate found, update the next pointer to skip the duplicate
//             current.next = current.next.next;
//         } else {
//             // Move to the next node
//             current = current.next;
//         }
//     }
//
//     return head;
// };
//
// // Example usage:
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }
//
// // Create a sample linked list: 1 -> 1 -> 2 -> 3 -> 3
// let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
// let result = deleteDuplicates(head);


// // Output the result
// let output = [];
// while (result !== null) {
//     output.push(result.val);
//     result = result.next;
// }
// console.log(output); // Output: [1, 2, 3]


const arrObj = [
    {name: 'abc', slug: 'abc'},
    {name: 'pqr', slug: 'xyz'},
    {name: 'abc', slug: 'abc'},
    {name: 'abc', slug: 'xyz'}
];

const uniqueArrObj = arrObj.filter((obj, index, self) =>
    index ===
    self.findIndex(
        (o) => o.name === obj.name && o.slug === obj.slug
    )
);

console.log(uniqueArrObj);

