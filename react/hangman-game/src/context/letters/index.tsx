import { createContext } from 'react';
import { TLettersArray } from '../../types/letters.type';

export type TLettersContext = {
  letters: TLettersArray;
  initWord: (word: string) => void;
  updateLetter: (letterType: string) => void;
};

export const defaultLetterValue: TLettersContext = {
  letters: [],
  initWord: () => {},
  updateLetter: () => {},
};

export const LettersContext = createContext(defaultLetterValue);
