import { useContext } from 'react';
import { LettersContext } from '../../context/letters';
import { useWon } from '../HangmanBoard/useWon';

export const Message = () => {
  const { letters } = useContext(LettersContext);
  const { isWon } = useWon({ letters });

  return <div>{isWon ? <p>You won!</p> : <p>Come on!</p>}</div>;
};
