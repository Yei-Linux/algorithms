import { useEffect, useRef, useState } from 'react';

type TBoardItemValue = 'X' | '' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

type TBoard = Array<Array<TBoardItemValue>>;

type TUseBoard = {
  size: number;
  bombSize: number;
};

export const useBoard = ({ size, bombSize }: TUseBoard) => {
  const isMounted = useRef(false);
  const cellsWithNoBombs = useRef(0);
  const [board, setBoard] = useState<TBoard>([]);
  const [indexesToShow, setIndexesToShow] = useState<Array<[number, number]>>(
    []
  );
  const [gameStatus, setGameStatus] = useState<'playing' | 'gameover' | 'won'>(
    'playing'
  );

  const getRandomBombPosition = (): [number, number] => {
    const iPosition = Math.floor(Math.random() * size);
    const jPosition = Math.floor(Math.random() * size);

    return [iPosition, jPosition];
  };

  const isThisIndexAvailableToShow = (i: number, j: number) => {
    return indexesToShow.find(([x, y]) => x === i && j === y);
  };

  const setIndexAvailableToShow = (i: number, j: number) => {
    if (board[i][j] === 'X') {
      setGameStatus('gameover');
      emitBooSound();
      return;
    }

    const indexesUpdated = indexesToShow.find(([x, y]) => i == x && y === j)
      ? indexesToShow
      : ([...indexesToShow, [i, j]] as Array<[number, number]>);
    const cellClickedSize = indexesUpdated.length;

    if (cellClickedSize === cellsWithNoBombs.current) {
      setGameStatus('won');
      return;
    }

    setIndexesToShow(indexesUpdated);
  };

  const emitBooSound = () => {
    try {
      const booSound = new Audio('boo.mp3');
      booSound.play();
    } catch (error) {
      console.warn('Your mp3 is not available right now');
    }
  };

  const generateRandomBombs = (): Array<[number, number]> =>
    new Array(bombSize).fill('').map((_) => getRandomBombPosition());

  const isOutOfRange = (i: number, j: number) =>
    i < 0 || j < 0 || i >= size || j >= size;

  const setBombCounterAround = (array: TBoard) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i][j] === 'X') continue;

        const leftTopCorner = isOutOfRange(i - 1, j - 1)
          ? ''
          : array[i - 1][j - 1];
        const rightTopCorner = isOutOfRange(i - 1, j + 1)
          ? ''
          : array[i - 1][j + 1];
        const leftBottomCorner = isOutOfRange(i + 1, j - 1)
          ? ''
          : array[i + 1][j - 1];
        const rightBottomCorner = isOutOfRange(i + 1, j + 1)
          ? ''
          : array[i + 1][j + 1];

        const left = isOutOfRange(i, j - 1) ? '' : array[i][j - 1];
        const right = isOutOfRange(i, j + 1) ? '' : array[i][j + 1];
        const top = isOutOfRange(i - 1, j) ? '' : array[i - 1][j];
        const bottom = isOutOfRange(i + 1, j) ? '' : array[i + 1][j];

        const bombsCounter = [
          left,
          right,
          top,
          bottom,
          leftTopCorner,
          rightTopCorner,
          leftBottomCorner,
          rightBottomCorner,
        ].reduce((acc, item) => {
          return item === 'X' ? acc + 1 : acc;
        }, 0);

        if (bombsCounter > 0) {
          array[i][j] = bombsCounter.toString() as TBoardItemValue;
        }

        cellsWithNoBombs.current += 1;
      }
    }
    return array;
  };

  const fillOutBoard = () => {
    let array: TBoard = Array(size)
      .fill('')
      .map(() => Array(size).fill(''));
    let randomBombsPositions = generateRandomBombs();

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let hasBomb = randomBombsPositions.find(([x, y]) => x === i && y === j);
        if (!hasBomb) continue;
        array[i][j] = 'X';
      }
    }

    return array;
  };

  const createBoard = () => {
    if (size < 0) throw new Error('Board size is invalid');
    if (bombSize > Math.pow(size, 2))
      throw new Error('Bomb size is invalid the board size defined');

    let array = fillOutBoard();
    array = setBombCounterAround(array);
    setBoard(array);
  };

  useEffect(() => {
    if (isMounted.current) return;
    createBoard();
    isMounted.current = true;
  }, []);

  return {
    board,
    isThisIndexAvailableToShow,
    setIndexAvailableToShow,
    gameStatus,
  };
};
