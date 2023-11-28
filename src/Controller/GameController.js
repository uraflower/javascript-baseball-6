import User from '../InputHandler.js/User.js';
import getHint from '../Domain/getHint.js';
import OutputView from '../View/outputView.js';
import { DIGIT } from '../constants/randomNumber.js';
import generateUniqueRandomNumber from '../utils/generateUniqueRandomNumber.js';
import Restart from '../InputHandler.js/Restart.js';
import RESTART_FLAG from '../constants/restartFlag.js';

class GameController {
  #computer;

  #user;

  async repeatPlay() {
    OutputView.printStart();

    let flag = RESTART_FLAG.restart;
    while (flag === RESTART_FLAG.restart) {
      await this.play();
      flag = await Restart.getFlag();
    }
  }

  async play() {
    this.#computer = generateUniqueRandomNumber();

    await this.#repeatGuess();
    // 게임 종료 메시지 출력
    // ...
  }

  async #repeatGuess() {
    let isDone = false;
    while (!isDone) {
      isDone = await this.#guess();
    }
  }

  async #guess() {
    this.#user = await User.getNumber();
    const [strike, ball] = getHint(this.#computer, this.#user);
    OutputView.printHint(strike, ball);
    return strike === DIGIT;
  }
}

export default GameController;
