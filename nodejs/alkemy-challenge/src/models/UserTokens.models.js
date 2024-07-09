import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db/db.instance.js';

export const UserTokensModel = sequelize.define(
  'UserTokens',
  {
    accessToken: {
      type: DataTypes.TEXT,
    },
    refreshToken: {
      type: DataTypes.TEXT,
    },
    expired: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    tableName: 'user_tokens',
    indexes: [
      {
        unique: true,
        fields: ['userId'],
      },
    ],
    hooks: {
      beforeCreate: (user, options) => {},
    },
  }
);
