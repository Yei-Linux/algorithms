import { PropsWithChildren, useReducer } from 'react';
import { LettersContext, TLettersContext, defaultLetterValue } from '.';
import { TAction } from '../../types/context.type';
import { INITIALIZE_LETTERS_TYPE, UPDATE_LETTERS_TYPE } from './types';
import { TLettersArray } from '../../types/letters.type';

type ActionType = typeof INITIALIZE_LETTERS_TYPE | typeof UPDATE_LETTERS_TYPE;

const letterReducer = (state: TLettersContext, action: TAction<ActionType>) => {
  const actions = {
    [INITIALIZE_LETTERS_TYPE]: (word: string) => {
      const letters: TLettersArray = word
        .split('')
        .map((letter, index) => ({ letter, isDisplayed: false, index }));
      const lettersCloned = letters.slice();

      const randomIndexes = Array.from({ length: 3 }, () => {
        const random = Math.floor(Math.random() * lettersCloned.length);
        const letterRandomIndex = lettersCloned[random]?.letter;

        lettersCloned.splice(random, 1);

        return letterRandomIndex;
      });

      letters.forEach((item) => {
        if (!randomIndexes.includes(item.letter)) return;
        item.isDisplayed = true;
      });

      return {
        ...state,
        letters,
      };
    },
    [UPDATE_LETTERS_TYPE]: (letterTyped: string) => {
      const letters = state.letters.map((item) =>
        letterTyped === item.letter
          ? {
              ...item,
              isDisplayed: true,
            }
          : item
      );

      return { ...state, letters };
    },
  };

  if (!actions[action.type]) return state;
  return actions[action.type](action.payload);
};

export const LettersProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(letterReducer, defaultLetterValue);

  const initWord = (word: string) => {
    dispatch({
      type: INITIALIZE_LETTERS_TYPE,
      payload: word,
    });
  };

  const updateLetter = (letterTyped: string) => {
    dispatch({
      type: UPDATE_LETTERS_TYPE,
      payload: letterTyped,
    });
  };

  return (
    <LettersContext.Provider
      value={{ letters: state.letters, initWord, updateLetter }}
    >
      {children}
    </LettersContext.Provider>
  );
};
