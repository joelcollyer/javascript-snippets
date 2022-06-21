const isSameDay = (dateA, dateB) =>
  dateA.getFullYear() === dateB.getFullYear() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getDate() === dateB.getDate();

const isBefore = (dateA, dateB) => dateB.valueOf() - dateA.valueOf() > 0;

const isSameOrBefore = (dateA, dateB) =>
  isSameDay(dateA, dateB) || isBefore(dateA, dateB);

const dateA = new Date("2022-03-03 09:00:00");
const dateB = new Date("2022-03-03 23:59:59");

console.log({
  isSameDay: isSameDay(dateA, dateB),
  isBefore: isBefore(dateA, dateB),
  isSameOrBefore: isSameOrBefore(dateA, dateB),
});
