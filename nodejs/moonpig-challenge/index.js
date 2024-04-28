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
    const products = await Product.findAll();

    res.status(200).send({
      date: '',
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(3000, () => console.log('Server up in port 3000'));
