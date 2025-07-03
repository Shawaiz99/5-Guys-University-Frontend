import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "../pages/home/Home.jsx";
import Landing from "../pages/landing/Landing.jsx";
import SignUp from "../pages/signup/SignUp.jsx";
import SignIn from "../pages/signin/SignIn.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import WishlistPage from "../pages/wishlist/wishlist.jsx";
import CartPage from "../pages/cart/Cart.jsx";
import MyLibrary from "../pages/my_library/My_Library.jsx";
import BookDetail from "../pages/book_detail/Book_Detail.jsx";
import BooksPage from "../pages/Books/Books.jsx";
import CheckoutPage from "../pages/checkout/Checkout.jsx";
import OrderHistory from "../pages/order_history/Order_History.jsx";
import Profile from "../pages/profile/Profile.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { index: true, element: <Landing /> },
      { path: "/landing", element: <Landing /> },
      { path: "/home", element: <Home /> },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/order-history",
        element: (
          <ProtectedRoute>
            <OrderHistory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <ProtectedRoute>
            <BookDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishlistPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-library",
        element: (
          <ProtectedRoute>
            <MyLibrary />
          </ProtectedRoute>
        ),
      },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
