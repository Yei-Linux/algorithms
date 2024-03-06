import { useMemo } from 'react';
import boardStyle from './board.module.css';
import { Token } from '../Tokens';

type Board = {
  size: number;
  onClickCell: (position: number) => void;
  tokens: Record<string, Token> | null;
};

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
      {new Array(Math.pow(3, 2)).fill('').map((_, index) => (
        <div className={boardStyle.children} onClick={() => onClickCell(index)}>
          {tokens?.[index] ? <Token type={tokens?.[index].type} /> : <></>}
        </div>
      ))}
    </div>
  );
};
