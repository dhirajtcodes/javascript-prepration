// ✅ 1. Basic Arithmetic
console.log(5 + 3); // 8
console.log(10 - 4); // 6
console.log(6 * 7); // 42
console.log(8 / 2); // 4
console.log(10 % 3); // 1
console.log(2 ** 3); // 8

// ✅ 2. Math Object Methods

console.log(Math.abs(-5)); // 5
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(3, 5, 1)); // 1
console.log(Math.max(3, 5, 1)); // 5
console.log(Math.random()); // random number between 0-1

// Random number between two values
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomBetween(1, 10)); // e.g. 7

console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 4)); // 16
console.log(Math.trunc(4.9)); // 4
console.log(Math.sign(-20)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(45)); // 1

// ✅ 3. Parsing & Formatting Numbers
console.log(parseInt("100px")); // 100
console.log(parseFloat("10.56")); // 10.56

const num = 3.14159;
console.log(num.toFixed(2)); // "3.14"

// ✅ 4. Checking Numbers
console.log(isNaN("hello")); // true
console.log(isNaN(123)); // false
console.log(isFinite(100)); // true
console.log(isFinite(Infinity)); // false
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

// ✅ 5. Math Constants
console.log(Math.PI); // 3.14159...
console.log(Math.E); // 2.71828...

// ✅ 6. Trigonometry
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1

// ✅ 7. Logarithmic and Exponential
console.log(Math.log(10)); // Natural log
console.log(Math.exp(2)); // e^2

// ✅ 8. Custom Math Functions

// Factorial
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // 120

// Fibonacci
const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(6)); // 8
