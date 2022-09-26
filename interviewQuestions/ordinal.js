const ordinalMap = {
  1: "st",
  2: "nd",
  3: "rd",
};

const ordinal = (num = 0) => {
  const str = num.toString();
  const lastDigit = str[str.length - 1];
  return `${str}${ordinalMap[lastDigit] ?? "th"}`;
};

console.log(ordinal(3));
console.log(ordinal(57));
