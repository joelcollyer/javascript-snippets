// This simulates our flaky operation where one of the entities with throw a fatal error
const operation = async (id = 0) => {
  if (id === 2) throw new Error("Processing failed.");
  return Promise.resolve({ id, message: "Your changes were saved." });
};

const app = async () => {
  // Some flaky operation, where exceptions previously derailed other changes
  const ids = [1, 2, 3];
  const results = await Promise.allSettled(ids.map((id) => operation(id)));

  // Retrieve the ids that failed so we can do other reporting to the user
  const [successes, failures] = results.reduce(
    ([win, lose], { value }, index) => {
      if (value) {
        win.push(value);
      } else {
        lose.push({ id: ids[index] });
      }

      return [win, lose];
    },
    [[], []]
  );

  // This is now two arrays, one with the success messages from the operation, and an array of failed id's
  console.log({ successes, failures });
};

app();
