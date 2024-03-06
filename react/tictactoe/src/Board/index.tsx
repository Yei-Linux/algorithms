import { useMemo } from 'react';
import boardStyle from './board.module.css';
import { Token } from '../Tokens';

type Board = {
  size: number;
  onClickCell: (position: string) => void;
  tokens: Record<string, Token> | null;
};

export const parser = (i: number, j: number) => `${i}_${j}`;

export const Board = ({ size, onClickCell, tokens }: Board) => {
  const templateSize = useMemo(() => `repeat(${size}, 60px)`, [size]);

  return (
    <div
      className={boardStyle.board}
      style={{
        gridTemplateColumns: templateSize,
        gridTemplateRows: templateSize,
      }}
    >
      {Array(size)
        .fill(Array(size).fill(''))
        .map((arr, i) =>
          arr.map((_: any, j: number) => (
            <div
              key={parser(i, j)}
              className={boardStyle.children}
              onClick={() => onClickCell(parser(i, j))}
            >
              {tokens?.[parser(i, j)] ? (
                <Token type={tokens?.[parser(i, j)].type} />
              ) : (
                <></>
              )}
            </div>
          ))
        )}
    </div>
  );
};
