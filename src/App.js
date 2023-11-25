import generateUniqueRandomNumber from './generateUniqueRandomNumber.js';

class App {
  #computer;

  constructor() {
    this.#computer = generateUniqueRandomNumber();
  }

  async play() {
    // ...
  }
}

export default App;
