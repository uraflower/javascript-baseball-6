import InputView from '../View/InputView.js';
import tryUntilSuccess from '../utils/tryUntilSuccess.js';

const User = {
  async getNumber() {
    const number = await tryUntilSuccess(InputView.inputNumbers, this.validate);
    return this.formatNumber(number);
  },

  validate(number) {},

  formatNumber() {},
};

Object.freeze(User);
export default User;
