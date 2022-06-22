/**
 * We want to determine that a given input is unique to this entity in the DB.
 * We'd query for some criteria, then evaluate the response to see if there's
 * already an id that matches our input.
 *
 * For this example, I'll provide the `result` from the db
 * but it would normally be returned by a query,
 * then we evaluate the result to see if it's a valid id
 */
const isEntityUnique = (result = {}) => {
  // REDACTED: Query for existing entities, and return the result

  // Assert that no id is found
  return !result?.id;
};

// Should return true because the result entity doesn't have a valid id
console.log(isEntityUnique(null)); // true
console.log(isEntityUnique(undefined)); // true
console.log(isEntityUnique({})); // true
console.log(isEntityUnique({ id: undefined })); // true
console.log(isEntityUnique({ id: null })); // true
console.log(isEntityUnique({ id: 0 })); // true

// We have a valid id, so the entity is not unique
console.log(isEntityUnique({ id: 1 })); // false
console.log(isEntityUnique({ id: "a4dae122-fa69-44aa-bd89-0d2518ee4951" })); // false
