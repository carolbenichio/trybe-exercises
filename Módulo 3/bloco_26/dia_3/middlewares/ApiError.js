class ApiError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
  static error(status, message) {
    throw new ApiError(status, message);
  };
};

module.exports = ApiError;