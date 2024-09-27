const path = require("path");
const { readFile, writeFile } = require("./fileManager");
const { parseCSV } = require("./csv");

const ROOT_PATH = __dirname;
const INPUT_FILE_NAME = "input.csv";
const OUTPUT_FILE_NAME = "output.json";
const COLUMNS = ["bookingId", "guestId", "guestDayId", "roomIndex", "date", "guestName", "state"];

async function convertCSVtoJSON() {
  const inputFilePath = path.resolve(ROOT_PATH, INPUT_FILE_NAME);
  const data = await readFile(inputFilePath);

  const csv = parseCSV(data);

  // Validate that every parsed csv row has a value for the desired columns
  csv.forEach((row, rowNumber) =>
    Object.entries(row).every(([column, value]) => {
      if (!COLUMNS.includes(column)) throw new Error(`Row ${rowNumber + 2} is missing the ${column} column.`);
      if (!value?.length) throw new Error(`Row ${rowNumber + 2} has no data in the ${column} column.`);
      return true;
    })
  );

  const json = JSON.stringify(csv);

  const outputFilePath = path.resolve(ROOT_PATH, OUTPUT_FILE_NAME);
  await writeFile(outputFilePath, json);

  console.log(`${csv.length} CSV rows written as JSON to...\r\n${outputFilePath}`);
}

convertCSVtoJSON();
