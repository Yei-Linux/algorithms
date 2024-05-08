import { CustomError } from '../core/dtos/CustomError.dto.js';

export const validatorQueryParamsMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.query);
      next();
    } catch (error) {
      throw CustomError.badRequest(error.message);
    }
  };
};
