/**
 * Given a positive integer n, return all of its anti-divisors.
 * Anti-divisors are numbers that do not divide a number by the largest
 * possible margin (1 is not an anti-divisor of any number).
 * https://oeis.org/A066272/a066272a.html
 */

const antidivisor = (n = 1) => {
  let antidivisors = [];

  for (let k = 2; k < n; k++) {
    const nmodk = n % k;
    if (nmodk === k / 2 || nmodk === (k - 1) / 2 || nmodk === (k + 1) / 2) {
      antidivisors.push(k);
    }
  }

  return antidivisors;
};

console.log(antidivisor(1)); // []
console.log(antidivisor(3)); // [2]
console.log(antidivisor(5)); // [2, 3]
console.log(antidivisor(10)); // [3, 4, 7]
console.log(antidivisor(234)); // [4, 7, 12, 36, 52, 67, 156]
