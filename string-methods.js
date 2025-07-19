// 1. length()
// 2. charAt()
// 3. indexOf()
// 4. lastIndexOf()
// 5. slice()
// 6. substring()
// 7. replace()
// 8. toUpperCase()
// 9. toLowerCase()

let text = "JavaScript";
console.log(text.substring(0, 4)); // "Java"
console.log(text.substring(4)); // "Script"

// Splice()
// array.splice(start, deleteCount, item1, item2, ...)
const numbers = [1, 2, 3, 4];
const removed = numbers.splice(1, 2); // Remove 2 items starting at index 1
console.log(removed); // [2, 3]
console.log(numbers); // [1, 4] (original array modified)

// Slice()
// array.slice(start, end);
// string.slice(start, end);

const fruits = ["apple", "banana", "cherry"];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ['banana', 'cherry']
console.log(fruits); // ['apple', 'banana', 'cherry'] (original unchanged)

//Split()

// String.split("")
