/**
 * Prompt: Spreadsheet programs often use the A1 Reference Style to refer to
 * columns. Given a column name in thisstyl return its column number.
 */

const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const columnReference = (col = "") => {
  return Array.from(col.trim()).reduce((sum, letter, index) => {
    const pos = letter.charCodeAt() - 64;
    const multiplier = 26 ** (col.length - index - 1);
    sum += pos * multiplier;
    return sum;
  }, 0);
};

console.log(columnReference("A")); // 1
console.log(columnReference("B")); // 2
console.log(columnReference("C")); // 3
console.log(columnReference("Z")); // 26
console.log(columnReference("AA")); // 27
console.log(columnReference("AB")); // 28
console.log(columnReference("AAA")); // 703
