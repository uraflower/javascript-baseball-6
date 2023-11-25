function isDuplicated(str) {
  return new Set([...str]).size < str.length;
}

function isInvalidNumber(number) {
  return isDuplicated(number);
}

export default isInvalidNumber;
