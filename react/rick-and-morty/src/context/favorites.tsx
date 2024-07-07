import { PropsWithChildren, createContext, useState } from 'react';

interface IFavoritesContext {
  favoriteIds: number[];
  toggleFavoriteId: (id: number) => void;
}

const defaultValues: IFavoritesContext = {
  favoriteIds: [],
  toggleFavoriteId: () => {},
};

export const FavoritesContext = createContext<IFavoritesContext>(defaultValues);

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favoriteIds, setFavoriteIds] = useState<
    IFavoritesContext['favoriteIds']
  >([]);

  const toggleFavoriteId = (id: number): void => {
    setFavoriteIds((prev) => {
      const isFoundIdInTheState = prev.includes(id);
      if (isFoundIdInTheState) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavoriteId }}>
      {children}
    </FavoritesContext.Provider>
  );
};
