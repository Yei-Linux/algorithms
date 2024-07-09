import passport from 'passport';
import { AuthService } from '../services/auth.service.js';
import { envs } from '../config/env.js';

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  signup = async (req, res, next) => {
    try {
      const body = req.body;
      const user = await this.authService.createUser(body);
      res.status(200).send({ data: user });
    } catch (error) {
      next(error);
    }
  };

  signin = (req, res, next) => {
    passport.authenticate('local', { session: false }, (error, data) => {
      if (error) {
        next(error);
      }

      res.status(200).send({ data });
    })(req, res, next);
  };

  signinGoogleCallback = (req, res, next) => {
    passport.authenticate('google', {}, (error, data) => {
      if (error) {
        return res.redirect(`${envs.frontendUrl}`);
      }

      req.login(response, { session: false }, () =>
        res.redirect(
          `${envs.frontendUrl}?${new URLSearchParams(data).toString()}`
        )
      );
    })(req, res, next);
  };

  refreshToken = () => {};
}
