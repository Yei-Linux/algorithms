import { env } from '../config/env';
import { Products } from '../types/products.type';

export const getProductsService = async () => {
  try {
    const promise = await fetch(env.AEROLAB_BASEURL + '/products');
    const json = await promise.json();

    return json as Products;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
