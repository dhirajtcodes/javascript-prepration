// ✅ What is Build Optimization?
// Build optimization is the process of improving the output (HTML/CSS/JS/images/fonts/etc.)
// that is deployed to production to make the site load faster and work more efficiently.

// 1. Minification and Compression========================================================
// What: Remove unnecessary characters from files (spaces, comments, etc.)

// Tools: Webpack (TerserPlugin), Vite (default), Rollup, Babel

// Why: Smaller files = faster load times

// // Webpack example
// optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   }

// 2. Code Splitting=========================================================
// What: Break your JavaScript into multiple bundles.

// How:

// By route: Load different JS chunks for each route (React.lazy, Next.js dynamic import)

// By components: Lazy load heavy components
// const LazyComponent = React.lazy(() => import("./HeavyComponent"));
// Why: Reduces initial bundle size, loads only what’s needed.

// 3. Tree Shaking===============================================================
// What: Remove unused code from final bundle

// Tools: ES6 modules (import/export), Webpack, Rollup

// Why: Avoid shipping unused libraries or functions

// Example
// Only import needed function, not whole library
// import { debounce } from 'lodash'; // Better than: import _ from 'lodash';

// 4. Bundle Analysis=========================================================
// What: Visualize your bundle to understand what's taking space

// Tool: webpack-bundle-analyzer, source-map-explorer, vite-plugin-visualizer

// Webpack config
plugins: [new BundleAnalyzerPlugin()];

// 5. Use CDNs and Caching=====================================================
// What: Load static assets (images, fonts, JS libs) from a CDN

// Why: Faster global access, caching benefits

// Bonus: Set cache headers like Cache-Control for static assets

// 6. Image Optimization==========================================================
// Tools: ImageMin, Squoosh, Next.js Image Component

// Tips:

// Use modern formats like WebP, AVIF

// Lazy-load images (loading="lazy")

// 7. Reduce Polyfills and Transpilation=======================================================
// What: Don’t add unnecessary polyfills or transpile for old browsers if not needed

// Tools: @babel/preset-env, browserslist

// Why: Smaller bundles, faster parsing

// package.json
// "browserslist": [
//   "last 2 Chrome versions",
//   "not IE 11"
// ]

// 8. Environment-based Configurations======================================================
// Why: Avoid shipping dev-only tools or logs

// Tools: Webpack DefinePlugin, Vite env vars

if (process.env.NODE_ENV === "development") {
  console.log("This should not appear in production");
}

// 9. CSS Optimization==========================================================
// Tips:

// Use tools like PurgeCSS to remove unused styles

// Minify CSS (cssnano, Vite built-in)

// Use CSS modules or Tailwind for scoped + optimized styles

// 10. Lazy Loading and Preloading================================================
// Lazy load components, images, and other heavy content

// Preload fonts or key scripts to improve rendering performance
// <link rel="preload" href="/fonts/font.woff2" as="font" type="font/woff2" crossorigin>

// 📌 Mindset and Best Practices to Keep in Mind

// | Goal                            | Focus Area                                       |
// | ------------------------------- | ------------------------------------------------ |
// | **Smaller Bundles**             | Tree shaking, minification, lazy loading         |
// | **Faster Load Time**            | Code splitting, CDN, image optimization          |
// | **Better UX**                   | Progressive loading, remove blocking resources   |
// | **Environment-specific builds** | Strip dev tools and logs in production           |
// | **Debug performance**           | Use Lighthouse, Chrome DevTools, bundle analyzer |

// 🛠️ Tools You Should Learn as a JS Dev for Optimization
// Webpack / Vite / Rollup

// ESLint + Prettier

// React.lazy / Suspense

// Next.js dynamic imports + Image Optimization

// Lighthouse

// Bundle Analyzer

// 🚀 Example: React Build Optimization Checklist
// ✅ Use React.lazy() for lazy loading
// ✅ Use React.memo() or useMemo() for heavy computations
// ✅ Remove console logs in production
// ✅ Tree-shake libraries (e.g., lodash)
// ✅ Optimize images using modern formats
// ✅ Use gzip or brotli compression
// ✅ Bundle analysis with webpack-bundle-analyzer

// | Compression | Description                                       | Supported Browsers                           |
// | ----------- | ------------------------------------------------- | -------------------------------------------- |
// | **Gzip**    | Widely supported text compression format          | All modern browsers                          |
// | **Brotli**  | Newer algorithm, **better compression** than Gzip | All modern browsers (except some older ones) |
