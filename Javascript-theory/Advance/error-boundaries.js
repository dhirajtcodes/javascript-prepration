// ✅ What is an Error Boundary in React?
// An Error Boundary is a special React component that catches JavaScript
// errors in its child components and displays a fallback UI instead of crashing the whole app.

// 📌 Why use Error Boundaries?
// Without them, if an error happens in part of your UI, the entire app crashes or becomes blank.
// With error boundaries, you can catch those errors gracefully and show a custom message or fallback UI instead.

// 🧠 Real-life Analogy:
// Imagine you're building an airplane. If one seat is broken, you don't crash the plane — you just block that seat and continue flying.
// That’s what Error Boundaries do for your app.

// ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. 😢</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

//APP.jsx
import ErrorBoundary from "./ErrorBoundary";
import MyComponent from "./MyComponent";

function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}
