import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

export class UserRouter {
  static router = () => {
    const router = Router();
    const controller = new UserController();

    router.use('*', (req, res, next) => {
      console.log('user router');
      next();
    });

    router.get('/', controller.getAll);

    router.get('/profile', controller.profile);
    router.put('/profile', controller.update);
    router.delete('/profile', controller.delete);

    router.post('/signup', controller.signup);
    router.post('/signin', controller.signin);

    return router;
  };
}
