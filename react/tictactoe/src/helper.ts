import { Tokens } from './App';
import { parser } from './Board';
import { TokenType } from './Tokens';

/**
 * Refactor
 * @param newTokens
 * @returns
 */
export const handleDecideWhoWins = (
  newTokens: Tokens,
  SIZE: number,
  setWinner: (value: TokenType) => void
) => {
  for (let i = 0; i < SIZE; i++) {
    let prevValue = null;
    for (let j = 0; j < SIZE; j++) {
      const itemValue = newTokens?.[parser(i, j)]?.type;
      if (!itemValue) {
        prevValue = null;
        break;
      }
      if (j === 0) {
        prevValue = itemValue;
        continue;
      }
      if (prevValue !== itemValue) {
        prevValue = null;
        break;
      }
    }

    if (prevValue) {
      return setWinner(prevValue);
    }
  }

  for (let i = 0; i < SIZE; i++) {
    let prevValue = null;
    for (let j = 0; j < SIZE; j++) {
      const itemValue = newTokens?.[parser(j, i)]?.type;
      if (!itemValue) {
        prevValue = null;
        break;
      }
      if (j === 0) {
        prevValue = itemValue;
        continue;
      }
      if (prevValue !== itemValue) {
        prevValue = null;
        break;
      }
    }

    if (prevValue) {
      return setWinner(prevValue);
    }
  }

  let prevValue = null;
  for (let i = 0; i < SIZE; i++) {
    const itemValue = newTokens?.[parser(i, i)]?.type;
    if (!itemValue) {
      prevValue = null;
      break;
    }
    if (i === 0) {
      prevValue = itemValue;
      continue;
    }
    if (prevValue !== itemValue) {
      prevValue = null;
      break;
    }
  }

  if (prevValue) {
    return setWinner(prevValue);
  }

  prevValue = null;
  let j = -1;

  for (let i = SIZE - 1; i >= 0; i--) {
    j++;
    const itemValue = newTokens?.[parser(i, j)]?.type;
    if (!itemValue) {
      prevValue = null;
      break;
    }
    if (i === SIZE - 1) {
      prevValue = itemValue;
      continue;
    }
    if (prevValue !== itemValue) {
      prevValue = null;
      break;
    }
  }

  if (prevValue) {
    return setWinner(prevValue);
  }
};
