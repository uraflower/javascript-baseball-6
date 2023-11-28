import { Random } from '@woowacourse/mission-utils';
import { DIGIT, RANGE } from '../constants/randomNumber.js';

function generateUniqueRandomNumber() {
  const numbers = [];

  while (numbers.length < DIGIT) {
    const number = Random.pickNumberInRange(RANGE.min, RANGE.max);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers;
}

export default generateUniqueRandomNumber;
