import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.instance.js';

export const CharactersModel = sequelize.define(
  'Characters',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        min: 1,
      },
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        min: 18,
        max: 200,
      },
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    history: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  { timestamps: true, tableName: 'characters' }
);
