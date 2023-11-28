import { Console } from '@woowacourse/mission-utils';
import INPUT from '../constants/messages/input.js';

const InputView = {
  async inputNumbers() {
    const numbers = await Console.readLineAsync(INPUT.number);
    return numbers;
  },

  async inputRestartFlag() {
    const flag = await Console.readLineAsync(INPUT.restart);
    return flag;
  },
};

Object.freeze(InputView);
export default InputView;
