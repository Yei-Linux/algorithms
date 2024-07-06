import { useRef } from 'react';
import { ICounterValue } from '../../context/counter/context';
import { Counterv2, IRefHandlerCounter } from '../Counter/Counterv2';

export interface ICounterManagerV2 {
  counters: ICounterValue['counters'];
}

export const CounterManagerV2 = ({ counters }: ICounterManagerV2) => {
  const countersRef = useRef<Record<string, IRefHandlerCounter>>({});
  const counterRef = useRef<IRefHandlerCounter>({
    onIncrement() {},
    onDecrement() {},
  });

  const onIcrement = (id: string) => {
    if (!countersRef.current[id]) return;
    countersRef.current[id].onIncrement();
  };

  const onDecrement = (id: string) => {
    if (!countersRef.current[id]) return;
    countersRef.current[id].onDecrement();
  };

  return (
    <div>
      {counters.map(({ value, id }) => (
        <Counterv2
          onIncrement={() => onIcrement(id)}
          onDecrement={() => onDecrement(id)}
          value={value}
          id={id}
          key={id}
          ref={(ref) => {
            if (!ref) return;
            countersRef.current[id] = ref;
          }}
        />
      ))}
    </div>
  );
};
