/**
 * Prompt: You have n equal-sized blocks and you want to build a staircase with
 * them. Return the number of steps you can fully build.
 */

const buildStaircase = (blocks = 0) => {
  if (!blocks || blocks < 1) return 0;

  let steps = [];
  let blocksRemaining = blocks;

  while (blocksRemaining > 0) {
    const nextStepsLength = (steps.at(-1)?.length || 0) + 1;

    if (blocksRemaining < nextStepsLength) break;

    steps.push("#".repeat(nextStepsLength));
    blocksRemaining = blocksRemaining - nextStepsLength;
  }

  console.log("\n" + steps.join("\n"));

  return steps.length;
};

console.log(buildStaircase(6)); // 3
console.log(buildStaircase(9)); // 3 it takes 10 blocks to make 4 steps
console.log(buildStaircase(150)); // 16
