import { useContext } from 'react';
import { FavoritesContext } from '../context/favorites';

export const useFavoriteContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) throw new Error('Favorite provider was not implemented');
  const { favoriteIds, toggleFavoriteId } = context;

  return { favoriteIds, toggleFavoriteId };
};
