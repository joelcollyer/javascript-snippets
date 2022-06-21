/**
 * CLI Helper for Converting the input argument into a string of replacement characters
 *
 * Usage: node redact.js TheStringIWantToRedact *
 * Output: T********************t
 */

const [str = "", char = "x"] = process.argv.slice(2);

const output = Array.from({ length: str.length }, (_, i) =>
  i === 0 || i === str.length - 1 ? str[i] : char
).join("");

console.log(output);
