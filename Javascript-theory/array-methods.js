// push()	: Add item(s) to the end of array
// pop()	: Remove item from the end
// shift()	: Remove item from the start
// unshift() :	Add item(s) to the start
// includes():	Check if array contains a value
// indexOf() :	Get the first index of a value
// lastIndexOf():	Get the last index of a value
// find()     :	Find the first match by condition
// findIndex() :	Find the index of first match by condition

// Lopping
// forEach() :	Loop through each element (no return)
// map()	: Transform each item and return a new array
// filter()	: Return items that match a condition
// reduce()	: Reduce array to a single value (sum, etc.)
// every()	: Check if all items match a condition
// some()	: Check if any item matches a condition

// sorting and reversing
// sort()	: Sort array (alphabetically by default)
// reverse() :	Reverse the order of elements

// Combining & Slicing;
// concat() :	Join two or more arrays
// slice()	: Return a portion of array
// splice()	: Add/remove items from array
// join()	: Convert array to a string (with separator)

// Slice()
const fruits = ["apple", "banana", "cherry", "date", "fig"];

// Get items from index 1 to 3 (excluding index 3)
const sliced = fruits.slice(1, 3);

console.log(sliced); // ["banana", "cherry"]
console.log(fruits); // ["apple", "banana", "cherry", "date", "fig"] (unchanged)

// Splice()
// const fruits = ["apple", "banana", "cherry", "date", "fig"];

// // Remove 2 items starting from index 1
// const removed = fruits.splice(1, 2);

// console.log(removed);    // ["banana", "cherry"]
// console.log(fruits);     // ["apple", "date", "fig"]

// Add Elements
const numbers = [1, 2, 5, 6];

// Add 3 and 4 at index 2 (no removal)
numbers.splice(2, 0, 3, 4);

console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Replace Elements
const colors = ["red", "green", "blue"];

// Replace "green" with "yellow"
colors.splice(1, 1, "yellow");

console.log(colors); // ["red", "yellow", "blue"]
