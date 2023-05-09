/**
 * Split a comma separated string into an array, then return the unique values
 * @param {string[]} input
 * @param {string} separator
 * @returns {string} Converts the input into a string of unique values
 *
 * @example
 * // Returns "1, 3, 4, 2" to the console
 * > node makeUnique.js 1 3 4 3 2 1 2 4 3
 */
const makeUnique = (array = [], separator = ", ") => {
  return array
    .map((str) => str.trim())
    .filter((str, i, array) => array.indexOf(str) === i)
    .join(separator);
};

// CLI implementation
console.log("\nUnique Values:\n\n");
const array = process.argv.slice(2);
console.log(makeUnique(array));
console.log("\n\n");
