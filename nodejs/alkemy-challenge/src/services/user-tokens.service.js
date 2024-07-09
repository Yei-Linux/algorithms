import { JWTHelper } from '../helpers/jwt.helper.js';
import { UserTokensModel } from '../models/UserTokens.models.js';

export class UserTokensService {
  async refresh(refreshToken) {}

  async upsert({ id: userId, email, fullName }) {
    const accessToken = JWTHelper.sign({ id: userId, email, fullName });
    const refreshToken = JWTHelper.sign({ id: userId, email, fullName });
    const expired = new Date();
    expired.setSeconds(expired.getSeconds() + JWTHelper.getExpirationSeconds);

    const result = await UserTokensModel.upsert({
      userId,
      accessToken,
      refreshToken,
      expired,
    });

    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    };
  }
}
