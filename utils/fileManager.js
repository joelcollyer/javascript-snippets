const fs = require("fs");

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

module.exports = {
  readFile,
  writeFile,
};
