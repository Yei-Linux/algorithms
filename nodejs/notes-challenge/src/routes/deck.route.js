import { Router } from 'express';
import { DeckController } from '../controllers/deck.controller.js';

export class DeckRouter {
  static router = () => {
    const router = Router();
    const controller = new DeckController();

    router.use((req, res, next) => {
      console.log('deck router');
    });

    router.get('/', controller.getAll);
    router.get('/:id', controller.getOne);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/', controller.delete);
  };
}
