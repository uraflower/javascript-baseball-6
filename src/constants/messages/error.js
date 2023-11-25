import { DIGIT } from '../randomNumber.js';

const ERROR = Object.freeze({
  prefix: '[ERROR]',
  invalidNumber: `중복되지 않는 1~9 사이 ${DIGIT}자리 숫자를 입력해주세요.`,
});

export default ERROR;
