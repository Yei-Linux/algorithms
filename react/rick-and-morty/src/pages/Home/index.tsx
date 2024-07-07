import { useFetchCharacters } from '../../hooks/useFetchCharacters';
import { usePagination } from '../../hooks/usePagination';
import { Character } from '../../components/Character';

import styles from './style.module.css';
import { useRef } from 'react';
import { useIntersectionObserve } from '../../hooks/useIntersectionObserve';
import { useFavoriteContext } from '../../hooks/useFavoritesContext';

export const HomePage = () => {
  const characterItemsRef = useRef<HTMLDivElement>(null);
  const { favoriteIds, toggleFavoriteId } = useFavoriteContext();
  const { page, nextPage } = usePagination();
  const { characters } = useFetchCharacters({ page });
  useIntersectionObserve({
    observedRef: characterItemsRef,
    onVisibleToViewport: () => {
      nextPage();
    },
  });

  return (
    <div className={styles.home}>
      <div className={styles.character_items}>
        {characters.map(({ id, name, status, type, gender, image }) => (
          <Character
            key={id}
            gender={gender}
            name={name}
            status={status}
            type={type}
            image={image}
            isFavorite={favoriteIds.includes(id)}
            toggleFavorite={() => toggleFavoriteId(id)}
          />
        ))}
      </div>
      <div ref={characterItemsRef} />
    </div>
  );
};
