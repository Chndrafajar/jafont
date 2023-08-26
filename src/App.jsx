import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.scss';
import './dashboard.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

import BlogPages from './pages/BlogPages';
import DetailPages from './pages/DetailPages';
import MyInformation from './pages/dashboard user/MyInformation';
import SaveProduct from './pages/dashboard user/SaveProduct';
import Messages from './pages/dashboard user/Messages';
import MessagesId from './pages/dashboard user/MessagesId';
import ChangePassword from './pages/dashboard user/ChangePassword';
import Purchases from './pages/dashboard user/Purchases';
import TokoPages from './pages/tokopages/TokoPages';
import TokoAbout from './pages/tokopages/TokoAbout';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/404',
          element: <NotFound />,
        },
        {
          path: '/c/:slug',
          element: <Product />,
        },
        {
          path: '/blogs/:slug',
          element: <BlogPages />,
        },
        {
          path: '/detail/:slug',
          element: <DetailPages />,
        },
        {
          path: '/toko/:slug',
          element: <TokoPages />,
        },
        {
          path: '/toko/about',
          element: <TokoAbout />,
        },
      ],
    },
    {
      path: '/dashboard/my-information',
      element: <MyInformation />,
    },
    {
      path: '/dashboard/save-product',
      element: <SaveProduct />,
    },
    {
      path: '/dashboard/messages',
      element: <Messages />,
    },
    {
      path: '/dashboard/messages/:slug',
      element: <MessagesId />,
    },
    {
      path: '/dashboard/purchases',
      element: <Purchases />,
    },
    {
      path: '/dashboard/change-password',
      element: <ChangePassword />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
