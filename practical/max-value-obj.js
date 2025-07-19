const arr = [3, 4, 5, 6, 7, 3, 4, 2, 4, 5];

const obj = {};

arr.forEach((i) => {
  if (!obj[i]) {
    obj[i] = 1;
  } else {
    obj[i]++;
  }
});

let maxCount = 0;

for (const key in obj) {
  if (obj[key] > maxCount) {
    maxCount = obj[key];
    maxKey = key;
  }
}

console.log("max", maxCount);

// arr.forEach((item) => {
//   if (!obj[item]) {
//     obj[item] = 1;
//   } else {
//     obj[item]++;
//   }
// });

console.log("obj", obj);

// let maxCount = 0;
// let maxKey = null;

// for (const key in obj) {
//   if (obj[key] > maxCount) {
//     maxCount = obj[key];
//     maxKey = key;
//   }
// }

// console.log("max", maxCount);
