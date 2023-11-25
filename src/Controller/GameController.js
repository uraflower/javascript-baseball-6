import InputView from '../View/InputView.js';
import generateUniqueRandomNumber from '../utils/generateUniqueRandomNumber.js';

class GameController {
  #computer;

  #user;

  async play() {
    this.#computer = generateUniqueRandomNumber();

    await this.#setUserNumber();
  }

  async #setUserNumber() {
    const numbers = await InputView.inputNumbers();
    this.#user = [...numbers];
  }
}

export default GameController;
