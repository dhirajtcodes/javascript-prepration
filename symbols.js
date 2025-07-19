// 🔹 What is a Symbol?
// A Symbol is a primitive data type introduced in ES6.
// It represents a unique and immutable identifier.

const sym1 = Symbol();
const sym2 = Symbol("desc");

console.log(sym1 === sym2); // false (each symbol is unique)

const id = Symbol("id");

const user = {
  name: "Alice",
  [id]: 123,
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ['name'] (id is hidden)
