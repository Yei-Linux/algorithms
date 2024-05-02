import cors from 'cors';
import express from 'express';

import { Product } from './db/models/products.model.js';
import { Supplier } from './db/models/suppliers.model.js';

import { initDB } from './db/seed.js';

initDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/despatchDate', async (req, res) => {
  const qParams = req.query;

  const productIds = qParams.productIds;
  const orderDate = qParams.orderDate;

  try {
    if (!productIds) {
      throw new Error('ProductIds are required');
    }
    if (!orderDate) {
      throw new Error('Order Date is required');
    }

    const productsArr = Array.isArray(productIds) ? productIds : [productIds];

    const onedayToAdd = 24 * 60 * 60 * 1000;
    let timeStamp = new Date().getTime();

    for (let productId of productsArr) {
      const product = await Product.findOne({
        where: { id: productId },
        include: [{ model: Supplier, as: 'supplier' }],
      });
      const supplier = product.supplier;
      const leadingTime = supplier.leadingTime;
      const dispatchDateTime = new Date().getTime() + leadingTime * onedayToAdd;

      if (timeStamp < dispatchDateTime) {
        timeStamp = dispatchDateTime;
      }
    }

    let dispatchDate = new Date(timeStamp);
    const day = dispatchDate.getDay();
    const msToAdd = day === 0 ? onedayToAdd : day === 6 ? 2 * onedayToAdd : 0;

    dispatchDate = new Date(timeStamp + msToAdd);
    res.status(200).send({
      date: dispatchDate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(3000, () => console.log('Server up in port 3000'));
