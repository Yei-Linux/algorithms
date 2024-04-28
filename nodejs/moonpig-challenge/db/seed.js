import { sequelize } from './setup.js';
import { Product, Supplier } from './models/index.js';

export const seed = async () => {
  await Product.bulkCreate([
    { name: 'Product A' },
    { name: 'Product B' },
    { name: 'Product C' },
    { name: 'Product D' },
    { name: 'Product E' },
    { name: 'Product F' },
    { name: 'Product G' },
    { name: 'Product H' },
  ]);

  await Supplier.bulkCreate([
    { name: 'Supplier A', leadingTime: 2 },
    { name: 'Supplier B', leadingTime: 1 },
    { name: 'Supplier C', leadingTime: 3 },
  ]);
};

export const initDB = async () => {
  await sequelize.sync();
  await seed();
};
