import { useContext, useState } from 'react';
import { Counter } from '../Counter';
import { CounterContext, ICounterValue } from '../../context/counter/context';

export interface ICounterManager {
  counters: Array<{
    id: number;
    value: number;
  }>;
}

const CounterManagerContent = () => {
  const { counters } = useContext(CounterContext);

  return (
    <div>
      {counters.map(({ id, value }) => (
        <Counter value={value} key={id} id={id} />
      ))}
    </div>
  );
};

export const CounterManager = ({ counters }: ICounterManager) => {
  const [countersState, setCounters] =
    useState<ICounterValue['counters']>(counters);

  const handleOperation = (idProp: number, operation: '+' | '-') =>
    setCounters((prev) => {
      return prev.map((item) => {
        if (idProp !== item.id) return item;
        return {
          ...item,
          value: operation === '+' ? item.value + 1 : item.value - 1,
        };
      });
    });

  const onIncrement = (idProp: number) => handleOperation(idProp, '+');

  const onDecrement = (idProp: number) => handleOperation(idProp, '-');

  return (
    <CounterContext.Provider
      value={{ counters: countersState, onIncrement, onDecrement }}
    >
      <CounterManagerContent />
    </CounterContext.Provider>
  );
};
