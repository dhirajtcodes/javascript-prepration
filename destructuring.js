const arr = [3, 4, 5, 6, 7, 87];

const [a, b, c, ...rest] = arr;
console.log(a, b, c, rest);

//Swapping Variables:
// let a = 1, b = 2;
// [a, b] = [b, a];
// console.log(a, b); // 2 1
