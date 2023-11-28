import { DIGIT } from '../constants/randomNumber.js';

function isInvalidLength(str) {
  return str.length !== DIGIT;
}

function isDuplicated(str) {
  return new Set([...str]).size < str.length;
}

function isNotInRange(str, min, max) {
  const result = Array.from(str).find(
    (num) => Number(num) < min || Number(num) > max,
  );
  return result !== undefined;
}

function isInteger(numbers) {
  const INTEGER_PATTERN = /^\d$/;
  return Array.from(numbers).every((num) => INTEGER_PATTERN.test(num));
}

export { isDuplicated, isInvalidLength, isNotInRange, isInteger };
