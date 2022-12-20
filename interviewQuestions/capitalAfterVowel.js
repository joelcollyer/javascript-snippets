/**
 * Given a string, make every consonant after a vowel uppercase.
 * Can you do this with and without regex?
 */

withRegex = (str = "") => {
  return str.replace(/[aeiou]([^aeiou]{1})/gi, (match, consonant) => {
    return match.replace(consonant, consonant.toUpperCase());
  });
};

withoutRegex = (str = "") => {
  const vowels = "aeiou";

  return str
    .split("")
    .map((letter, pos) => {
      const prevLetter = str[pos - 1] ?? "";

      if (vowels.includes(prevLetter.toLowerCase()) && !vowels.includes(letter)) {
        return letter.toUpperCase();
      }

      return letter;
    })
    .join("");
};

const capitalAfterVowel = (str = "", useRegex = true) => {
  return useRegex ? withRegex(str) : withoutRegex(str);
};

console.log(capitalAfterVowel("hello world")); // "heLlo WoRld"
console.log(capitalAfterVowel("xaabeuekadii")); // "xaaBeueKaDii"

// Without Regex
console.log(capitalAfterVowel("hello world", false)); // "heLlo WoRld"
console.log(capitalAfterVowel("xaabeuekadii", false)); // "xaaBeueKaDii"
