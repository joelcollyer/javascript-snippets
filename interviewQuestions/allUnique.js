// const allUnique = (str = "") => new Set(str.split("")).size === str.length;

const allUnique = (str = "") =>
  str.length ===
  str
    .toLowerCase()
    .split("")
    .filter((letter, i, arr) => arr.indexOf(letter) === i).length;

console.log(allUnique("Joel Collyer")); // false
console.log(allUnique("cat & dog")); // false
console.log(allUnique("cat+dog")); // true
console.log(allUnique("Jj")); // false
