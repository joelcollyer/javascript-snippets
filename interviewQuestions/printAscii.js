/**
 * Print the ASCII printable characters code page (0x20-0x7E),
 * without any built-ins or functions that do it for you.
 */

const printASCII = (from = "0x20", to = "0x7e") => {
  const min = parseInt(from, 16);
  const max = parseInt(to, 16);

  let chars = [];
  for (let code = min; code <= max; code++) {
    chars.push(String.fromCharCode(code));
  }

  return chars.join("");
};

console.log(printASCII());
