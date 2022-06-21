let dict = ["apple", "banana", "cranberry", "strawberry"];

const tidyStr = (str = "") => str.toLowerCase().trim();

const simpleAutocomplete = (str = "") =>
  dict.filter((term) => tidyStr(term).includes(tidyStr(str)));

console.log(simpleAutocomplete("app")); // ['apple']
console.log(simpleAutocomplete("berry")); // ['cranberry', 'strawberry']
console.log(simpleAutocomplete("fart")); // []
