import { useContext } from 'react';
import { ResultsContext } from './provider';

const Results = () => {
  const { results } = useContext(ResultsContext);

  return (
    <ul>
      {results.map(({ name, age }) => (
        <li>
          {name} - {age}
        </li>
      ))}
    </ul>
  );
};

export default Results;
