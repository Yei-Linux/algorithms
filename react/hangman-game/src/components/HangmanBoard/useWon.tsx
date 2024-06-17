import { useEffect, useState } from 'react';
import { TLettersArray } from '../../types/letters.type';

export interface IUseWon {
  letters: TLettersArray;
}

export const useWon = ({ letters }: IUseWon) => {
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    const result = letters.every((item) => item.isDisplayed);
    if (!result) return;
    setIsWon(result);
  }, [letters]);

  return { isWon };
};
