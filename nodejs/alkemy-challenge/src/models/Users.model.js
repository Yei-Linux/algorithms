import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db/db.instance.js';
import { CryptHelper } from '../helpers/crypt.helper.js';

export const UsersModel = sequelize.define(
  'Users',
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: null,
      defaultValue: 18,
      validate: {
        min: 18,
        max: 200,
      },
    },
  },
  {
    timestamps: true,
    tableName: 'users',
    hooks: {
      beforeCreate: async (user, options) => {
        user.password = await CryptHelper.hash(user.password);
      },
    },
  }
);
