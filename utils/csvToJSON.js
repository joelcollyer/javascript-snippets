const path = require("path");
const { readFile, writeFile } = require("./fileManager");
const { parseCSV } = require("./csv");


// Define the data type for each column in the CSV

/** Simplified
const COLUMNS = {
  bookingId: Number,
  guestId: Number,
  guestDayId: Number,
  roomIndex: Number,
  date: Date,
  guestName: String,
  state: String,
  referenceNumber: String,
  inboundRate: Number,
  markup: Number,
};

const OPTIONAL_COLUMNS = ['inboundRate', 'markup'];
CONST REMOVE_COLUMNS = [];

/** Correction Sheet */
const COLUMNS = {
  bookingId: Number,
  guestId: Number,
  guestDayId: Number,
  propertyName: String,
  bookingNumber: String,
  roomType: String,
  roomIndex: Number,
  date: Date,
  guestName: String,
  state: String,
  referenceNumber: String,
};

const OPTIONAL_COLUMNS = ["referenceNumber"];
const REMOVE_COLUMNS = ["propertyName", "bookingNumber", "roomType"];

/* -- */

async function convertCSVtoJSON() {
  const inputFilePath = path.resolve(ROOT_PATH, INPUT_FILE_NAME);
  const data = await readFile(inputFilePath);

  const csv = parseCSV(data);

  // Validate that every parsed csv row has a value for the desired columns, and format the value
  const columnNames = Object.keys(COLUMNS);
  const formattedValues = csv.map((row, rowNumber) =>
    Object.fromEntries(
      Object.entries(row)
        .map(([column, value]) => {
          // Skip excluded columns
          if (REMOVE_COLUMNS.includes(column)) return [];

          // Reject invalid rows
          if (!columnNames.includes(column)) {
            throw new Error(`Row ${rowNumber + 2} is missing the ${column} column.`);
          }

          // Reject missind data
          if (!value?.length && !OPTIONAL_COLUMNS.includes(column)) {
            throw new Error(`Row ${rowNumber + 2} has no data in the ${column} column.`);
          }

          // Pass the value through a constructor so that it's formatted correctly (e.g. convert a string value to a Number)
          const Type = COLUMNS[column];
          return [column, new Type(value)];
        })
        .filter((row) => row?.length > 1) // Remove empty arrays
    )
  );

  const json = JSON.stringify(formattedValues);

  const outputFilePath = path.resolve(ROOT_PATH, OUTPUT_FILE_NAME);
  await writeFile(outputFilePath, json);

  console.log(`${csv.length} CSV rows written as JSON to...\r\n${outputFilePath}`);
}

convertCSVtoJSON();
