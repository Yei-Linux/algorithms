import { forwardRef, useImperativeHandle, useState } from 'react';

export interface IRefHandlerCounter {
  onIncrement: () => void;
  onDecrement: () => void;
}

export type TCounterv2 = {
  value: number;
  id: string;
} & IRefHandlerCounter;

export const Counterv2 = forwardRef(
  (
    { value, onIncrement, onDecrement }: TCounterv2,
    ref: React.ForwardedRef<IRefHandlerCounter>
  ) => {
    const [counter, setCounter] = useState(value);

    useImperativeHandle(ref, () => ({
      onIncrement() {
        setCounter((prev) => prev + 1);
      },
      onDecrement() {
        setCounter((prev) => prev - 1);
      },
    }));

    return (
      <div>
        <p>{counter}</p>
        <div>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
);
