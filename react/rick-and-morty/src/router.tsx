import { createBrowserRouter } from 'react-router-dom';
import { NotFoundError } from './components/NotFoundError';
import { FavoritesPage } from './pages/Favorites';
import { HomePage } from './pages/Home';
import { LocationsPage } from './pages/Locations';
import { FavoritesProvider } from './context/favorites';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <FavoritesProvider>
        <HomePage />
      </FavoritesProvider>
    ),
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/locations',
    element: (
      <FavoritesProvider>
        <LocationsPage />
      </FavoritesProvider>
    ),
  },
  {
    path: '*',
    element: <NotFoundError />,
  },
]);
