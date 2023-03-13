/**
 * Prompt: Given an array of integers arr and an integer n, return a subarray of
 * arr of length n where the sum is the largest. Make sure you maintain the
 * order of the original array, and if n is greater than arr.length, you can
 * choose what you want to return.
 */

const sum = (arr = []) => arr.reduce((sum, int) => (sum += +int), 0);

const maxSubarray = (arr = [], len = 0) => {
  if (len <= 0) return [];
  if (len >= arr.length) return arr;

  let max = [];
  let maxSum = 0;

  for (let index = 0; index <= arr.length - len; index++) {
    const subArray = arr.slice(index, index + len);
    const subSum = sum(subArray);

    if (subSum > maxSum) {
      max = subArray;
      maxSum = subSum;
    }
  }

  return max;
};

console.log(maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4)); // [1, 2, 3, 6]
console.log(maxSubarray([1, 2, 0, 5], 2)); // [0, 5]

console.log(maxSubarray([1, 2, 3, 4, 5], 6)); // [1, 2, 3, 4, 5]
console.log(maxSubarray([1, 2, 3, 4, 5], 0)); // []
console.log(maxSubarray([1, 2, 3, 4, 5], 1)); // [5]
