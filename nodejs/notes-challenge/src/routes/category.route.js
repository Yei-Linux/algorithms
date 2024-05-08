import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller.js';
import { validateBodyMiddleware } from '../middlewares/validate-body.middleware.js';
import {
  categoryGetParamsValidator,
  categoryCreateValidator,
  categoryDeleteParamsValidator,
  categoryUpdateParamsValidator,
} from '../validator/category.validator.js';
import { validatorParamsMiddleware } from '../middlewares/validator-params.middleware.js';

export class CategoryRouter {
  static router = () => {
    const router = Router();
    const controller = new CategoryController();

    router.use((req, res, next) => {
      console.log('category router');
      next();
    });

    router.get('/', controller.getAll);
    router.get(
      '/:id',
      validatorParamsMiddleware(categoryGetParamsValidator),
      controller.getOne
    );
    router.post(
      '/',
      validateBodyMiddleware(categoryCreateValidator),
      controller.create
    );
    router.put(
      '/:id',
      validatorParamsMiddleware(categoryUpdateParamsValidator),
      controller.update
    );
    router.delete(
      '/:id',
      validatorParamsMiddleware(categoryDeleteParamsValidator),
      controller.delete
    );

    return router;
  };
}
