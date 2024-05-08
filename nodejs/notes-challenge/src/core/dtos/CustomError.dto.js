export class CustomError extends Error {
  statusCode;
  message;

  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
  }

  static badRequest(message) {
    return new CustomError(400, message);
  }

  static unauthorized(message) {
    return new CustomError(401, message);
  }

  static forbidden(message) {
    return new CustomError(403, message);
  }

  static notFound(message) {
    return new CustomError(404, message);
  }

  static internalServer(message) {
    return new CustomError(500, message);
  }
}
