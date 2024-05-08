import { Router } from 'express';
import { NoteController } from '../controllers/note.controller.js';

export class NoteRouter {
  static router = () => {
    const router = Router();
    const controller = new NoteController();

    router.use((req, res, next) => {
      console.log('note router');
      next();
    });

    router.get('/', controller.getAll);
    router.get('/:id', controller.getOne);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);

    return router;
  };
}
