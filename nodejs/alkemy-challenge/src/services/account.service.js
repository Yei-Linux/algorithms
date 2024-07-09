import { AccountModel } from '../models/Account.model.js';

export class AccountService {
  async upsert({
    providerAccountId,
    userId,
    provider,
    accessToken,
    refreshToken,
  }) {
    await AccountModel.upsert({
      userId,
      provider,

      providerAccountId,
      accessToken,
      refreshToken,
    });
  }
}
