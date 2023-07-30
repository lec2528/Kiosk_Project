class ErrorHandle extends Error {
  constructor(msg, status = 500) {
    super(msg);
    this.status = status;
  }
}

module.exports = ErrorHandle;
