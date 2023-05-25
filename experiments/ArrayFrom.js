/**
 * Create a list of all the angles that exist between 0 and 360 for a given number of degrees
 */
const rotateBy = 90;
const angleCount = 360 / rotateBy;
const angles = Array.from({ length: angleCount }, (_, i) => i * rotateBy);
console.log(angles);
