import { Router } from 'express';
import { CharactersController } from '../controllers/characters.controller.js';
import { validationBody } from '../middlewares/validation-body.middleware.js';
import { CreateCharacterZodSchema } from '../validations/characters/create.validation.js';
import { validationParams } from '../middlewares/validation-params.middleware.js';
import {
  GetCharacterParamValidation,
  UpdateCharacterParamValidation,
} from '../validations/characters/params.validation.js';
import { AddIntoMovieZodSchema } from '../validations/characters/add-into-movie.validation.js';

const controller = new CharactersController();
export const charactersRouter = Router();

charactersRouter.get('/', controller.getAll);
charactersRouter.get(
  '/:id',
  validationParams(GetCharacterParamValidation),
  controller.getById
);
charactersRouter.post(
  '/',
  validationBody(CreateCharacterZodSchema),
  controller.create
);
charactersRouter.put(
  '/:id',
  validationParams(UpdateCharacterParamValidation),
  controller.update
);
charactersRouter.post(
  '/add-into-movie',
  validationBody(AddIntoMovieZodSchema),
  controller.addCharacterToMovie
);
