// The latin alphabet as an array of lowercase letters
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const letterToNumber = (letter = "") =>
  alphabet.findIndex((alpha) => alpha === letter.toLowerCase());

const numberToLetter = (number = -1) => alphabet[number] ?? -1;

const strToNumArr = (str = "") =>
  str.split("").map((letter) => letterToNumber(letter));

// Restore non-alpha characters to their original positions in the array
const restoreNonAlpha = (input = "", arr = []) => {
  const original = input.split("");
  return arr.map((char, index) => (char === -1 ? original[index] : char));
};

// Restore the case of the characters using the original string
const restoreCase = (input = "", arr = []) => {
  const isUpperCase = input
    .split("")
    .map((char) => (alphabet.find((letter) => letter === char) ? 0 : 1));

  return arr.map((char, index) =>
    char !== -1 && isUpperCase[index] === 1 ? char.toUpperCase() : char
  );
};

/**
 * Using the caesar cipher method, encode a message
 */
const encode = (decoded = "", offset = 0) => {
  const numbers = strToNumArr(decoded);

  const encoded = numbers.map((number) => {
    if (number !== -1) number += offset;
    if (number >= alphabet.length) number -= alphabet.length;
    return numberToLetter(number);
  });

  const withCase = restoreCase(decoded, encoded);
  const withNonAlpha = restoreNonAlpha(decoded, withCase);
  return withNonAlpha.join("");
};

const decode = (encoded = "", offset = 0) => {
  const numbers = strToNumArr(encoded);

  const decoded = numbers.map((number) => {
    if (number === -1) number += alphabet.length + 2; // Non-Alpha should step off the end of the array
    if (number <= alphabet.length) number -= offset;
    if (number < 0) number += alphabet.length;
    return numberToLetter(number);
  });

  const withNonAlpha = restoreNonAlpha(encoded, decoded);
  const withCase = restoreCase(encoded, withNonAlpha);
  return withCase.join("");
};

// What message would you like to send?
const offset = 11;
const original = "I can't believe it's not butter!?";

// Encode a secret message with a caesar cipher
const encoded = encode(original, offset);
console.log("Encoded: " + encoded);

// Retrieve an encoded message by reversing the caesar cipher
const decoded = decode(encoded, offset);
console.log("Decoded: " + decoded);
