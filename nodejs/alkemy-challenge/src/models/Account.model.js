import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db/db.instance.js';

export const AccountModel = sequelize.define(
  'Accounts',
  {
    provider: {
      type: DataTypes.ENUM,
      values: ['google', 'facebook', 'github'],
    },
    providerAccountId: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.TEXT,
    },
    refreshToken: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: 'accounts',
    indexes: [
      {
        fields: ['userId', 'provider'],
      },
    ],
  }
);
