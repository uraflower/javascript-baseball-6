import User from '../Domain/User.js';
import generateUniqueRandomNumber from '../utils/generateUniqueRandomNumber.js';

class GameController {
  #computer;

  #user;

  async play() {
    this.#computer = generateUniqueRandomNumber();

    this.#user = User.getNumber();
  }
}

export default GameController;
