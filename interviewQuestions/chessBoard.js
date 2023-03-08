/**
 * Given an 8x8 chess board, a piece, and a move coordinate, determine if the
 * given move is a valid chess move. Capital letters represent white pieces,
 * lowercase letters represent black pieces, where P is a white pawn, n is a
 * black knight, K is a white king, and so on. A ~ represents a blank square,
 * and you can use this tool if you need a helpful visual! You can choose to do
 * absolute coordinates or relative ones, and decide how you want to differentiate
 * between duplicate pieces.
 */

const blackPieces = ["b", "k", "n", "p", "q", "r"];
const whitePieces = ["B", "K", "N", "P", "Q", "R"];
const allPieces = [...blackPieces, ...whitePieces];
const emptySpace = "~";

const min = 0;
const max = 7;

const board = `
~~~~~~~~
~~kb~~~~
~~K~~~~~
~~~~~~~~
~~~~~~~~
~~~~~~~~
~~~~~~~~
~~~R~~~~
`;

const isSameColour = (thisPiece, thatPiece) => {
  if (thisPiece === thatPiece) return false;
  if (thisPiece === emptySpace || thatPiece === emptySpace) return false;
  if (blackPieces.includes(thisPiece) && blackPieces.includes(thatPiece)) return true;
  if (whitePieces.includes(thisPiece) && whitePieces.includes(thatPiece)) return true;
  return false;
};

// Can only move two spaces if the pawn is in its starting position
const pawnNotMoved = (piece, curr) => {
  const [x] = curr;
  return blackPieces.includes(piece) ? x === 1 : x === 6;
};

// A king may not move itself into check
const notInCheck = (piece, curr, dest) => {
  // TODO: Are there any pieces of the opposite colour that can reach your proposed destination?
  return true;
};

// The piece cannot move through other pieces
const noPiecesBetween = (piece, curr, dest) => {
  // TODO: Are there any pieces between your proposed start and end position?
  // The path is clear
  return true;
};

// Define vertical, horizontal, and diagonal movement paths
const filterNoMove = ([x, y]) => !(x === 0 && y === 0);
const vertical = Array.from({ length: max * 2 + 1 }, (_, i) => [0, i - max]).filter(filterNoMove);
const horizontal = Array.from({ length: max * 2 + 1 }, (_, i) => [i - max, 0]).filter(filterNoMove);
const diagonal = horizontal.map(([x], i) => {
  const [, y] = vertical[i];
  return [x, y];
});

// An object containing the relative [x, y] moves for a given piece where [0,0] is the current piece
// Optionally, conditional functions can be passed as array element to validate that the move is possible
const allMoves = {
  b: [diagonal].map(([x, y]) => [x, y, noPiecesBetween]),
  k: [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ].map(([x, y]) => [x, y, notInCheck]),
  n: [
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [-1, -2],
    [1, -2],
  ],
  p: [
    [0, 1],
    [0, 2, pawnNotMoved, noPiecesBetween],
  ],
  q: [...diagonal, ...horizontal, ...vertical].map(([x, y]) => [x, y, noPiecesBetween]),
  r: [...horizontal, ...vertical].map(([x, y]) => [x, y, noPiecesBetween]),
};

const isValidMove = (board = "", piece = "", move = [0, 0]) => {
  // Validation: Reject empty inputs
  if (!board || !piece || !move) {
    console.log("Missing required input");
    return false;
  }

  // Validation: Reject missing or invalid pieces
  if (!board.includes(piece) || !allPieces.includes(piece)) {
    console.log(`The ${piece} is not on the board`);
    return false;
  }

  // Validation: Reject Invalid Move input
  if (move.length !== 2 || !move.every((coord) => coord >= min && coord <= max)) {
    console.log("Invalid move input found.");
    return false;
  }

  // Validation: Reject Invalid boards - 64 spaces and 7 line breaks
  if (board.trim().length !== 8 * 8 + 7) {
    console.log("An invalid chess board was provided");
    return false;
  }

  const tiles = board
    .trim()
    .split("")
    .filter((tile) => !tile.match(/[\n]+/));
  const currIndex = tiles.findIndex((tile) => tile === piece);
  const currentPosition = [Math.floor(currIndex / 8), currIndex - Math.floor(currIndex / 8) * 8];

  // Split the board into rows, then each tile into it's own col (an array of arrays)
  const rowsCols = board
    .trim()
    .split("\n")
    .map((row) => row.split(""));
  const [row, col] = move;
  const destinationPiece = rowsCols[row][col];

  if (isSameColour(piece, destinationPiece)) {
    console.log(`You cannot take your own pieces. ${piece} attempted to take ${destinationPiece}.`);
    return false;
  }

  // Translate the position of the move into a coordinates from the current piece (which is [0,0])
  // TODO

  // Can this piece move that way?
  const availableMoves = allMoves[`${piece}`.toLowerCase()];
  const proposedMove = availableMoves.find(([x, y]) => x === row && y === col);
  if (!proposedMove) {
    console.log(`The ${piece} cannot move to ${move}.`);
    return false;
  }

  // Are there extra rules in that move? Make sure they pass too...
  const [moveX, moveY, ...rules] = proposedMove;
  rules.forEach((rule) => {
    if (!rule(piece, currentPosition, move)) {
      console.log(`The ${piece} failed the ${rule.name} rule.`);
      return false;
    }
  });

  // Everything checks out, return true
  return true;
};

console.log(isValidMove(board, "R", [0, 0])); // false - A rook can only move horizontally and vertically
console.log(isValidMove(board, "k", [0, 1])); // true - A king can move one square at a time in any direction
console.log(isValidMove(board, "Q", [5, 7])); // false - The white queen is not on the board
