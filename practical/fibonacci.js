// /** Recursive approach */

// const fibonacciRecursive = (n) => {
//   if (n <= 1) return n;

//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// };

// console.log(fibonacciRecursive(6));

// /** Iterative approach */

// const fibonacciIterative = (n) => {
//   if (n <= 1) return n;

//   let prev = 0;
//   let current = 1;

//   for (i = 2; i <= n; i++) {
//     let next = prev + current; // next = 8

//     prev = current; // prev = 5
//     current = next; // current = 8
//   }

//   return current;
// };

// fibonacciIterative(6);

const fibonacci = (n) => {
  if (n <= 1) return n;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }
  console.log("hello");
  return current;
};
console.log(fibonacci(6));
