/**
 * Given an array of words, return the words that can be typed using letters of
 * only one row on a keyboard. For bonus points, include the option for a user
 * to pick the type of keyboard they are using (ANSI, ISO, etc), and/or give
 * options for how many/which rows are allowed!
 */

const keyboards = {
  ANSI: ["qwertyuiop", "asdfghjkl", "zxcvbnm"],
  ISO: ["qwertyuiop", "asdfghjkl", "zxcvbnm"],
  DVORAK: ["pyfgcrl", "aoeuidhtns", "qjkxbmwvz"],
};

const oneRow = (words = [], format = "ANSI") => {
  const keyboard = keyboards[format];

  return words.filter((word) => {
    const letters = word.split("");
    const [firstLetter] = letters;
    const row = keyboard.find((keys) => keys.split("").includes(firstLetter.toLowerCase()));
    return letters.every((letter) => row.includes(letter.toLowerCase()));
  });
};

console.log(oneRow(["candy", "fart", "pop", "Zelda", "flag", "typewriter"])); // ['pop', 'flag', 'typewriter']
console.log(oneRow(["candy", "fart", "pop", "Diode", "flag", "typewriter"], "DVORAK")); // ['Diode']
