/**
 * Prompt: Write a function that truncates words in a string to length n.
 */

const truncate = (str = "", len = 1) => {
  return str.replace(/([a-z]+)/gi, (word) => word.slice(0, len));
};

const n = 3;
console.log(truncate("never gonna give you up", n)); // 'nev gon giv you up'
console.log(truncate("*hello* darkness, my ~old_friend", n)); // '*hel* dar, my ~old_fri'
