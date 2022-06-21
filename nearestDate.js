const dates = ["2022-03-31", "2022-03-27", "2022-03-30", "2022-04-01"];

const getNearestDate = (dates = [], target = "") => {
  // The date is already in the array
  if (dates.includes(target)) return target;

  // What is the next nearest timestamp to this one?
  const timestamp = new Date(target).getTime();

  let smallestDiff = undefined;
  let nearest = undefined;

  dates.forEach((date) => {
    const diff = Math.abs(new Date(date).getTime() - timestamp);

    if (!smallestDiff || diff < smallestDiff) {
      smallestDiff = diff;
      nearest = date;
    }
  });

  return nearest;
};

const result = getNearestDate(dates, "2022-03-29");

console.log(result);
