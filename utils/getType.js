/**
 * Retrieve the primitive input type from a given variable
 * @param {*} input
 * @returns {string}
 */
function getType(input) {
  // Prevent NULL from being handled as an object
  if (input === null) return "null";

  // Extract the primitive type from this input
  const type = typeof input;

  // Prevent classes from being called "functions"
  if (type === "function" && Function.prototype.toString.call(input).startsWith("class")) return "class";

  // Handle Array or inputs from `new` operations like Date, Boolean, String, Number, etc.
  const className = input?.constructor?.name || "";
  if (className?.length) return className.toLowerCase();

  // All remaining types
  return type;
}

const tests = [
  "Joel",
  undefined,
  null,
  () => {},
  class A {},
  true,
  0.12,
  NaN,
  [],
  {},
  new Date("2024-12-25"),
  new Number(),
  Symbol("MST"),
];
tests.forEach((test) => console.log(getType(test), "=", test));
