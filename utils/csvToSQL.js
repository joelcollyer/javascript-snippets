const { readFile, writeFile } = require("./fileManager");
const { parseCSV } = require("./csv");

// Config
const CSV_FILE = "../temp/EXAMPLEFILENAME.csv";
const SQL_FILE = "../temp/EXAMPLEFILENAME.sql";
const FORMAT = "update"; // 'update' | 'insert'
const NULL_ON_EMPTY = true; // If false, an empty string will be used for falsey values

const TABLE_NAME = "example_table_name";
const EXCLUDE_COLUMNS = ["name"];
const EXTRA_COLUMNS = {
  updatedAt: "sysdate()",
  updatedById: "3927",
};
const WHERE = "id = :id";

const getInsertSQL = (row = {}) => {
  const columns = [...Object.keys(row), ...Object.keys(EXTRA_COLUMNS)].filter((col) => !EXCLUDE_COLUMNS.includes(col));

  const values = columns.map((col) => {
    if (Object.keys(EXTRA_COLUMNS).includes(col)) {
      return `${EXTRA_COLUMNS[col]}`;
    }
    return `:${col}`;
  });

  const update = columns.map((col, i) => `${col}=${values[i]}`).join(", ");

  const sql = `INSERT INTO ${TABLE_NAME}
    (${columns.join(", ")})
    VALUES (${values.join(", ")})
    ON DUPLICATE KEY UPDATE ${update};`;

  return sql;
};

const getUpdateSQL = (row = {}) => {
  const columns = [...Object.keys(row), ...Object.keys(EXTRA_COLUMNS)].filter(
    (col) => !WHERE.includes(col) && !EXCLUDE_COLUMNS.includes(col)
  );

  const set = columns
    .map((col) => {
      if (Object.keys(EXTRA_COLUMNS).includes(col)) {
        return `${col} = ${EXTRA_COLUMNS[col]}`;
      }
      return `${col} = :${col}`;
    })
    .join(", ");

  const sql = `UPDATE ${TABLE_NAME} SET ${set} WHERE ${WHERE} LIMIT 1;`;

  return sql;
};

const getBaseSQL = (row = {}) => {
  let baseSQL = "";

  switch (FORMAT) {
    case "update":
      baseSQL = getUpdateSQL(row);
      break;
    case "insert":
      baseSQL = getInsertSQL(row);
      break;
    default:
      throw new Error(`Format ${FORMAT} not supported.`);
  }

  return baseSQL;
};

// Fetch and parse a CSV file into SQL update statements
const convertCSVtoSQL = async () => {
  const string = await readFile(CSV_FILE);
  const rows = parseCSV(string);

  console.log(`Found ${rows.length} rows in ${CSV_FILE}`);

  const baseSQL = getBaseSQL(rows[0]);

  console.log(baseSQL);

  const sql = rows.map((row) => {
    let statement = `${baseSQL}`;

    Object.entries(row).forEach(([col, val]) => {
      if (EXCLUDE_COLUMNS.includes(col)) return;
      const replacer = new RegExp(`:${col}`, "g");
      const replacement = NULL_ON_EMPTY && !val ? "NULL" : `"${val}"`;
      statement = statement.replace(replacer, replacement);
    });

    return statement.replace(/[\s\r\n]+/g, " ").trim();
  });

  await writeFile(SQL_FILE, sql.join("\r\n"));

  console.log(`Wrote ${sql.length} statements to: ${SQL_FILE}`);
};

convertCSVtoSQL();
