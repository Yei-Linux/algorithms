import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/products.slice';
import userSlice from './slices/user.slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
