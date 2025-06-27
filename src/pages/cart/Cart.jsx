import { Link, useNavigate, useLocation } from "react-router-dom";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import BookCard from "../../components/BookCard";
import "./Cart.css";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../api/books";
import {
  getCart,
  addToWishlist,
  removeFromCart as apiRemoveFromCart,
  clearCart as apiClearCart,
} from "../../api/user";
import { getToken } from "../../utils/auth";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const { store, dispatch } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchCartAndBooks = async () => {
      try {
        const token = getToken();
        if (!token) return;

        const cartData = await getCart(token);
        setCartItems(cartData.items || []);

        const booksData = await getAllBooks();
        setFetchedBooks(
          Array.isArray(booksData) ? booksData : booksData.books || []
        );
      } catch (error) {
        setCartItems([]);
        setFetchedBooks([]);
      }
    };
    fetchCartAndBooks();
  }, []);

  const cartDetails = cartItems
    .map((item) => {
      const book = fetchedBooks.find(
        (b) => b.id === item.book_id || b.id === item.id
      );
      return {
        ...item,
        book,
      };
    })
    .filter((item) => item.book);

  const isEmpty = cartDetails.length === 0;

  const removeFromCart = async (bookId) => {
    try {
      const token = getToken();
      await apiRemoveFromCart(token, bookId);
      window.dispatchEvent(new Event("cart-updated"));

      const cartData = await getCart(token);
      setCartItems(cartData.items || []);
    } catch (error) {
      alert("Failed to remove from cart.");
    }
  };

  const saveForLater = async (bookId) => {
    try {
      const token = getToken();
      await addToWishlist(token, bookId);
      window.dispatchEvent(new Event("cart-updated"));

      await removeFromCart(bookId);
    } catch (error) {
      alert("Failed to save for later.");
    }
  };

  const clearCart = async () => {
    try {
      const token = getToken();
      await Promise.all(
        cartItems.map((item) =>
          apiRemoveFromCart(token, item.book_id || item.id)
        )
      );
      setCartItems([]);
      window.dispatchEvent(new Event("cart-updated"));
    } catch (error) {
      alert("Failed to clear cart.");
    }
  };

  const total = cartDetails.reduce((sum, item) => {
    return sum + (item.book?.price || 0);
  }, 0);

  console.log("store.cart", store.cart);
  console.log("store.books", store.books);

  return (
    <div className="d-flex flex-column border p-4 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

      {isEmpty ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any books to your cart yet.
          </p>
          <Link
            to="/browse"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Browse Books
          </Link>
        </div>
      ) : (
        <>
          {cartDetails.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between shadow-sm mb-4"
            >
              {/* Book image */}
              <div className="d-flex flex-row rounded-2xl overflow-hidden gap-4">
                <img
                  src={
                    item.book?.coverImage ||
                    item.book?.cover_image_url ||
                    item.book?.coverImageUrl ||
                    "/default-book-cover.png"
                  }
                  alt={item.book?.title}
                  className="cart-image rounded-2xl w-24 h-32 object-cover"
                />
                <div>
                  <Link
                    to={`/books/${item.bookId}`}
                    className="text-lg text-decoration-none font-semibold text-gray-800 hover:text-primary-600"
                  >
                    {item.book?.title}
                  </Link>
                  <p className="text-sm text-gray-500">
                    By {item.book?.author.name}
                  </p>
                  <p className=" text-md font-bold text-gray-900 mt-2">
                    ${(item.book?.price || 0).toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="d-flex flex-row justify-content-end me-4 gap-2 align-items-center">
                <button
                  type="button"
                  onClick={() => saveForLater(item.book.id)}
                  className="btn btn-sm btn-outline-primary px-2 py-0"
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: "1",
                    height: "28px",
                  }}
                >
                  <Heart size={14} className="me-1" />
                  Save for Later
                </button>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.book.id)}
                  className="btn btn-sm btn-danger d-flex align-items-center px-2 py-0"
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: "1",
                    height: "28px",
                  }}
                >
                  <Trash2 size={14} className="me-1" />
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and Clear Cart */}
          <div className="mt-4 d-flex justify-content-between align-items-center border-top pt-3">
            <h4 className="mb-0 text-primary text-lg">
              Total: ${total.toFixed(2)}
            </h4>
            <button
              type="button"
              onClick={clearCart}
              className="btn btn-outline-danger btn-sm"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
      <div className="mt-4 d-flex flex-row justify-content-center align-items-center gap-3">
        <Link
          to="/checkout"
          className="btn btn-primary px-4 py-2"
          style={{ fontSize: "1rem" }}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};
export default CartPage;
