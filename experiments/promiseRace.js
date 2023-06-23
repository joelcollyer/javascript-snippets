// This is a mock API response
const myResolver = async () => {
  console.log("Starting querying...");
  const result = await new Promise((resolve, _) => setTimeout(() => resolve("Request Successful"), 1500));
  console.log("Finished querying.");
  return result;
};

// A new request is made
const req = async () => {
  return await new Promise((resolve, reject) =>
    Promise.race([
      // If that request resolves in time, it wins the race...
      myResolver()
        .then((res) => resolve(res))
        .catch((err) => reject(err)),
      // If not, we can short-circuit the request to stop it from running and kill the current thread...
      setTimeout(() => reject(new Error("Request Timed Out")), 1000),
    ])
  );
};

// Let's see it in action!
req().then((result) => {
  console.log({ result });
});
