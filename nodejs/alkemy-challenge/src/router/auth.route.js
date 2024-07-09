import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { validationBody } from '../middlewares/validation-body.middleware.js';
import { SignUpZodSchema } from '../validations/auth/signup.js';
import { SignInZodSchema } from '../validations/auth/signin.js';
import passport from 'passport';

const controller = new AuthController();
export const AuthRouter = Router();

AuthRouter.post('/sign-up', validationBody(SignUpZodSchema), controller.signup);
AuthRouter.post('/sign-in', validationBody(SignInZodSchema), controller.signin);

AuthRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);
AuthRouter.get('/google/callback', controller.signinGoogleCallback);
