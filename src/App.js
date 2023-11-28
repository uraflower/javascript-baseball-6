import GameController from './Controller/GameController.js';

class App {
  #gameController;

  constructor() {
    this.#gameController = new GameController();
  }

  async play() {
    await this.#gameController.repeatPlay();
  }
}

export default App;
