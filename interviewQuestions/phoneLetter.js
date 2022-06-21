/**
 * Find every possible combination of a given array of arrays
 */
const cartesian = (a) =>
  a.reduce((a, b) => a.flatMap((c) => b.map((d) => [c, d].flat())));

/**
 * Convert phone numbers into letter combinations
 */
const phoneLetter = (input = "0") => {
  const lettersByKey = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  // Convert the input string into letters
  const numbers = input
    .split("")
    .filter((str) => Object.keys(lettersByKey).includes(str))
    .map((str) => +str);

  const letters = numbers.map((num) => lettersByKey[num]);

  // Cartesian returns arrays when the matched length > 1, combine back into strings
  return cartesian(letters).map((combo = []) =>
    Array.isArray(combo) ? combo.join("") : combo
  );
};

// Test the output
console.log(phoneLetter("9"));
console.log(phoneLetter("23"));
console.log(phoneLetter("5635"));
