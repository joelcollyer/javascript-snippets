/**
 * Order entities by id using the order provided
 * @param {*} entities
 * @param {*} order
 */
const retainEntityOrder = (entities = [], order = [], opts = { sortByKey: "id" }) => {
  const { sortByKey } = opts;

  return entities.sort(
    (a, b) => order.findIndex((id) => id === a[sortByKey] ?? -1) - order.findIndex((id) => id === b[sortByKey] ?? -1)
  );
};

console.log(retainEntityOrder([{ id: 5 }, { id: 3 }, { id: 1 }, { id: 4 }, { id: 2 }], [1, 3, 2, 5, 4]));
