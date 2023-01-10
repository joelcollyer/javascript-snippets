// This method returns a string after a given timeout
const asyncMethod = (timeout = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Waited ${timeout} milliseconds`);
      return resolve("Done!");
    }, timeout);
  });

// This method contains awaits that resolve at different times and returns a void
const returnAVoid = async () => {
  console.log("Started...");
  await asyncMethod(1000);
  await asyncMethod(500);
  console.log("... Finished.");
};

// So let's test out how this works...

/*
In order, this will console.log:
  Before calling method
  Started...
  After calling method
  Waited 1000 milliseconds
  Waited 500 milliseconds
  ... Finished.
 */
// console.log("Before calling method");
// returnAVoid();
// console.log("After calling method\r\n\r\n");

/*
Because this is correctly awaited, this will console.log:
  Before calling method
  Started...
  Waited 1000 milliseconds
  Waited 500 milliseconds
  ... Finished.
  After calling method
*/
(async () => {
  console.log("Before calling method");
  await returnAVoid();
  console.log("After calling method\r\n\r\n");
})();
