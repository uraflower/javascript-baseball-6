import generateUniqueRandomNumber from '../generateUniqueRandomNumber.js';

class GameController {
  #computer;

  async play() {
    this.#setNumbers();
  }

  #setNumbers() {
    this.#computer = generateUniqueRandomNumber();
  }
}

export default GameController;
