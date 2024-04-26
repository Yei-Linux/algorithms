import { PropsWithChildren } from 'react';
import styles from './index.module.css';

export const Cell = ({
  children,
  onClick,
  style,
}: PropsWithChildren & {
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}) => {
  return (
    <div className={styles.cell} onClick={onClick} style={style}>
      {children}
    </div>
  );
};
