const charges = [
  {
    id: 1,
    amount: "97.10",
    type: "charge",
    children: [
      {
        id: 2,
        amount: "9.71",
        type: "tax",
      },
      {
        id: 2,
        amount: "3.88",
        type: "fee",
        children: [
          { id: 3, amount: "1.90", type: "markup" },
          { id: 3, amount: "0.29", type: "tax" },
        ],
      },
    ],
  },
];

const sumRecursive = (charges = []) => {
  if (charges.length < 1) return 0;

  return charges.reduce((sum, charge) => {
    const { amount = 0, children = [] } = charge;
    sum += +amount + sumRecursive(children);
    return sum;
  }, 0);
};

console.log(sumRecursive(charges));
