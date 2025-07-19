const unsortedArray = [40, 100, 1, 5, 25, 10];

/** Predefine javascript question */
// const sortedArray = unsortedArray.sort((a, b) => a - b);

/** Bubble sort */
function customSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap values
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// console.log("sorytedArr", sortedArray);
