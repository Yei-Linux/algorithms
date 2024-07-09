import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db/db.instance.js';

export const GendersModel = sequelize.define(
  'Genders',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  },
  { timestamps: true, tableName: 'genders' }
);
