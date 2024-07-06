import { ComponentType } from 'react';
import { ResultsProvider } from './provider';

export const WithResults =
  <T extends object>(Comp: ComponentType<T>) =>
  (props: T) => {
    return (
      <ResultsProvider>
        <Comp {...props} />
      </ResultsProvider>
    );
  };
