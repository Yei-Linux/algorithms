import { useAppDispatch } from '../store/hooks';
import {
  sortProductsToAsc,
  sortProductsToDesc,
} from '../store/slices/products.slice';

export const Filters = () => {
  const dispach = useAppDispatch();

  const handleSortAsc = () => {
    dispach(sortProductsToAsc());
  };

  const handleSortDesc = () => {
    dispach(sortProductsToDesc());
  };

  return (
    <div className="grid-in-nav h-full">
      <figure className="flex p-4 items-start flex-col gap-3 rounded-md bg-primary text-white h-full max-h-[300px]">
        <figcaption className="font-bold">Filtros</figcaption>
        <ul>
          <li className="cursor-pointer" onClick={handleSortDesc}>
            Por precio de mayor a menor
          </li>
          <li className="cursor-pointer" onClick={handleSortAsc}>
            Por precio de menor a mayor
          </li>
        </ul>
      </figure>
    </div>
  );
};
