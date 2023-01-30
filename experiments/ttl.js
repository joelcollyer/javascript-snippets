const secondsInAWeek = 86400 * 7;

const ttl = (date = new Date()) => {
  const milliseconds = new Date(date).getTime();
  const secondsFromNow = Math.round((milliseconds - Date.now()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en-CA", { numeric: "auto" });
  return rtf.format(Math.floor(secondsFromNow / secondsInAWeek), "week");
};

console.log(ttl("2077-03-29"));
