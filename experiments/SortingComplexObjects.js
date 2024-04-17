const taxFeeCategoryOrder = ["FlatFee", "PerDayFee", "CreditCardFee", "Tax"];
const taxFeeJurisdictionOrder = ["Property", "Municipal", "County", "State", "Federal"];

function sortFeesAndTaxes(a, b) {
  const { order: orderA, category: categoryA, jurisdiction: jurisdictionA } = a;
  const { order: orderB, category: categoryB, jurisdiction: jurisdictionB } = b;

  // Compare the Categories
  const categoryAIndex = taxFeeCategoryOrder.findIndex((category) => category === categoryA);
  const categoryBIndex = taxFeeCategoryOrder.findIndex((category) => category === categoryB);
  if (categoryAIndex > -1 && categoryBIndex > -1 && categoryA !== categoryB) {
    return categoryAIndex - categoryBIndex;
  }

  // Compare the Jurisdictions
  const jurisdictionAIndex = taxFeeJurisdictionOrder.findIndex((jurisdiction) => jurisdiction === jurisdictionA);
  const jurisdictionBIndex = taxFeeJurisdictionOrder.findIndex((jurisdiction) => jurisdiction === jurisdictionB);
  if (jurisdictionAIndex > -1 && jurisdictionBIndex > -1 && jurisdictionA !== jurisdictionB) {
    return jurisdictionAIndex - jurisdictionBIndex;
  }

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
