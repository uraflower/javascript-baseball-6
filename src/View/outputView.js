import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/messages/output.js';
import COMMON from '../constants/common.js';

const OutputView = {
  printError(message) {
    Console.print(message);
  },

  printStart() {
    Console.print(OUTPUT.start);
  },

  printHint(strike, ball) {
    this.handleNothing(strike, ball);
    this.handleBall(strike, ball);
    this.handleStrike(strike, ball);
    this.handleStrikeAndBall(strike, ball);
  },

  handleNothing(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print(OUTPUT.hint.nothing);
    }
  },

  handleBall(strike, ball) {
    if (strike === 0 && ball !== 0) {
      Console.print(ball + OUTPUT.hint.ball);
    }
  },

  handleStrike(strike, ball) {
    if (strike !== 0 && ball === 0) {
      Console.print(strike + OUTPUT.hint.strike);
    }
  },

  handleStrikeAndBall(strike, ball) {
    if (strike !== 0 && ball !== 0) {
      Console.print(
        ball +
          OUTPUT.hint.ball +
          COMMON.whiteSpace +
          strike +
          OUTPUT.hint.strike,
      );
    }
  },
};

Object.freeze(OutputView);
export default OutputView;
