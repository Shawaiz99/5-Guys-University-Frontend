import { Link } from "react-router-dom";
import "./BookCard.css";
import { useGlobalStore } from "../hooks/useGlobalStore";
import { Heart, ShoppingCart } from "lucide-react";
import { addToWishlist, removeFromWishlist, addToCart } from "../api/user";
import { getToken, getDecodedToken, isTokenValid } from "../utils/auth";

function BookCard({
  book,
  location,
  addToCart,
  showWishlistButton = true,
  onWishlistAdded,
  onWishlistRemove,
  isWishlisted = false,
}) {
  const { store } = useGlobalStore();
  const author = store.authors.find((a) => a.id === book.author_id);
  const formatPriceUS = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(book.price);

  const handleWishlistClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isTokenValid()) {
      alert("Please log in to manage wishlist");
      return;
    }
    const token = getToken();
    const decodedToken = getDecodedToken();
    const userId = parseInt(decodedToken.sub);

    try {
      if (isWishlisted) {
        if (onWishlistRemove) {
          await onWishlistRemove(book.id);
        }
        if (onWishlistAdded) onWishlistAdded();
      } else {
        await addToWishlist(token, book.id);
        if (onWishlistAdded) onWishlistAdded();
      }
    } catch (error) {
      alert("Wishlist operation failed.");
    }
  };

  return (
    <div className="card shadow-sm book-card">
      <Link to={`/books/${book.id}`} className="text-decoration-none">
        <div>
          <img
            src={book.cover_image_url || "/default-book-cover.png"}
            className="card-img-top book-card-img"
            alt={book.title}
          />
        </div>
        <div>
          {showWishlistButton && (
            <button
              className="bg-white p-2 position-absolute top-0 end-0 m-2 rounded-circle shadow border-0"
              style={{ zIndex: 2 }}
              onClick={handleWishlistClick}
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              type="button"
            >
              <Heart
                className="h-5 w-5 text-danger"
                fill={isWishlisted ? "red" : "#fff"}
              />
            </button>
          )}
        </div>
        <div className="card-body book-card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text my-1 text-muted">
            by {book.author && book.author.name ? book.author.name : "Unknown"}
          </p>
          <p className="card-text my-1 ">{book.genre}</p>
        </div>
      </Link>

      <div
        className="d-flex justify-content-between align-items-center p-2 mb-2 mt-auto"
        style={{ borderTop: "1px solid #eee" }}
      >
        <p className="card-text font-semibold p-1 text-center fw-medium mb-0">
          {formatPriceUS}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => addToCart && addToCart(book.id)}
        >
          <ShoppingCart className="h-4 w-4 me-2" />
          Add
        </button>
      </div>
    </div>
  );
}

export default BookCard;
