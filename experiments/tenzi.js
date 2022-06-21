/**
 * Roll a dice
 */
const roll = (sides = 6) => ~~(Math.random() * sides) + 1;

/**
 * Roll a given number of dice to create a "hand"
 */
const newHand = (length = 10) => Array.from({ length }, () => roll());

/**
 * Identify which number is shown the most in a given hand
 */
const mostOf = (hand = []) => {
  // Count the number of matching dice
  const counted = hand.reduce((count, dice) => {
    if (!count[dice]) count[dice] = 0;
    count[dice] += 1;
    return count;
  }, {});

  // Sort the dice by most to least
  const sorted = Object.entries(counted).sort(([, a], [, b]) => b - a);

  // No champion number identified
  if (sorted[0][1] === 1) return 0;

  // Return the first number, as there's the most of it
  return parseInt(sorted[0][0], 10);
};

/**
 * How many dice rolls are needed to get all the numbers to match?
 */
const tenzi = () => {
  // Start playing
  let attempts = 0;
  let target = 0;
  let hand = [];

  // Roll the whole hand until we have a target number
  while (!target) {
    hand = newHand();
    target = mostOf(hand);
  }

  console.log(`Target: ${target}`);
  console.log(hand);

  // Keep the dice we want and re-roll everything else
  while (hand.length > 0) {
    hand = hand.filter((num) => num !== target);
    hand = newHand(hand.length);
    attempts++;

    console.log(hand);
  }

  // Return the number of rolls needed to get all the dice to match
  return attempts;
};

console.log(`Rolls: ${tenzi()}`);
