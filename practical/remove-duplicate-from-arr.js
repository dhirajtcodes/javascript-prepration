const arr = [3, 4, 5, 6, 7, 3, 4, 2, 4, 5];

//Example 1
const data = new Set(arr);

console.log([...data]);

//Example 2
const dummayArr = [];

const sortMap = arr.filter((item) => {
  if (!dummayArr.includes(item)) {
    dummayArr.push(item);
  }
});

console.log("sortMap", sortMap);

// for (i = 0; i <= arr.length - 1; i++) {
//   if (!dummayArr.includes(arr[i])) {
//     dummayArr.push(arr[i]);
//   }
// }

console.log("dummayArr", dummayArr);
