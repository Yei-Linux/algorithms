import { sign, verify } from 'jsonwebtoken';

export class JWTHelper {
  static JWT_SEED = process.env.JWT_SEED;
  static JWT_ACCESS_TOKEN_EXPIRATION = process.env.JWT_ACCESS_TOKEN_EXPIRATION;
  static JWT_REFRESH_TOKEN_EXPIRATION =
    process.env.JWT_REFRESH_TOKEN_EXPIRATION;

  static errorHandler(error) {
    if (error.name === 'TokenExpiredError') {
      console.warn('Token expired');
      return;
    }
    if (error.name === 'JsonWebTokenError') {
      console.warn('Token malformed');
      return;
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
