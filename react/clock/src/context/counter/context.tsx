import { createContext } from 'react';

type OperationHandler = (prop: number) => void;

export interface ICounterValue {
  counters: Array<{
    id: string;
    value: number;
  }>;
  onIncrement: OperationHandler;
  onDecrement: OperationHandler;
}

export const CounterDefaulValue: ICounterValue = {
  counters: [],
  onIncrement: () => {},
  onDecrement: () => {},
};

export const CounterContext = createContext(CounterDefaulValue);
