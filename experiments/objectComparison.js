/**
 * Compare two or more objects to see if they contain the same keys and values
 */
const isEqual = (...objects) => {
  // Sort the object by their key, and stringify
  const json = objects.map((unsortedObj) => {
    const sortedObject = Object.keys(unsortedObj)
      .sort()
      .reduce((newObj, key) => Object.assign({}, newObj, { [key]: unsortedObj[key] }), {});

    return JSON.stringify(sortedObject);
  });

  // See that subsequent strings are the same as the first one
  return json.every((str) => str === json[0]);
};

// Test: Two objects that contain the same address information in a different order
const address1 = {
  address: "123 Fake Street",
  city: "Calgary",
  province: "AB",
};

const address2 = {
  province: "AB",
  address: "123 Fake Street",
  city: "Calgary",
};

console.log(isEqual(address1, address2)); // true
