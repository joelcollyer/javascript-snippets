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

const EOL = "\r\n";

const leftPad = (num = 0, len = 2, char = "0") => {
  const str = num.toString();
  return str.length <= len ? `${char.repeat(len)}${str}`.slice(-len) : str;
};

const drawPixel = (isOn) => (isOn ? "🟥" : "⬛");

const drawChar = (num = 0) => {
  const seg = SEGMENTS[num] || SEGMENTS["off"];
  const pos = [null, seg[0], null, seg[5], null, seg[1], null, seg[6], null, seg[4], null, seg[2], null, seg[3], null];
  return pos.map((on, i) => ((i + 1) % 3 === 0 ? drawPixel(on) + EOL : drawPixel(on))).join("");
};

// TODO: For the number of characters, replace line breaks and put each digit onto the same line
const drawNum = (num = 0, len = 2) => {
  return [...leftPad(num, len)].map((num) => drawChar(+num)).join("");
};

console.log(drawNum(0, 0));
console.log(drawNum(1, 0));
console.log(drawNum(2, 0));
console.log(drawNum(3, 0));
console.log(drawNum(4, 0));
console.log(drawNum(5, 0));
console.log(drawNum(6, 0));
console.log(drawNum(7, 0));
console.log(drawNum(8, 0));
console.log(drawNum(9, 0));
console.log(drawNum("x", 0));
