import { PropsWithChildren } from 'react';
import styles from './card.module.css';
import classNames from 'classnames';

export type TClick<T> = React.ReactEventHandler<T>;

type TCard = PropsWithChildren<{
  backContent?: React.ReactNode;
  isFlipped?: boolean;
  onClick?: TClick<HTMLDivElement>;
}>;

export const Card = ({ children, backContent, onClick, isFlipped }: TCard) => {
  return (
    <div className={styles.card_box} onClick={onClick}>
      <div
        className={classNames(styles.card_inner, {
          [styles.card_inner_flip]: isFlipped,
        })}
      >
        <div className={styles.card_front}>{children}</div>

        {backContent && <div className={styles.card_back}>{backContent}</div>}
      </div>
    </div>
  );
};
