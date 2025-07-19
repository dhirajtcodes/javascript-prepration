// 📦 How to Actually Reduce Bundle Size
// If you want to reduce the actual bundle size, you must do this in addition to compression:

// | Technique                     | What It Does                                      |
// | ----------------------------- | ------------------------------------------------- |
// | ✅ **Tree Shaking**            | Removes unused code                               |
// | ✅ **Code Splitting**          | Splits large bundles into smaller chunks          |
// | ✅ **Lazy Loading**            | Defers loading of non-critical JS                 |
// | ✅ **Using Smaller Libraries** | Replace large libraries with smaller alternatives |
// | ✅ **Avoiding Polyfills**      | Only use what’s needed                            |
// | ✅ **Removing Dev-only Code**  | Strip logs, test code, etc.                       |
// | ✅ **Dynamic Imports**         | Load routes/components only when needed           |
// | ✅ **Bundle Analysis**         | Understand what is bloating your code             |
// | ✅ **Image Optimization**      | Optimize images for different screen sizes        |
// | ✅ **Minifying CSS**           | Remove unnecessary characters from CSS             |
// | ✅ **Minifying JS**            | Remove unnecessary characters from JS              |

// | Metric        | Without Optimization | With Tree Shaking + Gzip |
// | ------------- | -------------------- | ------------------------ |
// | Bundle Size   | 1.2 MB               | 600 KB                   |
// | Transfer Size | 1.2 MB               | 100 KB (with Brotli)     |

// Goal is to reduce both

// Use build tools to reduce bundle size

// Use compression to reduce transfer size
