export class NotFoundError extends Error {
  constructor(message) {
    this.message = message;
    this.name = 'NotFoundError';
  }
}
