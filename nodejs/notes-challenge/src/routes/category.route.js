import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller.js';

export class CategoryRouter {
  static router = () => {
    const router = Router();
    const controller = new CategoryController();

    router.use((req, res, next) => {
      console.log('category router');
    });

    router.get('/', controller.getAll);
    router.get('/:id', controller.getOne);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/', controller.delete);
  };
}
