import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProductsThunk } from '../store/thunks/product.thunk';

export const useFetchProducts = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return { products };
};
