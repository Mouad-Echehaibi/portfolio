import B3_Home from '@/pages/B3/B3_Home';
import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {index: true, element: <Home />},
  {path: '/b', element: <B3_Home />},
  {path: '/contact', element: <Contact />},
])


const Router = () => <RouterProvider router={router} />
export default Router
