import { hash, compare } from 'bcrypt';
import { BadRequestError } from '../errors/bad-request.error';

export class CryptHelper {
  static SALT_ROUNDS = 10;

  static async hash(password) {
    if (!password) {
      throw new BadRequestError('Password is empty');
    }

    const passwordHashed = await hash(password, CryptHelper.SALT_ROUNDS);
    return passwordHashed;
  }

  static async compare(hashedPassword, plainPassword) {
    const isSame = await compare(plainPassword, hashedPassword);
    return isSame;
  }
}
