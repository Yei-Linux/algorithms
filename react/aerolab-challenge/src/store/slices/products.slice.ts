import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product, Products } from '../../types/products.type';
import { getProductsThunk } from '../thunks/product.thunk';

export type ProductsState = {
  products: Products;
};

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    set: (state, action: PayloadAction<Products>) => {
      state.products = action.payload;
    },
    sortAsc: (state) => {
      state.products.sort((a, b) => a.cost - b.cost);
    },
    sortDesc: (state) => {
      state.products.sort((a, b) => b.cost - a.cost);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProductsThunk.fulfilled,
      (state, action: PayloadAction<Products>) => {
        state.products = action.payload;
      }
    );
  },
});

export const {
  add: addProduct,
  set: setProducts,
  sortAsc: sortProductsToAsc,
  sortDesc: sortProductsToDesc,
} = productsSlice.actions;

export default productsSlice.reducer;
