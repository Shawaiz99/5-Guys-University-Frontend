import { Link, useNavigate } from "react-router-dom";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import "./wishlist.css";
import BookCard from "../../components/BookCard";
import { useLocation } from "react-router";

const WishlistPage = () => {
  const { store, dispatch } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Current location:", location.pathname);
  const wishlistItems = store.wishlist || [];
  console.log("Wishlist items:", wishlistItems);
  const wishlistWithDetails = wishlistItems
    .map((item) => {
      const book = store.books.find((b) => b.id === item.bookId);
      return {
        ...item,
        book,
      };
    })
    .filter((item) => item.book);
  console.log("Wishlist with details:", wishlistWithDetails);
  const isEmpty = wishlistItems.length === 0;

  const removeFromWishlist = (bookId) => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: { bookId },
    });
  };

  const addToCart = (bookId) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { bookId },
    });
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Wishlist</h1>

      {isEmpty ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Save items you're interested in for later by adding them to your
            wishlist.
          </p>
          <Link
            to="/browse"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Browse Books
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {wishlistItems.map((book) => (
              <div key={book.id} className="col">
                <BookCard book={book} location={location.pathname} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
