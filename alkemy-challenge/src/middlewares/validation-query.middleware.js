import { BadRequestError } from '../errors/bad-request.error.js';

export const validationQueryParams = (schema) => (req, res, next) => {
  try {
    schema.parse(req.query);
    next();
  } catch (error) {
    throw new BadRequestError(error.message);
  }
};
