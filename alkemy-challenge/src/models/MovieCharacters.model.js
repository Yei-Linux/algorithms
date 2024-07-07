import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.instance.js';

export const MovieCharactersModel = sequelize.define(
  'MovieCharacters',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      },
    },
  },
  { timestamps: true, tableName: 'movie_characters' }
);
