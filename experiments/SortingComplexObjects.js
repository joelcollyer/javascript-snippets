const taxFeeCategoryOrder = ["FlatFee", "PerDayFee", "CreditCardFee", "Tax"];
const taxFeeJurisdictionOrder = ["Property", "Municipal", "County", "State", "Federal"];

function sortByArrayIndex(a = "", b = "", orderArray = []) {
  const indexA = orderArray.findIndex((elem) => elem === a);
  const indexB = orderArray.findIndex((elem) => elem === b);
  if (indexA === -1 || indexB === -1) return 0;
  return indexA - indexB;
}

function sortFeesAndTaxes(a, b) {
  const { order: orderA, category: categoryA, jurisdiction: jurisdictionA } = a;
  const { order: orderB, category: categoryB, jurisdiction: jurisdictionB } = b;

  // Compare the Categories
  const categorySort = sortByArrayIndex(categoryA, categoryB, taxFeeCategoryOrder);
  if (categorySort !== 0) return categorySort;

  // Compare the Jurisdictions
  const jurisdictionSort = sortByArrayIndex(jurisdictionA, jurisdictionB, taxFeeJurisdictionOrder);
  if (jurisdictionSort !== 0) return jurisdictionSort;

  // Compare the order
  return orderA - orderB;
}

// Here's an example where fees and taxes are not ordered correctly
const unorderedTaxesAndFees = [
  {
    id: 1,
    order: 0,
    category: "FlatFee",
  },
  {
    id: 2,
    order: 1,
    category: "Tax",
    jurisdiction: "Federal",
  },
  {
    id: 3,
    order: 2,
    category: "PerDayFee",
  },
  {
    id: 4,
    order: 3,
    category: "Tax",
    jurisdiction: "State",
  },
  {
    id: 5,
    order: 4,
    category: "CreditCardFee",
  },
];

// Sort the template, and reset the `order` param
const sortedTaxesAndFees = unorderedTaxesAndFees.sort(sortFeesAndTaxes).map((taxFee, order) => ({ ...taxFee, order }));

// TEST: See that the id's are in the correct order
const actual = sortedTaxesAndFees.map(({ id }) => id);
const expected = [1, 3, 5, 4, 2];
console.log({ isSorted: actual.every((id, index) => id === expected[index]), sortedTaxesAndFees });
