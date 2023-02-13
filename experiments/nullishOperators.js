/**
 * We often encounter NULL or UNDEFINED values in our code base.
 * Is there a difference between || and ?? when assigning parameters?
 */

// Here are the possible values we might encounter:
const variations = [null, undefined, {}, [], false, 0, ""];

// When destructuring, the "or" operator outputs...
console.log("\r\nDestructuring with an or...");
variations.forEach((input) => {
  const { abbreviation = "CA" } = input?.address?.country || {};
  console.log(abbreviation);
});
// ... "CA" for everything

// The nullish coalescing operator
console.log("\r\nDestructuring with a nullish operator...");
variations.forEach((input) => {
  const { abbreviation = "CA" } = input?.address?.country ?? {};
  console.log(abbreviation);
});
// ... also outputs "CA" for everything

// But what if we're assigning to a variable?
console.log("\r\nTesting variable assignment...");
variations.forEach((input) => {
  const abbreviation = input || "CA";
  console.log(abbreviation);
});
// The "or" operator reassigns some falsy values to our fallback:
// null = 'CA'
// undefined = 'CA'
// {} = '{}'
// [] = '[]'
// false = 'CA'
// 0 = 'CA'
// "" = 'CA'

console.log("\r\nTesting nullish variable assignment...");
variations.forEach((input) => {
  const abbreviation = input ?? "CA";
  console.log(abbreviation);
});

// But the nullish operator doesn't change false, 0, or the empty string:
// null = 'CA'
// undefined = 'CA'
// {} = '{}'
// [] = '[]'
// false = 'false'
// 0 = '0'
// "" = ''
