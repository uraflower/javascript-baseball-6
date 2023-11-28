import CustomError from '../Error/CustomError.js';
import InputView from '../View/InputView.js';
import ERROR from '../constants/messages/error.js';
import RESTART_FLAG from '../constants/restartFlag.js';
import tryUntilSuccess from '../functions/tryUntilSuccess.js';

const Restart = {
  async getFlag() {
    const flag = await tryUntilSuccess(
      InputView.inputRestartFlag,
      this.validate,
    );
    return Number(flag);
  },

  validate(flag) {
    if (
      Number(flag) !== RESTART_FLAG.restart &&
      Number(flag) !== RESTART_FLAG.exit
    ) {
      throw new CustomError(ERROR.invalidRestartFlag);
    }
  },
};

Object.freeze(Restart);
export default Restart;
