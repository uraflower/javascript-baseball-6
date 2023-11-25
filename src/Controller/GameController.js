import User from '../Domain/User.js';
import getHint from '../Domain/getHint.js';
import { DIGIT } from '../constants/randomNumber.js';
import generateUniqueRandomNumber from '../utils/generateUniqueRandomNumber.js';

class GameController {
  #computer;

  #user;

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
    // 결과 출력
    return strike === DIGIT;
  }
}

export default GameController;
