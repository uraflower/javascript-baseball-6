import { DIGIT, RANGE } from '../randomNumber.js';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  invalidNumber: `중복되지 않는 ${RANGE.min}~${RANGE.max} 사이 ${DIGIT}자리 숫자를 입력해주세요.`,
  invalidRestartFlag: '올바른 값을 입력해주세요.',
});

export default ERROR;
