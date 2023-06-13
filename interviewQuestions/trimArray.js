/**
 * Prompt: Given an array arr and integers n and m, remove n elements from the
 * front of the array, and m elements from the back.
 * Assume that n + m <= arr.length.
 */

const trimArray = (arr = [], start = 0, end = 0) => {
  if (!Array.isArray(arr) || !arr?.length) throw new Error("Must be an array");
  if (start < 0 || end < 0) throw new Error("Start and End must be positive numbers");

  const len = arr.length - (start + end);
  return arr.splice(start, len);
};

console.log(trimArray([1, 2, 3, 4, 5, 6], 2, 1)); // [3, 4, 5]
console.log(trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0)); // [1, 3]
console.log(trimArray([1, 7], 0, 0)); // [1, 7]

// I decided to ignore the "assume" part of the prompt and add validation anyway...
console.log(trimArray([1, 2], 1, 1)); // []
console.log(trimArray([1, 2, 3], 9, 10)); // []

try {
  trimArray({ 1: [], 2: [] }, 1, 0);
} catch (error) {
  console.log(error.message);
}

try {
  trimArray([1, 2, 3], 1, -1);
} catch (error) {
  console.log(error.message);
}
