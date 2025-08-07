// ✅ What is a Callback Function?
// A callback function is a function passed as an argument to another function,
// and it's called later — usually after some operation is done.

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // calling the function passed as a callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Dhiraj", sayBye);

// Output:
// Hello, Dhiraj
// Goodbye!

// 🔁 Asynchronous Programming
// Callbacks allow code to continue running without blocking.

// Common in I/O tasks like API calls, file reads, etc.

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
