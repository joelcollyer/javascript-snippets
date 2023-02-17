console.log("\r\nCan we use arr.at() operations?");
let arr = Array.from({ length: 10 }, () => Math.round(Math.random() * 100));
console.log({ arr, first: arr[0], last: arr[arr.length - 1] });
console.log({ arr, first: arr.at(0), last: arr.at(-1) }); // Node >v16.6.0

console.log("\r\nTesting for empty array's and other values...");
/**
 * When validating that an array contains at least one value,
 * does an empty/null/undefined variable pass a nullish length check? (No)
 * Does an array with no values in it pass a nullish length check? (No)
 * What about the Error class or a Function? (Still No)
 */
const tests = [
  [false], // does not log because the array.length === 1
  [], // logs because the array.length === 0
  null, // logs, undefined
  undefined, // logs, undefined
  new Error("Exception instead of an array."), // logs, undefined
  () => {}, // Logs a No-op as function.length === 0
  () => [1], // Does not log because the array isn't returned yet (it doesn't eval)
  true, // logs, as boolean.length === undefined
  "", // Logs as the string.length === 0, but...
  "1", // Does not log as str.length === 1. A good reason to use strict types and throws, or use Array.isArray(arr)
];

tests.forEach((test) => {
  arr = test;

  // Log if the array is empty (typically how we'd do an early return)
  if (!arr?.length) console.log(`No arr.length: ${arr?.length}`);

  // If needed, we can defend against "non array values with Array.isArray:
  if (!Array.isArray(arr) || !arr?.length) {
    console.log(`isArray: ${Array.isArray(arr)}, arr.length: ${arr?.length}`);
  }
});

// You can force the array to have a zero length? Weird.
console.log("\r\nCan you reset an array by setting its length to zero?");
arr = ["one", "two", "three"];
console.log({ arr, length: arr.length }); // outputs [ 'one', 'two', 'three' ]
arr.length = 0;
console.log({ arr, length: arr.length }); // outputs []
