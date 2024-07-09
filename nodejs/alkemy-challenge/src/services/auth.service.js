import { NotFoundError } from '../errors/not-found.error.js';
import { UsersModel } from '../models/Users.model.js';

export class AuthService {
  async createUser(user) {
    const result = await UsersModel.create(user);
    return await UsersModel.findByPk(result.id, {
      attributes: ['id', 'email'],
    });
  }

  async findUserByEmail(email) {
    const userFound = await UsersModel.findOne({ where: { email } });
    if (!userFound) throw new NotFoundError('User not found');

    return userFound;
  }
}
