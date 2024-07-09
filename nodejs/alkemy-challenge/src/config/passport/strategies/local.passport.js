import { InternalServerError } from '../../../errors/internal-server.error.js';
import { CryptHelper } from '../../../helpers/crypt.helper.js';
import { AuthService } from '../../../services/auth.service.js';
import { UserTokensService } from '../../../services/user-tokens.service.js';

export const LocalAuthStrategy = async (email, password, done) => {
  try {
    const authService = new AuthService();
    const userTokensService = new UserTokensService();

    const user = await authService.findUserByEmail(email);
    if (!user.password) {
      return done(
        InternalServerError('User does not have any password'),
        undefined
      );
    }

    const isCorrectPassword = await CryptHelper.compare(
      user.password,
      password
    );
    if (!isCorrectPassword) {
      return done(InternalServerError('Password does not match'), undefined);
    }

    const tokens = await userTokensService.upsert(user);
    return done(null, tokens);
  } catch (error) {
    return done(
      InternalServerError('There was an error during auth local'),
      undefined
    );
  }
};
