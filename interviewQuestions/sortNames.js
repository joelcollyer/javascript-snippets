/**
 * Prompt: Write a function that takes a list of names and returns the names
 * sorted by the number of vowels in each name in descending order. If two names
 * have the same number of vowels, sort them alphabetically.
 */

const VOWELS = ["a", "e", "i", "o", "u", "y"];

const countVowels = (str = "") =>
  [...str.toLowerCase()].reduce((count, letter) => (VOWELS.includes(letter) ? (count += 1) : count), 0);

function sortNames(arr = []) {
  return arr.sort((a, b) => countVowels(b) - countVowels(a) || a.localeCompare(b));
}

console.log(sortNames(["Goku", "Vegeta", "Piccolo", "Gohan"])); // ["Piccolo", "Vegeta", "Gohan", "Goku"]
console.log(sortNames(["Edward", "Alphonse", "Roy", "Winry"])); // ["Alphonse", "Edward", "Roy", "Winry"]
