import { DIGIT } from '../constants/randomNumber.js';

function isInvalidLength(str) {
  return str.length !== DIGIT;
}

function isDuplicated(str) {
  return new Set([...str]).size < str.length;
}

function isInvalidNumber(number) {
  return isDuplicated(number) || isInvalidLength(number);
}

export default isInvalidNumber;
