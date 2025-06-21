import { createBrowserRouter } from 'react-router';
import RootLayout from './RootLayout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from '../pages/home/Home.jsx';
import Landing from '../pages/landing/Landing.jsx';
import SignUp from "../pages/signup/SignUp.jsx";
import SignIn from "../pages/signin/SignIn.jsx";
import ProtectedRoute from './ProtectedRoute.jsx';
import WishlistPage from "../pages/wishlist/wishlist.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { index: true, element: <Landing /> },
      { path: "/landing", element: <Landing /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/home", element: <Home /> },
      { path: "/wishlist", element: <WishlistPage /> },

    ],
  },
]);
