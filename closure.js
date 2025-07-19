// const closure = () => {
//   let a = 10;
//   console.log("a", a);
//   const b = () => {
//     console.log("hello");
//     console.log(a);
//   };
//   return b();
// };

// closure();

// /** Main example of closure */
// const createCounter = () => {
//   let count = 0;

//   return () => {
//     count++;
//     console.log(count);
//   };
// };

// const counter = createCounter(); // `createCounter` has finished executing

// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3

// const closures = () => {
//   let a = 10;
//   const b = () => {
//     console.log("hello");
//     console.log(++a);
//   };
//   return b();
// };

// const data2 = closures();
// data2();
// data2();

const closData = () => {
  let a = 10;
  return () => {
    console.log("hello");
    console.log(a++);
  };
};

const closureFn = closData();

closureFn(); // hello, 10
closureFn(); // hello, 11
closureFn(); // hello, 12

// A closure is a feature in JavaScript where a function remembers and has access to
// variables from its outer (lexical) scope, even after that outer function has finished executing.

// 📦 Benefits of Closures
// Data Privacy: Private variables that cannot be accessed directly.

// Maintain State: Useful in callbacks, event handlers, or loops.

// Functional Programming: Core concept behind functional patterns.
