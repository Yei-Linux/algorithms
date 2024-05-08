import { CustomError } from '../core/dtos/CustomError.dto.js';

export const validatorParamsMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.params);
      next();
    } catch (error) {
      throw CustomError.badRequest(error.message);
    }
  };
};
