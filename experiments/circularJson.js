/**
 * Demonstrating why we should use a JSON helper to stringify objects if there's
 * a change that circular objects could be passed to it.
 * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#issue_with_serializing_circular_references
 */

// Create an object that contains a circular references
let node = { id: 1, name: "Circular Reference", children: [{ id: 2, name: "This is fine" }] };

// This works because we don't have a circular reference yet
console.log(JSON.stringify(node) + "\r\n");

// But this breaks JSON.stringify()
node.children.push(node);

// See...
try {
  json = JSON.stringify(node);
} catch (error) {
  console.error(error + "\r\n");
}

// We can fix that by removing non-unique elements from the object using a WeakSet
const stringifyJson = (obj) => {
  const cache = new WeakSet();
  return JSON.stringify(obj, (_, value) => {
    if (typeof value === "object" && value !== null) {
      // If this value is cached we have circular JSON, return undefined
      if (cache.has(value)) return;
      cache.add(value);
    }
    // This value has been cached for the first time, return it
    return value;
  });
};

// This now works, and the circular reference is replaced with "null":
console.log(stringifyJson(node));
