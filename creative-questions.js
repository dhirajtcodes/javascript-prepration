console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof null); // "object" (historical bug)
console.log(typeof function () {}); // "function"
typeof (() => {}); // "function"
typeof function test() {}; // "function"
typeof async function () {}; // "function"
typeof class X {}; // "function" (Yes! classes too)

var a = 10;
(function () {
  console.log(a);
  var a = 5;
})();

// Output: error var not declared againtye

console.log(typeof null); // object

let obj = { a: 1 };
let arr = [obj];
obj = null;
console.log(arr[0]);

//output : [{a : 1}]
