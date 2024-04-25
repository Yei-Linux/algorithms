import { useFetchProducts } from '../hooks/useFetchProducts';
import { ProductC } from './Product';

export const Products = () => {
  const { products } = useFetchProducts();

  return (
    <main className="grid-in-main grid grid-cols-3 grid-rows-3 gap-5">
      {products?.map?.((product) => (
        <ProductC key={product._id} {...product} />
      ))}
    </main>
  );
};
