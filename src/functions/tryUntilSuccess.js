import OutputView from '../View/outputView.js';

async function tryUntilSuccess(getResult, validate) {
  let result;
  while (true) {
    try {
      result = await getResult();
      validate(result);
      break;
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
  return result;
}

export default tryUntilSuccess;
