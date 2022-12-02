/**
 * Format a null | undefined | string name into a well formed output for display
 * @param {string=} firstName
 * @param {string=} lastName
 * @returns {string} Defaults to "Unknown Guest" if the params are falsey
 */
const formatDisplayName = (firstName, lastName) => {
  const name = (
    `${firstName && lastName ? `${lastName},` : lastName ?? ""} ` +
    `${firstName ?? ""}`
  ).trim();
  if (!name) return "Unknown Guest";
  return name;
};

// Does it format partial names correct?
console.log(formatDisplayName("John", undefined)); // "John"
console.log(formatDisplayName(undefined, "Doe")); // "Doe"
console.log(formatDisplayName("John", "Doe")); // "Doe, John"

// Does it gracefully handle missing or undefined input?
console.log(formatDisplayName()); // "Unknown Guest"
console.log(formatDisplayName(undefined, undefined)); // "Unknown Guest"

// Does it gracefully handle NULL?
console.log(formatDisplayName(null, null)); // "Unknown Guest"
console.log(formatDisplayName("John", null)); // "John"
console.log(formatDisplayName(null, "Doe")); // "Doe"
