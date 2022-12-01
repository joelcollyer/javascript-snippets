const fs = require("fs");

// Config
const CSV_FILE = "../temp/EXAMPLEFILENAME.csv";
const SQL_FILE = "../temp/EXAMPLEFILENAME.sql";

const TABLE_NAME = "example_table_name";
const EXCLUDE_COLUMNS = ["name"];
const WHERE = "id = ':id'";

// Retrieve the contents of a file as a string
const readFile = async (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject(err);
      return resolve(data);
    });
  });
};

// Write a string to the destination file
const writeFile = async (filePath, content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) return reject(err);
      return resolve(true);
    });
  });
};

// Convert the a string CSV into an array of key value pairs
const parseCSV = (string = "", opts = { separator: ",", eol: "\n\r" }) => {
  const { eol, separator } = opts;
  const eolMatch = new RegExp(`[${eol}]+`, "gim");
  const colMatch = new RegExp(`[${separator}]`, "gi");

  // Split the csv string into rows and columns, then extract headers from the first line
  const [headers, ...rows] = string
    .split(eolMatch)
    .map((row) => row.split(colMatch));

  // Early return if the input could not be parsed
  if (!headers?.length || !rows?.length) return [];

  // Remove the empty row at the end of the file, if present
  if (rows[rows.length - 1].length < headers.length) rows.splice(-1);

  // Map each row to the headers and return an array of objects
  return rows.map((row) =>
    row.reduce((obj, val, i = 0) => {
      const header = headers[i];
      if (!header) return obj;
      obj[header.trim()] = (val || "").trim();
      return obj;
    }, {})
  );
};

// Fetch and parse a CSV file into SQL update statements
const convertCSVtoSQL = async () => {
  const string = await readFile(CSV_FILE);
  const rows = parseCSV(string);

  const columns = Object.keys(rows[0]).filter(
    (col) => !WHERE.includes(col) && !EXCLUDE_COLUMNS.includes(col)
  );

  const set = columns.map((col) => `${col} = ':${col}'`).join(", ");
  const baseSQL = `UPDATE ${TABLE_NAME} SET ${set} WHERE ${WHERE} LIMIT 1;`;

  const sql = rows
    .map((row) => {
      let statement = `${baseSQL}`;

      Object.entries(row).forEach(([col, val]) => {
        if (EXCLUDE_COLUMNS.includes(col)) return;
        const replacer = new RegExp(`:${col}`, "g");
        statement = statement.replace(replacer, val);
      });

      return statement;
    })
    .join("\r\n");

  await writeFile(SQL_FILE, sql);
};

convertCSVtoSQL();
