import { DataTypes } from 'sequelize';
import { sequelizeDB } from '../sequelize';

export const UserModel = sequelizeDB.define({
  name: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});
