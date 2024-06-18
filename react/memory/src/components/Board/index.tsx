import { PropsWithChildren } from 'react';
import styles from './board.module.css';
import { Card, TClick } from '../ui/Card';

interface ISquare {
  content: string;
  isFlipped: boolean;
  onClick?: TClick<HTMLDivElement>;
}

export const Square = ({ content, onClick, isFlipped }: ISquare) => (
  <Card backContent={content} onClick={onClick} isFlipped={isFlipped}>
    <div className={styles.square_back} />
  </Card>
);

export const Board = ({ children }: PropsWithChildren) => {
  return <div className={styles.board}>{children}</div>;
};

Board.Square = Square;
