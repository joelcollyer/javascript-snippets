// Number of milliseconds in a day: 1000 ms in a second * 3600 seconds in an hour * 24 hours in a day
const msPerDay = 1000 * 3600 * 24;

/**
 * Confirms that the param is a valid Date instance
 * @param {unknown} date Maybe a date?
 * @returns {boolean} false if the input is not a valid Date
 */
const isValidDate = (date) => date instanceof Date && !isNaN(date);

/**
 * Sort an array of Date()'s from earliest to latest
 * @param {Array.<Date>} dates
 * @returns {Array.<Date>} Sorted dates from earliest to latest
 */
const sortDates = (dates = []) =>
  dates.sort((a, b) => a.getTime() - b.getTime());

/**
 * Create an array of Dates that includes all days between two dates, inclusive of the start and end date
 * @param {string|number|Date} start Any date or timestamp
 * @param {string|number|Date} end Any date or timestamp
 * @returns {Array.<Date>} An array of Dates between the two inputs, sorted earliest to latest
 */
const getDatesBetween = (start = "", end = "") => {
  const [startDate, endDate] = sortDates([
    new Date(start),
    new Date(end || start),
  ]);

  if (!start || !isValidDate(startDate))
    throw new Error(`getDatesBetween received and invalid start date.`);

  if (!isValidDate(endDate))
    throw new Error(`getDatesBetween received and invalid end date.`);

  const startTime = startDate.getTime();
  const endTime = endDate.getTime();

  const dates = [];
  const maxOffset = endTime - startTime; // milliseconds between the start and end
  for (let offset = 0; offset <= maxOffset; offset += msPerDay) {
    dates.push(new Date(startTime + offset));
  }

  return dates;
};

// The month of March (see that it ignores the time change)
console.log(getDatesBetween("2022-03-01", "2022-03-31"));

// Allows for new month and year
console.log(getDatesBetween("2021-12-30", "2022-01-02"));

// Same Date
console.log(getDatesBetween("2022-03-29", "2022-03-29"));

// Fixes backwards dates
console.log(getDatesBetween("1985-10-25", "1985-10-21"));

// Allows only one date to be entered
console.log(getDatesBetween("2022-12-29", undefined));
console.log(getDatesBetween("2022-12-29", null));
console.log(getDatesBetween("2022-12-29"));

// A long time ago, before the unix epoch
console.log(getDatesBetween("1812-06-18", "1812-06-20"));

// Around the unix epoch
console.log(getDatesBetween("1969-12-31", "1970-01-02"));

// Throws exceptions on invalid start date inputs
try {
  getDatesBetween("2022-12-32");
} catch (error) {
  console.log(error.toString());
}
try {
  getDatesBetween(undefined);
} catch (error) {
  console.log(error.toString());
}
try {
  getDatesBetween(null);
} catch (error) {
  console.log(error.toString());
}
try {
  getDatesBetween();
} catch (error) {
  console.log(error.toString());
}
try {
  getDatesBetween("2022-07-26", "2022-13-01");
} catch (error) {
  console.log(error.toString());
}
