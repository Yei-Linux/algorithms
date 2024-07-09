import { sign, verify } from 'jsonwebtoken';
import { InternalServerError } from '../errors/internal-server.error';
import { envs } from '../config/env.js';

export class JWTHelper {
  static JWT_SEED = envs.jwtSeed;
  static JWT_ACCESS_TOKEN_EXPIRATION = envs.jwtAccessTokenExp;
  static JWT_REFRESH_TOKEN_EXPIRATION = envs.jwtRefreshTokenExp;
  static JWT_ERROR_MALFORMED = 'JsonWebTokenError';
  static JWT_ERROR_EXPIRED = 'TokenExpiredError';

  static get getExpirationSeconds() {
    try {
      const minutes = +JWTHelper.JWT_ACCESS_TOKEN_EXPIRATION.replace(/m/g, '');
      return minutes * 60;
    } catch (error) {
      throw new InternalServerError('Expiration value is invalid');
    }
  }

  static errorHandler(error) {
    if (error.name === 'TokenExpiredError') {
      console.warn('Token expired');
      return error.name;
    }
    if (error.name === 'JsonWebTokenError') {
      console.warn('Token malformed');
      return error.name;
    }
  }

  static async sign(payload) {
    const token = sign(payload, JWTHelper.JWT_SEED, {
      expiresIn: JWTHelper.JWT_ACCESS_TOKEN_EXPIRATION,
    });

    return token;
  }

  static verify(token) {
    try {
      const decoded = verify(token, JWTHelper.JWT_SEED);
      return decoded;
    } catch (error) {
      JWTHelper.errorHandler(error);
    }
  }
}
