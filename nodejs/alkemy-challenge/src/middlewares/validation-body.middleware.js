import { BadRequestError } from '../errors/bad-request.error.js';

export const validationBody = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    throw new BadRequestError(error.message);
  }
};
