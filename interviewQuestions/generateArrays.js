/**
 * Prompt: Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of that array.
 */

const generateArrays = (len = 0) => {
  if (!len || len <= 0) return [];
  output = [];
  while (output.length < len) {
    output.push(Array.from({ length: output.length + 1 }, (_, i) => (i += 1)));
  }
  return output;
};

console.log(generateArrays(4)); // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]
console.log(generateArrays(1)); // [[1]]
