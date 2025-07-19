// 🔧 What is Webpack?
// Webpack is a module bundler for JavaScript applications. It takes your React (or any JS)
// files, bundles them with dependencies (like CSS, images, etc.), and outputs optimized files for the browser.

// Think of it as a build tool that:

// Transforms JSX to JavaScript (via Babel)

// Bundles all .js, .css, .png files into one or more files

// Optimizes the final output for performance (e.g., minification, tree-shaking)

// 🚀 Why is Webpack used?
// To bundle multiple files (JavaScript, CSS, images) into fewer files (often just one or a few).

// To transform code using loaders (e.g., compile Sass to CSS, transpile ES6+ to ES5 using Babel).

// To optimize code (e.g., minification, tree-shaking to remove unused code).

// To improve performance (code splitting, caching, lazy loading).

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

// 🧠 Typical Interview Questions about Webpack:
// What is the difference between Loaders and Plugins?

// Loaders transform files; plugins perform actions (e.g., optimization, asset management).

// What is code splitting?

// Breaking your bundle into smaller chunks that can be loaded on demand to improve performance.

// What is tree shaking?

// Removing unused exports during bundling to reduce final bundle size.

// What alternatives to Webpack do you know?

// Vite, Parcel, Rollup, ESBuild.
