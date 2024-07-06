import { FC, createContext, useState } from 'react';

export type TResultsState = Array<{
  name: string;
  age: number;
}>;

export type TResultsContext = {
  results: TResultsState;
  addResults: (resultItem: TResultsState[number]) => void;
};

const defaultValue = {
  results: [],
  addResults: () => {},
};

export const ResultsContext = createContext<TResultsContext>(defaultValue);

export const ResultsProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [results, setResults] = useState<TResultsState>([]);

  const addResults = (resultItem: TResultsState[number]) => {
    setResults((prev) => [...prev, resultItem]);
  };

  return (
    <ResultsContext.Provider value={{ results, addResults }}>
      {children}
    </ResultsContext.Provider>
  );
};
