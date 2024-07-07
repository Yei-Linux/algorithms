import { FC } from 'react';
import { Result } from '../../types/api.type';
import styles from './style.module.css';
import { HeartSvg } from '../icons/Heart';

export type TCharacter = Pick<
  Result,
  'name' | 'status' | 'type' | 'gender' | 'image'
> & { isFavorite: boolean; toggleFavorite: () => void };

export const Character: FC<TCharacter> = ({
  name,
  status,
  type,
  gender,
  image,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <div className={styles.character}>
      <img height={100} src={image} alt={name} />
      <div className={styles.title_container}>
        <button className={styles.favorite_btn} onClick={toggleFavorite}>
          <HeartSvg background={isFavorite ? 'red' : '#000'} />
        </button>
        <h4 className={styles.title}>{name}</h4>
      </div>

      <dl className={styles.metainfo}>
        <div className={styles.info}>
          <dt>Status:</dt>
          <dd>{status}</dd>
        </div>

        <div className={styles.info}>
          <dt>Type:</dt>
          <dd>{type}</dd>
        </div>

        <div className={styles.info}>
          <dt>Gender:</dt>
          <dd>{gender}</dd>
        </div>
      </dl>
    </div>
  );
};
