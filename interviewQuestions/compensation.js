/**
 * Prompt: The user will have to put the job type and the number of hours into the program with a text prompt.
 * The program will need to provide a message and exit if the user enters an incorrect value to the input
 * fields. Use the example job types and their corresponding wage from the table provided.
 * Employees are paid at 1.5 times their hourly rate for all hours worked above 40 hours. This needs to be
 * accounted for in the program.
 */

// Config
const overtimeModifier = 1.5;
const fullTimeHours = 40;
const minHours = 0;
const maxHours = 168;
const rateByRole = {
  clerk: 22.35,
  tech: 34.16,
};

// Round a number to a given precision and resolve floating point math errors
const roundTo = (number, precision = 2) => Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision;

/**
 * For the role and hours worked, return an object that describes the
 * regular and overtime pay that the employee should receive
 */
function compensation(role = "clerk", hours = 0) {
  if (hours < minHours) throw new Error(`Cannot work fewer than ${minHours} hours.`);
  if (hours > maxHours) throw new Error(`Cannot work more than ${maxHours} hours in one week.`);

  const rate = rateByRole[role];
  if (!rate) throw new Error(`No hourly rate defined for "${role}."`);

  const regularHours = hours > fullTimeHours ? fullTimeHours : hours;
  const regularPay = regularHours * rate;

  const overtimeHours = hours > fullTimeHours ? hours - fullTimeHours : 0;
  const overtimePay = overtimeHours * overtimeModifier * rate;

  return {
    role,
    wage: roundTo(regularPay),
    overtime: roundTo(overtimePay),
    total: roundTo(regularPay + overtimePay),
  };
}

// Test both roles return regular hours
console.log(compensation("clerk", 40)); // { role: "clerk", wage: 894, overtime: 0 }
console.log(compensation("tech", 40)); // { role: "tech", wage: 1366.4, overtime: 0 }

// Test that overtime is calcualted at 1.5 times their regular rate
console.log(compensation("clerk", 48)); // { role: "clerk", wage: 894, overtime: 268.2 }
console.log(compensation("tech", 48)); // { role: "tech", wage: 1366.4, overtime: 409.92 }

// Test exception handling
try {
  // Too few hours
  compensation("tech", -1);
} catch (err) {
  console.log(err?.message);
}
try {
  // Too many hours
  compensation("clerk", 300);
} catch (err) {
  console.log(err?.message);
}
try {
  // Invalid Role
  compensation("nerd", 40);
} catch (err) {
  console.log(err?.message);
}
