import { BadRequestError } from '../errors/bad-request.error.js';

export const validationParams = (schema) => (req, res, next) => {
  try {
    schema.parse(req.params);
    next();
  } catch (error) {
    throw new BadRequestError(error.message);
  }
};
