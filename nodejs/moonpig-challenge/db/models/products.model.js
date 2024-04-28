import { DataTypes } from 'sequelize';
import { sequelize } from '../setup.js';

export const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
})
