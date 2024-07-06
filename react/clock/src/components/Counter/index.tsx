import { useContext } from 'react';
import { CounterContext } from '../../context/counter/context';

export interface ICounter {
  value: number;
  id: number;
}

export const Counter = ({ value, id }: ICounter) => {
  const { onDecrement, onIncrement } = useContext(CounterContext);

  return (
    <div>
      <p>{value}</p>
      <div>
        <button onClick={() => onIncrement(id)}>Increment</button>
        <button onClick={() => onDecrement(id)}>Decrement</button>
      </div>
    </div>
  );
};
