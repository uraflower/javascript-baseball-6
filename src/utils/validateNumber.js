import { DIGIT, RANGE } from '../constants/randomNumber.js';

function isInvalidLength(str) {
  return str.length !== DIGIT;
}

function isDuplicated(str) {
  return new Set([...str]).size < str.length;
}

function isNotInRange(str) {
  const result = [...str].find(
    (num) => Number(num) < RANGE.min || Number(num) > RANGE.max,
  );
  return result !== undefined;
}

export { isDuplicated, isInvalidLength, isNotInRange };
