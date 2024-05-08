import { UserModel } from '../config/database/models/User.model';
import { CrudDao } from './crud.dao';

export class UserDao extends CrudDao {
  constructor() {
    super(UserModel);
  }
}
