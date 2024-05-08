import { CustomError } from '../core/dtos/CustomError.dto.js';

export const errorMiddleware = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: error.message });
};
