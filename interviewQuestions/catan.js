/**
 * Prompt: The Settlers of Catan board game has 18 number hexes
 * (two each of 3, 4, 5, 6, 8, 9, 10, 11, and one each of 2 and 12),
 * and one desert hex in a large hexagon formation. Generate a valid randomized
 * Catan board in which 6s and 8s cannot touch each other.
 */

/**
 * Randomly sort an array
 * @example
 * [].sort(shuffle);
 */
const shuffle = () => (Math.random() > 0.5 ? 1 : -1);

/**
 * Format tiles into the rows that will compose our Catan board
 */
const tilesToRows = (board = []) => {
  const breakpoints = [2, 6, 11, 15, board.length];

  return board.reduce((rows, tile, index) => {
    let rowIndex = breakpoints.findIndex((breakpoint) => breakpoint >= index);
    if (!rows[rowIndex]) rows[rowIndex] = [];
    rows[rowIndex].push(tile);
    return rows;
  }, []);
};

/**
 * Accept a raw array of tiles and return true if they form a valid board
 * @param {*} tiles
 * @returns boolean
 */
const isBoardValid = (tiles = []) => {
  const rows = tilesToRows(tiles);

  return rows.every((row, rowIndex) => {
    // This row is valid as it contains no "6"
    if (!row.includes("6")) return true;

    return row.every((tile, index) => {
      // We only check the "6" tile
      if (tile !== "6") return true;

      const prevRow = rows[rowIndex - 1] ?? [];
      const prevOffset = row.length - prevRow.length;

      const nextRow = rows[rowIndex + 1] ?? [];
      const nextOffset = row.length - nextRow.length;

      const neighbours = [
        prevRow[index],
        prevRow[index - prevOffset],
        row[index - 1],
        row[index + 1],
        nextRow[index],
        nextRow[index - nextOffset],
      ];

      // Return false if this "6" neighbours an "8"
      return !neighbours.includes("8");
    });
  });
};

/**
 * Join tiles together with appropriate whitespace to form a Catan board
 */
const drawBoard = (tiles = []) => {
  const spacesPerRow = {
    0: 2,
    1: 1,
    2: 0,
    3: 1,
    4: 2,
  };

  return tilesToRows(tiles)
    .map((row, index) => {
      const spacer = " ".repeat(spacesPerRow[index]);
      return `${spacer}${row.join(" ")}\n`;
    })
    .join("");
};

const catan = () => {
  const tiles = ".2334455668899AABBC".split("");

  let board = [];
  let valid = false;

  while (!valid) {
    board = tiles.sort(shuffle);
    valid = isBoardValid(board);
  }

  return drawBoard(board);
};

console.log(catan());
