import { DataTypes } from 'sequelize';
import { sequelize } from '../setup.js';

export const Supplier = sequelize.define('Supplier', {
  name: DataTypes.STRING,
  leadingTime: DataTypes.INTEGER,
});
