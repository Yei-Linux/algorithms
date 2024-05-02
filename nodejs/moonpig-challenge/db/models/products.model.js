import { DataTypes } from 'sequelize';
import { sequelize } from '../setup.js';
import { Supplier } from './suppliers.model.js';

export const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
});

Product.belongsTo(Supplier, {
  as: 'supplier',
  foreignKey: 'supplier_id',
});
Supplier.hasMany(Product, {
  as: 'products',
  foreignKey: 'supplier_id',
});
