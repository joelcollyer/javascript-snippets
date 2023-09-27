/**
 * Prompt: Given an array of integers, sort them into two separate sorted arrays
 * of even and odd numbers. If you see a zero, skip it.
 */

const isEven = (num) => num % 2 === 0;

const separateAndSort = (arr = []) => {
  return arr
    .sort((a, b) => a - b)
    .reduce(
      (sorted, num) => {
        if (num === 0) return sorted;

        const [even, odd] = sorted;

        if (isEven(num)) {
          even.push(num);
        } else {
          odd.push(num);
        }

        return [even, odd];
      },
      [[], []]
    );
};

console.log(separateAndSort([4, 3, 2, 1, 5, 7, 8, 9])); // [[2,4,8], [1,3,5,7,9]]
console.log(separateAndSort([1, 1, 1, 1])); // [[], [1,1,1,1]]
console.log(separateAndSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // [[2,4,6,8], [1,3,5,7,9]]
