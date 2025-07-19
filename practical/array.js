/** ================== Reverse an Array (Without Using reverse())============ */

const reverseArr = "dhiraj";

const reverseArray = (reverseArr) => {
  const revArr = [];
  const arr = reverseArr.split("");

  for (i = 0; i <= arr.length; i++) {
    revArr.unshift(reverseArr[i]);
  }
  return revArr.join("");
};

console.log("revArr", reverseArray(reverseArr));

/** ================== Find the Second Largest Number ============ */

const secondLargest = (arr) => {
  const filterArr = new Set(arr);
  const sortArr = [...filterArr].sort((a, b) => a - b);
  console.log("sortArr", sortArr[sortArr.length - 2]);
};
console.log(secondLargest([10, 20, 20, 5, 15]));

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
const nums = [5, 3, 8, 1, 2];
console.log(bubbleSort(nums)); // [1, 2, 3, 5, 8]

/** ================== Count Occurrences of Each Element ============ */

const countArr = ["apple", "banana", "apple"];

const getCountArr = (arr) => {
  const obj = {};

  arr.forEach((item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
  });

  return obj;
};

console.log(getCountArr(countArr));

/** ================== Remove Duplicates from an Array ============ */
