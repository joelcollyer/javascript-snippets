/**
 * Testing that skip === true when the modal is closed or the user doesn't have permission to use line items
 */

const possibleStates = [
  { openModal: false, useLineItems: true, expected: true },
  { openModal: false, useLineItems: false, expected: true },
  { openModal: true, useLineItems: false, expected: true },
  { openModal: true, useLineItems: true, expected: false }, // Only valid skip = false state
];

const results = possibleStates.map(({ openModal, useLineItems, expected }) => {
  const skip = !openModal || !useLineItems;

  return { openModal, useLineItems, skip, expected, valid: skip === expected };
});

console.log(results); // Using "||" produces the desired result if this was "&&" is wouldn't work
