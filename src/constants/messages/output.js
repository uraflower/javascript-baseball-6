import { DIGIT } from '../randomNumber.js';

const OUTPUT = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  hint: Object.freeze({
    strike: '스트라이크',
    ball: '볼',
    nothing: '낫싱',
  }),
  end: `${DIGIT}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

export default OUTPUT;
