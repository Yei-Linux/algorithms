/**
 * @swagger
 * /api/v1/auth/sign-up:
 *  post:
 *   summary: Signup
 *   description: Signup
 *   produces:
 *     - application/json
 *   parameters:
 *     - in: body
 *       schema:
 *         type: object
 *         properties:
 *           email:
 *             type: string
 *   response:
 *     201:
 *       description: Created!
 */

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
