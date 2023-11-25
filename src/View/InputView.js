import { Console } from '@woowacourse/mission-utils';
import INPUT from '../constants/messages/input';

const InputView = {
  async inputNumbers() {
    const numbers = await Console.readLineAsync(INPUT.number);
    return numbers;
  },
};

Object.freeze(InputView);
export default InputView;
