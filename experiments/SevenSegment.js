const SEGMENTS = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 0, 0, 1, 1],
  off: [0, 0, 0, 0, 0, 0, 0],
};

const CHAR_HEIGHT = 5;

const EOL = "\r\n";

const leftPad = (num = 0, len = 2, char = "0") =>
  `${num}`.length <= len ? `${char.repeat(len)}${num}`.slice(-len) : `${num}`;

const drawPixel = (on) => (on ? "🟥" : "⬛");

const drawChar = (num = 0) => {
  const seg = SEGMENTS[num] || SEGMENTS["off"];
  const pos = [null, seg[0], null, seg[5], null, seg[1], null, seg[6], null, seg[4], null, seg[2], null, seg[3], null];
  return pos.map((on, i) => ((i + 1) % 3 === 0 ? drawPixel(on) + EOL : drawPixel(on))).join("");
};

const drawNum = (num = 0, len = 2) => {
  const chars = leftPad(num, len)
    .split("")
    .map((num) => drawChar(+num).split(EOL));

  const screen = Array.from({ length: CHAR_HEIGHT }, (_, row) => chars.map((char) => char[row]).join("")).join(EOL);

  return screen + EOL;
};

console.log(drawNum(0));
console.log(drawNum(1));
console.log(drawNum(2));
console.log(drawNum(3));
console.log(drawNum(4));
console.log(drawNum(5));
console.log(drawNum(6));
console.log(drawNum(7));
console.log(drawNum(8));
console.log(drawNum(9));
console.log(drawNum("xx", 0));
