import CustomError from '../Error/CustomError.js';
import InputView from '../View/InputView.js';
import ERROR from '../constants/messages/error.js';
import tryUntilSuccess from '../utils/tryUntilSuccess.js';
import {
  isDuplicated,
  isInvalidLength,
  isNotInRange,
} from '../utils/validateNumber.js';

const User = {
  async getNumber() {
    const number = await tryUntilSuccess(InputView.inputNumbers, this.validate);
    return this.formatNumber(number);
  },

  validate(number) {
    if (
      isDuplicated(number) ||
      isInvalidLength(number) ||
      isNotInRange(number)
    ) {
      throw new CustomError(ERROR.invalidNumber);
    }
  },

  formatNumber() {},
};

Object.freeze(User);
export default User;
