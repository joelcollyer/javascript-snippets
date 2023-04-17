const { roundToFixed } = require("./Math");

/**
 * Command line utility for calculating rates and markups
 * For a given inbound amount, calculated a "marked up" outbound amount.
 * @example
 * // Logs { inboundRate: '100.00',   markupPercentage: '14.00%',  markupAmount: '16.28',  outboundRate: '116.28' }
 * > node calcRate.js 100 14
 */

const [inbound = "0", markup = "14"] = process.argv.slice(2);

const inboundRate = +inbound;
const markupPercentage = +markup / 100;
const markupAmount = (markupPercentage * inboundRate) / (-1 * markupPercentage + 1);
const outboundRate = inboundRate + markupAmount;

console.log({
  inboundRate: roundToFixed(inboundRate),
  markupPercentage: `${roundToFixed(markupPercentage * 100)}%`,
  markupAmount: roundToFixed(markupAmount),
  outboundRate: roundToFixed(outboundRate),
});
