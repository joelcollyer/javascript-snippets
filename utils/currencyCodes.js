// Parse the CSV of currency codes from: https://github.com/datasets/currency-codes/blob/master/data/codes-all.csv
const fs = require("fs");

const getCodes = () =>
  fs
    .readFileSync("./currencyCodes.csv", "utf-8")
    .split("\n")
    .map((row) => row.replace("\r", "").replace("\n", "").split(","));

const [headers, ...currencyCodes] = getCodes();

const codeIndex = headers.findIndex((col) => col === "AlphabeticCode");

const result = currencyCodes
  .map((currency) => currency[codeIndex])
  .filter((code) => !!code && code.length === 3 && code[0] !== "X")
  .filter((code, index, codes) => codes.indexOf(code) === index)
  .sort((a, b) => a.localeCompare(b));

fs.writeFileSync("currencyCodes.txt", result.join("\r\n"));
