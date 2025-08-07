// Currying is a technique where a function that takes multiple arguments is transformed
// into a sequence of functions, each taking one argument at a time.
function func1(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(func1(1)(2)(3)(4));

function crr(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// ✅ Real-World Example: Discount Calculator 💸
// Imagine you're building an e-commerce website and you want a way to apply a discount to different products. Let's curry the function to make it flexible.

const applyDiscount = (discount) => (price) => price - price * (discount / 100);

// 🏦 Another Real-World Example: Tax Calculator

const applyTax = (taxRate) => (amount) => amount + amount * taxRate;

const gst5 = applyTax(0.05);
console.log(gst5(1000)); // 1050
