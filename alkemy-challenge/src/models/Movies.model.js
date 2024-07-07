import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.instance.js';

export const MoviesModel = sequelize.define(
  'Movies',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    image: { type: DataTypes.STRING, validate: { isUrl: true } },
    title: { type: DataTypes.STRING, validate: { min: 1 } },
    dateCreated: { type: DataTypes.DATE, validate: { isDate: true } },
    rating: { type: DataTypes.INTEGER, validate: { min: 1, max: 8 } },
  },
  { timestamps: true, tableName: 'movies' }
);
