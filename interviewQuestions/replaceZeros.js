/**
 * Prompt: Given a string of any length which contains only digits from 0 to 9,
 * replace each consecutive run of the digit 0 with its length.
 */

const replaceZeros = (str = "") => str.replace(/[0]+/g, (match) => match.length);

console.log(replaceZeros("1234500362000440")); // 1234523623441
console.log(replaceZeros("123450036200044")); // 123452362344
console.log(replaceZeros("000000000000")); // 12
console.log(replaceZeros("123456789")); // 123456789
