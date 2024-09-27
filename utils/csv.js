const parseCSV = (string = "", opts = { separator: ",", eol: "\n\r" }) => {
  const { eol, separator } = opts;
  const eolMatch = new RegExp(`[${eol}]+`, "gim");
  const colMatch = new RegExp(`[${separator}]`, "gi");

  // Split the csv string into rows and columns, then extract headers from the first line
  const [headers, ...rows] = string.split(eolMatch).map((row) => row.split(colMatch));

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

module.exports = {
  parseCSV,
};
