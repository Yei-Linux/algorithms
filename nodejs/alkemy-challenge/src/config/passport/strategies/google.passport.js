import { AccountService } from '../../../services/account.service.js';
import { AuthService } from '../../../services/auth.service.js';

export const GoogleAuthStrategy = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const authService = new AuthService();
  const accountService = new AccountService();

  const {
    emails: [email],
    displayName: fullName,
    id: providerAccountId,
  } = profile;

  const { id } = await authService.createUser({ email, fullName });
  await accountService.upsert({
    providerAccountId,
    userId: id,
    provider,
    accessToken,
    refreshToken,
  });

  const tokens = {
    accessToken,
    refreshToken,
  };

  done(null, tokens);
};
