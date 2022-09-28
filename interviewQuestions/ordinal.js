const ordinalMap = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
};

const ordinal = (num = 0) => {
  const pluralRules = new Intl.PluralRules("en-US", { type: "ordinal" });
  return `${num}${ordinalMap[pluralRules.select(num)]}`;
};

console.log(ordinal(1)); // 1st
console.log(ordinal(13)); // 13th
console.log(ordinal(42)); // 42nd
console.log(ordinal(103)); // 103rd
