import { Router } from 'express';
import { validationParams } from '../middlewares/validation-params.middleware.js';
import { MoviesController } from '../controllers/movies.controller.js';
import { GetMovieWithCharactersParamsSchema } from '../validations/movies/params.validation.js';
import { validationBody } from '../middlewares/validation-body.middleware.js';
import { CreateMovieZodSchema } from '../validations/movies/create.validation.js';

export const movieRouter = Router();
const controller = new MoviesController();

movieRouter.get(
  '/:id',
  validationParams(GetMovieWithCharactersParamsSchema),
  controller.getMovieWithCharacters
);
movieRouter.post('/', validationBody(CreateMovieZodSchema), controller.create);
