const spreadArr = [3, 4, 5, 6, 7, 8];

const spreadArr2 = [2, 3, 9, ...spreadArr];

console.log("spreadArr2", spreadArr2);

// 1. Spread Operator
// Used to expand (spread) elements from an array or object.

// ✅ Use cases:

// Copy arrays/objects

// Merge arrays/objects

// Pass array elements as individual arguments

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

/** Rest Operator */

// 🔹 2. Rest Operator
// Used to collect the remaining elements into an array or object.

// ✅ Use cases:

// Collect function arguments

// Destructure objects or arrays

// 🔸 Example (Function arguments):

const restFun = (a, b, ...arr) => {
  console.log("arr", arr, a, b);
};

restFun(1, 2, 3, 4, 5, 6);

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
sum(1, 2, 3); // 6
