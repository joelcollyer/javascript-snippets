// Remove any char after the % symbol
const deleted = (input = "") => input.replace(/(%([^%]|$))/, "");

// Remove any char before the # symbol
const backspaced = (input = "") => input.replace(/((^|[^#])#)/, "");

// Compare two strings that contain delete and backspace chars
const equalWithDeletions = (first = "", second = "") => {
  while (first.indexOf("%") !== -1) first = deleted(first);
  while (first.indexOf("#") !== -1) first = backspaced(first);

  while (second.indexOf("%") !== -1) second = deleted(second);
  while (second.indexOf("#") !== -1) second = backspaced(second);

  return first === second;
};

// True as x === x
console.log(equalWithDeletions("a##x", "#a#x"));

// False as fart !== fifth year time
console.log(
  equalWithDeletions("fi##f%%%th %%year #time###", "fifth year time")
);
