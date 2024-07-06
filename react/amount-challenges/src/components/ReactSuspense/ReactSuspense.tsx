import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import { ElementThree } from './ElementThree';

const ElementOne = lazy(() => import('./ElementOne'));
const ElementTwo = lazy(() => import('./ElementTwo'));

export const ReactSuspense = () => {
  const router = createBrowserRouter([
    {
      path: '/route1',
      element: <ElementOne />,
    },
    {
      path: '/route2',
      element: <ElementTwo />,
    },
    {
      path: '/route3',
      element: <ElementThree />,
    },
  ]);

  return (
    <div>
      <div>
        <Link to="route1">Element One</Link>
        <Link to="route2">Element Two</Link>
        <Link to="route3">Element Three</Link>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};
