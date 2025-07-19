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
// . What is the difference between 'Pass by Value' and 'Pass by Reference'?
// . What are DRY, KISS, YAGNI, SOLID Principles ?
// 15. What is a polyfill in javascript ?
// 16. What is generator function in javascript ?
// What is IIFE ?
// What is authentication vs authorization ?
// 35. Is javascript a dynamically typed language or a statically typed language
// 36. What is the difference between Indexeddb and sessionstorage ?
// What are Interceptors ?
// What is eval()
