import { type FC } from 'react';
import classNames from 'classnames';

export interface Square {
  letter: string;
  theme: 'primary' | 'secondary';
  isSelected?: boolean;
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
}

export const Square: FC<Square> = ({ letter, theme, onClick, isSelected }) => {
  const palette = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-primary',
  };

  const classStyles = palette[theme];

  return (
    <button
      onClick={onClick}
      className={classNames(
        `cursor-pointer outline-none rounded-md w-[50px] h-[50px] text-white px-3 py-2 ${classStyles}`,
        {
          '!bg-primary !text-white': isSelected,
        }
      )}
    >
      {letter.toUpperCase()}
    </button>
  );
};
