/**
 * Prompt: Given an array of integers and a number k (where k is guaranteed to
 * be less than the array's length), return a subarray of length k with the
 * minimum possible sum. Maintain the order of the original array!
 */

const sum = (arr = []) => arr.reduce((sum, num) => sum + num, 0);

const minSubs = (arr = [], k = 0) => {
  if (!Array.isArray(arr)) return arr;
  if (k >= arr.length) return arr;

  // Make sub-arrays
  const subArrays = [];
  for (let index = 0; index < arr.length - k + 1; index++) {
    const subArray = arr.slice(index, index + k);
    subArrays.push({ array: subArray, total: sum(subArray) });
  }

  // Find and return the subArray with the lowest sum
  const { array } = subArrays.reduce(
    (lowest, subArray) => (subArray.total < lowest.total ? subArray : lowest),
    subArrays[0]
  );

  // Return the array with the lowest sum
  return array;
};

console.log(minSubs([1, 3, 20, 4, 8, 9, 11], 3)); // [4,8,9]
console.log(minSubs([4, 4, 4, 4, 8], 2)); // [4,4]
