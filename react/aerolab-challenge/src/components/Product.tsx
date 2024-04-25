import type { Product } from '../types/products.type';

export const ProductC = ({ name, cost, category, img }: Product) => {
  return (
    <div className="flex flex-col gap-1 items-center shadow-md rounded-md p-4">
      <img src={img.url} alt={name} />
      <p>{name}</p>
      <data className="category flex" value={category}>
        {category}
      </data>
      <data className="amount flex font-bold text-xl" value={cost}>
        {cost}
      </data>
    </div>
  );
};
