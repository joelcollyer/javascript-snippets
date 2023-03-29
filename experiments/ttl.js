/**
 * Challenge: Can I create a human readable string that communicates how much
 * time has elapsed between two dates that are years apart?
 *
 * Known Issue: Leap years change the number of days/weeks in a year.
 */

// The duration to compute relative time formats for
const years = 90;
const start = new Date("1987-03-29 00:00:00");
const end = new Date().setFullYear(new Date(start).getFullYear() + years);

// Constants
const secondsInADay = 86400;
const secondsInAWeek = secondsInADay * 7;

// Convert a date to a relative time using Intl.RelativeTimeFormat
const getRelativeTime = (date = new Date()) => {
  const milliseconds = new Date(date).getTime();
  let secondsElapsed = Math.round((milliseconds - Date.now()) / 1000);
  let duration = Math.floor(secondsElapsed / secondsInAWeek);

  const rtf = new Intl.RelativeTimeFormat("en-CA", { numeric: "auto" });
  return rtf.format(duration, "week");
};

// Return a string that shows how many weeks have passed, and how many are left
const ttl = () => {
  const weeksAgo = getRelativeTime(start);
  const weeksRemaining = getRelativeTime(end);
  return `You started ${weeksAgo} and finish ${weeksRemaining}.`;
};

console.log(ttl());
