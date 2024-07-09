import { AuthService } from '../services/auth.service.js';

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  signup = (req, res, next) => {
    try {
      const body = req.body;
      this.authService.createUser(body);
    } catch (error) {
      next(error);
    }
  };

  signin = () => {};

  signinGoogle = () => {};

  refreshToken = () => {};
}
