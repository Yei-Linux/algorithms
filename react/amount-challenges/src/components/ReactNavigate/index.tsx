import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Results from './Results';
import { WithResults } from './hoc';
import { Form } from './Form';

const ReactNavigate = () => {
  const router = createBrowserRouter([
    {
      path: '/results',
      element: <Results />,
    },
    {
      path: '/',
      element: <Form />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default WithResults<{}>(ReactNavigate);
