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
