const randomNumber = (min = 1, max = 9) => Math.floor(Math.random() * (max - min + 1)) + min;

const sleep = async (timeout) => await new Promise((resolve) => setTimeout(() => resolve(true), timeout));

const request = async (num) => {
  console.log(`Running ${num}`);
  await sleep(num);
  console.log(`Finished ${num}`);
  return num;
};

/**
 * Promise.all executes each request in parallel and awaits all results
 * .forEach is also parallel but does not await the results
 *
 * Solution: Using a For loop with an away executes each promise sequentially.
 */
(async function run() {
  const timeouts = Array.from({ length: 5 }, (_, i) => randomNumber(500, 1500));

  // console.log("\r\nPromise.all...");
  // await Promise.all(timeouts.map(async (timeout) => await request(timeout)));

  // console.log("\r\nForEach...");
  // timeouts.forEach(async (timeout) => await request(timeout));

  console.log("\r\nFor...");
  for (let index = 0; index < timeouts.length; index++) {
    const timeout = timeouts[index];
    await request(timeout);
  }

  console.log("done");
})();
