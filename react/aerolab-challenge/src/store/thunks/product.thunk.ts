import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsService } from '../../services/products.service';

export const getProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async () => {
    try {
      const response = await getProductsService();
      return response;
    } catch (error) {
      return [];
    }
  }
);
