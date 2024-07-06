import { PropsWithChildren, useState } from 'react';
import { CounterContext, CounterDefaulValue, ICounterValue } from './context';

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [counters, setCounters] = useState<ICounterValue['counters']>(
    CounterDefaulValue.counters
  );

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
    <CounterContext.Provider value={{ counters, onIncrement, onDecrement }}>
      {children}
    </CounterContext.Provider>
  );
};
