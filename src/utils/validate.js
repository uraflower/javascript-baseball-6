import { DIGIT } from '../constants/randomNumber.js';

function isInvalidLength(str) {
  return str.length !== DIGIT;
}

function isDuplicated(str) {
  return new Set([...str]).size < str.length;
}

function isNotInRange(str, min, max) {
  const result = [...str].find((num) => Number(num) < min || Number(num) > max);
  return result !== undefined;
}

export { isDuplicated, isInvalidLength, isNotInRange };
