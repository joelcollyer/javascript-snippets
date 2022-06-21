const containedItems = (input = "", start = 0, end = 0) => {
  const matches = input.slice(start, end).match(/(?<=\|)([\*]+)(?=\|)/g);
  return matches ? matches.join("").length : 0;
};

let str = "|**|*|*";
console.log(containedItems(str, 0, 5));
console.log(containedItems(str, 0, 6));
console.log(containedItems(str, 1, 7));
console.log(containedItems(str, 4, 7));

str = "*|**|****|*|********";
console.log(containedItems(str, 0, 10));
