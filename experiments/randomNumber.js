/**
 * Generate a random number between a min and max (inclusive of the min and max)
 * @param {Number} min The lowest allowable number
 * @param {Number} max The highest allowable number
 * @returns Number
 */
const randomNumber = (min = 1, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Testing the randomness
const arr = Array.from({ length: 500 }, () => randomNumber())
  .filter((n, i, arr) => arr.indexOf(n) === i)
  .sort((a, b) => a - b);
console.log({ min: arr[0], numbers: arr.length, max: arr.at(-1) });
console.log(arr);
