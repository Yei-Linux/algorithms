import { DataTypes } from 'sequelize';
import { db } from '../index.js';

export const UserModel = db.define("User",{
  name: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});
