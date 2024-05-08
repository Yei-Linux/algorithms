import { CustomError } from '../core/dtos/CustomError.dto.js';

export const validateBodyMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      throw CustomError.badRequest(error.message);
    }
  };
};
