import { Cell } from './Cell';
import styles from './index.module.css';
import { useBoard } from './useBoard';

type TBoard = {
  size?: number;
  bombSize?: number;
};

export const Board = ({ size = 3, bombSize = 2 }: TBoard) => {
  const {
    board,
    isThisIndexAvailableToShow,
    setIndexAvailableToShow,
    gameStatus,
  } = useBoard({ size, bombSize });

  if (gameStatus === 'gameover') return 'Game Over';
  if (gameStatus === 'won') return 'You Won';

  return (
    <div
      className={styles.board}
      style={{
        gridTemplateRows: `repeat(${size}, 1fr)`,
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {board.map((row, indexI) =>
        row.map((col, indexJ) => {
          const isDisplayedToUser = isThisIndexAvailableToShow(indexI, indexJ);
          return (
            <Cell
              key={indexI + '_' + indexJ}
              onClick={() => setIndexAvailableToShow(indexI, indexJ)}
              style={{
                background: isDisplayedToUser ? 'black' : '',
              }}
            >
              {isDisplayedToUser ? col : ''}
            </Cell>
          );
        })
      )}
    </div>
  );
};
