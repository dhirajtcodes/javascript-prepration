// 1. What is synthetic and non synthetic event ( if nonsysthetic is present whay we use synthetic event )

// 1. What is a Synthetic Event?
// Synthetic Event is a wrapper around the native DOM event in React.

// React creates its own event system called the Synthetic Event system to ensure:

// Cross-browser compatibility

// Performance optimization

// Event pooling

// Uniform API (so the code behaves the same in Chrome, Firefox, etc.)

// 2. What is a Native (Non-Synthetic) DOM Event?
// A non-synthetic or native DOM event is the browser’s default event object, like the ones used in:

document.getElementById("btn").addEventListener("click", function (event) {
  console.log(event); // Native MouseEvent
});

// 🔄 Synthetic vs Native Comparison
// Feature	        Synthetic Event (React)	        Native DOM Event
// API	             Normalized by React	        Varies by browser
// Performance: 	Event pooling (React < 17)  :	No pooling
// Cross-browser:	Safe & consistent	            May vary
// Works in React:	Yes	                            Only outside JSX
// Access example:	e.target.value	           event.target.value

// 1. Whats is static props and server side props

// Used to pre-render a page at build time.

// 🔸 Use Case:
// When data doesn’t change frequently.

// Perfect for blogs, landing pages, or documentation

export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

/** Server side props */

// Used to render a page on every request using fresh data.

// 🔸 Use Case:
// When data changes frequently (e.g., dashboards, user-specific pages).

export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/live-stats");
  const data = await res.json();

  return {
    props: {
      stats: data,
    },
  };
}

// ✅ What is Dynamic Import in Next.js?
// Dynamic Imports in Next.js allow you to load a component or module only when it's needed (i.e., lazily), instead of at initial page load.

// This helps:
// Improve initial load time.
// Split large bundles.
// Optimize performance.

// In which case we use normal function rather than arrow function?
function data(user) {
  console, log("this", this.name);
}

const person = {
  name: "Dhiraj",
  data: data,
};

person.data();

// What is the difference between Pure and Impure functions?

// | Pure Function                              | Impure Function                                                                     |
// | ------------------------------------------ | ----------------------------------------------------------------------------------- |
// | Returns the same output for the same input | May return different output for the same input                                      |
// | Has no side effects                        | May cause side effects (e.g., modifying a global variable, writing to a file, etc.) |

// . What is the difference between 'Pass by Value' and 'Pass by Reference'?

// | Concept           | Description                                                                        |
// | ----------------- | ---------------------------------------------------------------------------------- |
// | Pass by Value     | A copy of the variable is passed (primitives: `number`, `string`, `boolean`, etc.) |
// | Pass by Reference | A reference to the actual object is passed (objects, arrays, functions)            |

let a = 10;
let b = a;
b++; // a is still 10 (pass by value)

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99; // obj1.x is also 99 (pass by reference)

// -----------------------------------------------------------------------
// 3. What are DRY, KISS, YAGNI, SOLID Principles ?

// DRY (Don't Repeat Yourself): Avoid code duplication.

// KISS (Keep It Simple, Stupid): Simplicity is better than complexity.

// YAGNI (You Aren’t Gonna Need It): Don’t build features unless necessary.

// SOLID (OOP design principles):

// S: Single Responsibility Principle

// O: Open/Closed Principle

// L: Liskov Substitution Principle

// I: Interface Segregation Principle

// D: Dependency Inversion Principle

// -----------------------------------------------------------------------

// 15. What is a polyfill in javascript ?

// A polyfill is code that replicates a newer feature in older browsers that don’t support it.
// Example: Array.prototype.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function (search) {
    return this.indexOf(search) !== -1;
  };
}

// -----------------------------------------------------------------------

// ✅ 5. What is a Generator Function?
// A generator function can pause and resume its execution using yield.
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = countUp();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }

// -----------------------------------------------------------------------

// ✅ 6. What is IIFE (Immediately Invoked Function Expression)?
// A function that runs immediately after being defined.

(function () {
  console.log("This runs immediately");
})();

// -----------------------------------------------------------------------

// ✅ 8. Is JavaScript Dynamically or Statically Typed?
// ✅ JavaScript is dynamically typed — variable types are determined at runtime, and you can change a variable's type freely.

let a = 10;
a = "hello"; // valid in JS

// -----------------------------------------------------------------------
// ✅ 9. IndexedDB vs SessionStorage

// | Feature     | IndexedDB               | SessionStorage         |
// | ----------- | ----------------------- | ---------------------- |
// | Type        | NoSQL database          | Key-value storage      |
// | Size        | Larger (100MB+)         | Smaller (\~5MB)        |
// | Persistence | Persistent              | Cleared on tab close   |
// | Use case    | Complex structured data | Temporary session data |

// -----------------------------------------------------------------------

// What are Interceptors ?

// Interceptors are middleware functions that let you intercept requests or responses — often used in Axios or HTTP libraries.
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer token";
  return config;
});

// ✅ 11. What is eval() in JavaScript?
// eval() executes a string of JavaScript code — dangerous and should be avoided.

// const x = 10;
// console.log(eval("x + 5")); // 15
