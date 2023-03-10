/**
 * Write a function that takes a string of slashes (\ and /) and returns all
 * of those slashes drawn downwards in a line connecting them.
 */

const verticalSlashes = (input = "") => {
  const slashes = input.split("");
  const output = [];

  slashes.forEach((slash, i) => {
    const lastElem = output[i - 1] ?? " ";
    const prevSpaces = lastElem.lastIndexOf(" ");
    const prevSlash = lastElem.trim();

    let nextSpaces = prevSpaces + 1;
    if (prevSlash === "\\") nextSpaces++;
    if (slash === "/") nextSpaces--;

    const spaces = " ".repeat(nextSpaces);
    output.push(`${spaces}${slash}`);
  });

  console.log(output.join("\n"));
};

verticalSlashes(String.raw`\\\//\/\\`);

verticalSlashes(String.raw`\\\\`);
