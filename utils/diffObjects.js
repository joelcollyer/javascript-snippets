const lodash = require("lodash");
const { set } = lodash;

/**
 * Is the provided variable a valid integer
 * @param {*} item
 * @returns {boolean}
 */
const isInt = (item) => {
  if (!item) return false;
  const num = Number(item);
  return (
    num >= 0 &&
    num <= Number.MAX_SAFE_INTEGER &&
    num < Infinity &&
    item.toString() === num.toString()
  );
};

/**
 * Is the variable an Object?
 * @param {*} item
 * @returns {boolean}
 */
const isObject = (item) => {
  return item && typeof item === "object" && !Array.isArray(item);
};

/**
 * Is the variable an Array?
 * @param {*} item
 * @returns {boolean}
 */
const isArray = (item) => {
  return item && Array.isArray(item);
};

/**
 * Convert an object into an array (provided the key is numeric)
 * @param {Object} obj
 * @returns {Array}
 */
const convertObjectToArray = (obj = {}) => {
  return Object.keys(obj).reduce((expanded, key) => {
    expanded[key] = obj[key];
    return expanded;
  }, []);
};

/**
 * Convert an array or object into dot notation (i.e. `[{ name: 'example' }]` becomes `{ '0.name': example }`)
 * @param {Object|Array} obj The object to be converted to dot notation
 * @param {string} [baseKey=] The start of the key (used by recursion when converting deep objects)
 * @param {string} [separator=.] The character to separate key parts with
 * @returns Object
 */
const dot = (obj = {}, baseKey = "", separator = ".") => {
  if (!obj || Object.entries(obj).length < 1) return obj;

  return Object.entries(obj).reduce((flattened, [key, value]) => {
    const thisKey = `${baseKey && `${baseKey}${separator}`}${key}`;

    if (isArray(value) || isObject(value)) {
      flattened = { ...flattened, ...dot(value, thisKey, separator) };
    } else {
      flattened[thisKey] = value;
    }

    return flattened;
  }, {});
};

/**
 * Expand an object with dotted keys back into nested objects/arrays
 * @param {*} obj The dotted object to be expanded, for example: { "example.0.name": "Joel" }
 * @param {*} [separator=.] Optional separator used to split the keys, defaults to a period
 * @returns The expanded object, for example: { "example": [{ "name": "Joel" }] }
 */
const undot = (obj = {}, separator = ".") => {
  if (!obj || Object.entries(obj).length < 1) return obj;

  let result = {};

  // Expand the object
  result = Object.entries(obj).reduce((expanded, [key, value]) => {
    if (key.includes(separator)) {
      expanded = set(expanded, key, value);
    } else {
      expanded[key] = value;
    }

    return expanded;
  }, {});

  // If the first key of the object is an integer, it should be an array instead
  if (Object.keys(result).every(isInt)) {
    result = convertObjectToArray(result);
  }

  return result;
};

/**
 * Deeply Compare two objects to find new, updated, or removed values
 * @param {Object|Array} a
 * @param {Object|Array} b
 * @returns {Object|Array} Only values that are different in the two objects
 */
const diffObjects = (a = {}, b = {}) => {
  const aFlat = dot(a);
  const bFlat = dot(b);

  let changes = {};

  // New or Changed values
  Object.entries(bFlat).forEach(([key, value]) => {
    if (!key in aFlat || aFlat[key] !== bFlat[key]) changes[key] = value;
  });

  // Removed values
  Object.entries(aFlat).forEach(([key]) => {
    if (!(key in bFlat)) changes[key] = null;
  });

  // Filter the objects to retain only new, removed, or changed values
  return undot(changes);
};

// TEST: Changes in deeply nested objects
const original = {
  id: 123,
  name: "Groceries",
  lineItems: [
    {
      id: 1,
      amount: 12.75,
      children: [{ id: 2, amount: 3.75 }],
    },
    {
      id: 3,
      amount: 13.5,
      children: [{ id: 4, amount: 3.75, description: "Apples" }],
    },
  ],
};

const updated = {
  id: 123,
  name: "Shopping List",
  lineItems: [
    {
      id: 1,
      amount: 12.8,
      children: [{ id: 2, amount: 3.75, description: "chocolate" }],
    },
    { id: 3, amount: 13.5, children: [{ id: 4, amount: 3.8 }] },
  ],
};

// See that the name has changed, and there have been changes in both line items and their children
console.log(diffObjects(original, updated));

// Convert an array
console.log(undot(dot(["Joel", "Collyer", "Calgary", "AB"])));

// Convert an array of objects
console.log(undot(dot([{ name: "John" }, { name: "Jane" }, { name: "Jim" }])));

// Convert non-numeric keys
console.log(convertObjectToArray({ firstName: "John", lastName: "Wayne" }));
