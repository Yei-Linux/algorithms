import { useContext, useEffect } from 'react';
import { LettersContext } from '../../context/letters';

export interface IUseBuildLetters {
  word: string;
}

export const useBuildLetters = ({ word }: IUseBuildLetters) => {
  const { initWord, letters } = useContext(LettersContext);

  useEffect(() => {
    if (!word) return;
    initWord(word);
  }, [word]);

  return { letters };
};
