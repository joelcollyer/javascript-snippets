/**
 * Users can delete/restore elements prior to saving, but when we save we only
 * persist entities and their children to the database as a flattened array.
 */

const entities = [
  { id: 1, children: [{ id: 2 }, { id: 3, deleted: true }, { id: 4 }] },
  { id: 5, deleted: true, children: [{ id: 6 }] },
  {
    id: 7,
    children: [
      { id: 8, deleted: true },
      { id: 9, children: [{ id: 10 }, { id: 11 }] },
    ],
  },
];

const filterAndFlatten = (entities = [], filterMethod = () => true) => {
  return entities
    .filter(filterMethod)
    .flatMap(({ children = [], ...parent }) => [parent, ...filterAndFlatten(children, filterMethod)]);
};

const filterDeleted = ({ deleted = false }) => !deleted;

const flattened = filterAndFlatten(entities, filterDeleted);

console.log({ flattened });
