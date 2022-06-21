const longText = (
  input = "",
  len = 1,
  vowels = ["a", "e", "i", "o", "u", "y"]
) => {
  const replace = new RegExp(`([${vowels.join("")}])`, "ig");
  return input.replace(replace, "$1".repeat(len));
};

console.log(longText("Hello World", 3));
console.log(longText("lol", 10));
console.log(longText("Joel Collyer", 5));
console.log(longText("lmao", 3, ["l", "a", "o"]));
