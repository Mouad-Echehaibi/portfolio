import Contact from '@/pages/Contact';
import Home from '@/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {index: true, element: <Home />},
  {path: '/contact', element: <Contact />},
])


const Router = () => <RouterProvider router={router} />
export default Router
