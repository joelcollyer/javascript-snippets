/**
 * Implement a “spin the wheel” game where the player can bet on each spin of a
 * wheel and either double their money, lose their money, or keep their money.
 * You can choose how the user bets, and what data structures you might want to
 * use for the player and their money!
 */

// The players bank balance
let balance = 100;

// How much the bet is modified by when you win
const multiplier = 2;

const win = (bet = 0) => {
  balance = bet * multiplier + balance;
  return balance;
};

const lose = (bet = 0) => {
  balance = balance - bet;
  return balance;
};

const draw = () => {
  return balance;
};

const spin = (bet = 0) => {
  // Validate the players bet and balance
  if (!bet) throw new Error("You have to bet more than zero dollars.");
  if (bet < 0) throw new Error("You cannot bet a negative dollar amount.");
  if (balance <= 0) throw new Error("You cannot bet as you have run out of money.");
  if (bet > balance) throw new Error(`You cannot bet more than your bank balance of $${balance}.`);

  // Clone the current balance so we have accurate reporting after we spin
  const startingBalance = +`${balance}`;

  // Spin that wheel!
  const outcomes = [win, lose, draw];
  const spun = outcomes[Math.floor(Math.random() * outcomes.length)];
  spun(bet);

  // Tell the player about their result
  console.log({ result: spun.name, startingBalance, bet, newBalance: balance });
  return balance;
};

const amount = process.argv[2] ?? 0;
console.log(spin(+amount));
