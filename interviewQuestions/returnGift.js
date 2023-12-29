/**
 * Prompt: You have some gifts you want to return. Gifts bought in December have
 * a 90-day return window, and all other gifts have a 30-day return window.
 * Given a gift's buy date, write a function that prints the last day you can
 * return the gift. You can choose how dates should be formatted!
 */

const dateFormat = (
  date = new Date(),
  opts = { weekday: undefined, year: "numeric", month: "short", day: "numeric" }
) => date.toLocaleDateString("en-ca", opts);

function returnGift(dateStr = "") {
  const purchaseDate = new Date(dateStr);

  const daysToReturn = (purchaseDate.getMonth() === 11 ? 90 : 30) - 1;
  const lastReturnDate = new Date(purchaseDate);
  lastReturnDate.setDate(purchaseDate.getDate() + daysToReturn);

  return dateFormat(lastReturnDate);
}

console.log(returnGift("Dec 25, 2023")); // "Mar 23, 2024" - 90 days to return
console.log(returnGift("Nov 30, 2023")); // "Dec 29, 2023" - 30 days to return
