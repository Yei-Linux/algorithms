import { DataTypes } from 'sequelize';
import { db } from '../index.js';

export const CategoryModel = db.define(
  'Category',
  {
    name: DataTypes.STRING,
  },
  { tableName: 'categories' }
);
