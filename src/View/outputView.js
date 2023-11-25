import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(message) {
    Console.print(message);
  },
};

Object.freeze(OutputView);
export default OutputView;
