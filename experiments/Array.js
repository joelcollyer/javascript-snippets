let arr = Array.from({ length: 10 }, () => Math.round(Math.random() * 100));

console.log({ arr, first: arr[0], last: arr[arr.length - 1] });
// console.log({ arr, first: arr.at(0), last: arr.at(-1) }); // Node >v16.6.0

/**
 * When validating that an array contains at least one value,
 * does an empty/null/undefined variable pass a nullish length check? (No)
 * Does an array with no values in it pass a nullish length check? (No)
 * What about the Error class or a Function? (Still No)
 */
// arr = [false]; // does not log because the array.length === 1
// arr = []; // logs because the array.length === 0
// arr = null; // logs, undefined
// arr = undefined; // logs, undefined
// arr = new Error("Exception instead of an array."); // logs, undefined
// arr = () => {}; // Logs a No-op as function.length === 0
// arr = () => [1]; // Does not log because the array isn't returned yet (it doesn't eval)
// arr = true; // logs, as boolean.length === undefined
// arr = ""; // Logs as the string.length === 0, but...
// arr = "1"; // Does not log as str.length === 1. A good reason to use strict types and throws, or use Array.isArray(arr)

// Log if the array is empty (typically how we'd do an early return)
if (!arr?.length) console.log(`No arr.length: ${arr?.length}`);

// If needed, we can defend against "non array values with Array.isArray:
if (!Array.isArray(arr) || !arr?.length) {
  console.log(`isArray: ${Array.isArray(arr)}, arr.length: ${arr?.length}`);
}
