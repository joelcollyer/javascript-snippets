const isSameDay = (dateA, dateB) =>
  dateA.getFullYear() === dateB.getFullYear() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getDate() === dateB.getDate();

const isBefore = (dateA, dateB) => dateB.valueOf() - dateA.valueOf() > 0;

const isSameOrBefore = (dateA, dateB) =>
  isSameDay(dateA, dateB) || isBefore(dateA, dateB);

const addDays = (date = new Date(), days = 1) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
};

const subtractDays = (date = new Date(), days = 1) => addDays(date, -days);

const dateA = new Date("2022-03-03 09:00:00");
const dateB = new Date("2022-03-03 23:59:59");

console.log({
  isSameDay: isSameDay(dateA, dateB),
  isBefore: isBefore(dateA, dateB),
  isSameOrBefore: isSameOrBefore(dateA, dateB),
  addDays: addDays("2022-03-29", 4),
  subtractDays: subtractDays("2022-04-01", 3),
});
