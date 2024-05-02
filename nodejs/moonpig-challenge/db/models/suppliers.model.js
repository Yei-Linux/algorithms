import { DataTypes } from 'sequelize';
import { sequelize } from '../setup.js';

export const Supplier = sequelize.define('Supplier', {
  id: {
    primaryKey: true,
    type: DataTypes.UUIDV4,
  },
  name: DataTypes.STRING,
  leadingTime: DataTypes.INTEGER,
});
