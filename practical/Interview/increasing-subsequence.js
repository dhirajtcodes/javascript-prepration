// Question 1: DSA Given an array of integers, return the length of the longest increasing subsequence.
// A subsequence is a sequence that can be derived from the array by deleting some or no elements
// without changing the order of the remaining elements. For example, given the array [10, 9, 2, 5, 3, 7,
// 101, 18], the longest increasing subsequence is [2, 3, 7, 101], and its length is 4.

const lengthOfLongestIncreasingSubsequence = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  const values = new Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        values[i] = Math.max(values[i], values[j] + 1);
      }
    }
  }

  return Math.max(...values);
};

console.log(lengthOfLongestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));
