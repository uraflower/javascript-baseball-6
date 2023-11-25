import InputView from '../View/InputView.js';
import generateUniqueRandomNumber from '../generateUniqueRandomNumber.js';

class GameController {
  #computer;

  #user;

  async play() {
    this.#setNumbers();
  }

  #setNumbers() {
    this.#computer = generateUniqueRandomNumber();
    this.#user = this.#setUserNumber();
  }

  async #setUserNumber() {
    const numbers = await InputView.inputNumbers();
    this.#user = [...numbers];
  }
}

export default GameController;
