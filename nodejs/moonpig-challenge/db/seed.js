import { v4 } from 'uuid';
import { sequelize } from './setup.js';
import { Product } from './models/products.model.js';
import { Supplier } from './models/suppliers.model.js';

export const seed = async () => {
  const supplierA = v4();
  const supplierB = v4();
  const supplierC = v4();

  await Supplier.bulkCreate([
    { id: supplierA, name: 'Supplier A', leadingTime: 3 },
    { id: supplierB, name: 'Supplier B', leadingTime: 8 },
    { id: supplierC, name: 'Supplier C', leadingTime: 3 },
  ]);

  await Product.bulkCreate(
    [
      { name: 'Product A', supplier_id: supplierA },
      { name: 'Product B', supplier_id: supplierA },
      { name: 'Product C', supplier_id: supplierA },
      { name: 'Product D', supplier_id: supplierB },
      { name: 'Product E', supplier_id: supplierB },
      { name: 'Product F', supplier_id: supplierB },
      { name: 'Product G', supplier_id: supplierC },
      { name: 'Product H', supplier_id: supplierC },
    ],
    {
      include: [{ model: Supplier, as: 'supplier' }],
    }
  );
};

export const initDB = async () => {
  await sequelize.sync();
  await seed();
};
