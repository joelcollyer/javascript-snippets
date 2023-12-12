const MS = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
};

const roundTo = (number = 0, precision = 2) =>
  Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision;

const divide = (dividend = 0, divisor = 0, precision = 0) => {
  const quotient = precision !== 0 ? roundTo(dividend / divisor, precision) : Math.floor(dividend / divisor);
  const remainder = roundTo(dividend - quotient * divisor, precision);
  return { quotient, remainder };
};

function Countdown() {
  const now = new Date();
  const end = new Date("2024-02-15 17:00:00");

  const timeUntil = end.getTime() - now.getTime();
  const { quotient: days, remainder: partialDay } = divide(timeUntil, MS.day);
  const { quotient: hours, remainder: partialHour } = divide(partialDay, MS.hour);
  const { quotient: minutes, remainder: partialMinute } = divide(partialHour, MS.minute);
  const { quotient: seconds } = divide(partialMinute, MS.second);

  console.clear();
  console.log({ days, hours, minutes, seconds });

  setTimeout(Countdown, MS.second / 4);
}

(() => {})(Countdown());
