/**
 * You are given a list of positive integers which represents some range of
 * integers which has been truncated. Find the missing bits, insert ellipses
 * to show that that part has been truncated, and print it.
 */

const missingBits = (bits = []) => {
  const separatedBits = bits.reduce((output, bit, index) => {
    output.push(bit);

    const next = bits[index + 1];
    if (!next) return output;

    const diff = next - bit;
    if (diff === 2) output.push((bit += 1));
    if (diff > 2) output.push("...");

    return output;
  }, []);

  return `[${separatedBits.join(",")}]`;
};

console.log(missingBits([1, 2, 3, 4, 20, 21, 22, 23])); // "[1,2,3,4,...,20,21,22,23]"
console.log(missingBits([1, 2, 3, 5, 6])); // "[1,2,3,4,5,6]"
console.log(missingBits([1, 3, 20, 27])); // "[1,2,3,...,20,...,27]"
