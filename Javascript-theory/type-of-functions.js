// Named Function (Function Declaration)
function greet(name) {
  return `Hello, ${name}`;
}

// 2. Anonymous Function
// A function without a name, usually assigned to a variable.
const greet = function (name) {
  return `Hello, ${name}`;
};

// Arrow Function (ES6)
const greet = (name) => `Hello, ${name}`;

// Immediately Invoked Function Expression (IIFE)
// Runs immediately after being defined.
(function () {
  console.log("IIFE running");
})();

// Callback Function
// Passed as an argument to another function and called inside it.
function processUserInput(callback) {
  const name = "Dhiraj";
  callback(name);
}

processUserInput(function (name) {
  console.log("Hello " + name);
});

// Constructor Function
// Used to create objects (before ES6 classes).
function Person(name) {
  this.name = name;
}

const p1 = new Person("Dhiraj");

// Generator Function
// Defined with function* and uses yield.
function* gen() {
  yield 1;
  yield 2;
}

const it = gen();
console.log(it.next().value); // 1

// Async Function
// Declared with async, always returns a promise.
async function fetchData() {
  const data = await fetch("api");
}

// Recursive Function
// Calls itself.
function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1);
}

// Higher-Order Function
// Takes another function as an argument or returns one.
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const sayHello = greet("Dhiraj");
sayHello();
