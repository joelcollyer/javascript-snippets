/**
 * Given an integer n, count the total number of 1 digits appearing in all non-negative integers less than or equal to n.
 * @param {Number} int The number to count up to
 * @returns {Number} The number of times that '1' appears between zero and the given int.
 */
const numberOfOnes = (int = 0) => {
  let count = 0;
  Array.from({ length: int }, (_, i) => {
    count += (i += 1).toString().match(/1/g)?.length ?? 0;
  });
  return count;
};

console.log(numberOfOnes(14)); // 7
