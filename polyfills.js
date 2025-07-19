// it is provide old browser to give modern technology support

// What is polyfills?
// Polyfills are JavaScript libraries that provide functionality that is not natively supported by older browsers.

// A polyfill is a piece of JavaScript code (usually a library) that adds missing functionality
// to older browsers by emulating modern features.

// const result = [1, 2, 3].includes(2);

// Short points
// Polyfills simulate modern JS features in old browsers.

// Use core-js or Babel with @babel/preset-env for clean setup.

// Only include polyfills you need to keep bundle size small.

// Polyfills improve browser compatibility of your app.

// ✅ 1. Manual Polyfill
{
  /* <script>
  if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement) {
      return this.indexOf(searchElement) !== -1;
    };
  }
</script>

<script src="your-app.js"></script> */
}
