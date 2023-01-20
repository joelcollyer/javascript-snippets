/**
 * Variations on how to remove non-unique array elements
 */
const nonUniqueIds = [1, 1, 2, 2, 3, 3, 4, 4];

const withFilter = nonUniqueIds.filter((id, index, allIds) => allIds.findIndex((hasId) => hasId === id) === index);
const withArrayFrom = Array.from(new Set(nonUniqueIds));
const withSpread = [...new Set(nonUniqueIds)];

console.log({ withFilter, withArrayFrom, withSpread });
