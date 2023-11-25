import ERROR from './constants/messages/error.js';

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR.prefix} ${message}`);
  }
}

export default CustomError;
