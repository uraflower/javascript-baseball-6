import CustomError from '../Error/CustomError.js';
import InputView from '../View/InputView.js';
import ERROR from '../constants/messages/error.js';
import tryUntilSuccess from '../utils/tryUntilSuccess.js';

const Restart = {
  async getFlag() {
    const flag = await tryUntilSuccess(
      InputView.inputRestartFlag,
      this.validate,
    );
    return Number(flag);
  },

  validate(flag) {
  },
};

Object.freeze(Restart);
export default Restart;
