/**
 * Are the two Date params the same year, month, and day?
 */
const isSameDay = (dateA, dateB) =>
  dateA.getFullYear() === dateB.getFullYear() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getDate() === dateB.getDate();

/**
 * Given two Date params, is the first Date before the second?
 */
const isBefore = (dateA, dateB) => dateB.valueOf() - dateA.valueOf() > 0;

/**
 * Given two Date params, is the first Date after the second?
 */
const isAfter = (dateA, dateB) => dateB.valueOf() - dateA.valueOf() < 0;

/**
 * Given two Date params, is the first Date the same day as, or before, the second?
 */
const isSameOrBefore = (dateA, dateB) => isSameDay(dateA, dateB) || isBefore(dateA, dateB);

/**
 * Given two Date params, is the first Date the same day as, or after, the second?
 */
const isSameOrAfter = (dateA, dateB) => isSameDay(dateA, dateB) || isAfter(dateA, dateB);

/**
 * Add a given number of days to the given Date.
 */
const addDays = (date = new Date(), days = 1) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
};

/**
 * Subtract a given number of days from the given Date.
 */
const subtractDays = (date = new Date(), days = 1) => addDays(date, -days);

const dateA = new Date("2022-03-03 09:00:00");
const dateB = new Date("2022-03-03 23:59:59");

console.log({
  isSameDay: isSameDay(dateA, dateB),
  isBefore: isBefore(dateA, dateB),
  isAfter: isAfter(dateA, dateB),
  isSameOrBefore: isSameOrBefore(dateA, dateB),
  isSameOrAfter: isSameOrAfter(dateA, dateB),
  addDays: addDays("2022-03-29", 4),
  subtractDays: subtractDays("2022-04-01", 3),
});
