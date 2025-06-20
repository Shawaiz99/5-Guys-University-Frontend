import { Link } from "react-router-dom";
import "./BookCard.css";
import { useGlobalStore } from "../hooks/useGlobalStore";
import { Heart, Trash2, ShoppingCart } from "lucide-react";

function BookCard({ book, location, addToCart, removeFromWishlist }) {
  const { store } = useGlobalStore();
  const author = store.authors.find((a) => a.id === book.author_id);
  const formatPriceUS = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(book.price);

  return (
    <div className="card shadow-sm book-card">
      <Link to={`/books/${book.id}`} className="text-decoration-none">
        <div>
          <img
            src={book.coverImage}
            className="card-img-top book-card-img"
            alt={book.title}
          />
        </div>
        <div>
          <button
            className="bg-white p-2 position-absolute top-0 end-0 m-2 rounded-circle shadow"
            style={{ zIndex: 2 }}
            onClick={() => removeFromWishlist(book.id)}
            aria-label="Remove from wishlist"
          >
            <Heart
              className="h-5 w-5 text-danger"
              fill={location === "/wishlist" ? "red" : "#fff"}
            />
          </button>
        </div>
        <div className="card-body book-card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text my-1 text-muted">
            by {book.author && book.author.name ? book.author.name : "Unknown"}
          </p>
          <p className="card-text my-1 ">
            {book.genres.length >= 2
              ? `${book.genres[0]} | ${book.genres[1]}`
              : book.genres[0]}
          </p>
        </div>
      </Link>

      <div
        className="d-flex justify-content-between align-items-center p-2 mb-2 mt-auto"
        style={{ borderTop: "1px solid #eee" }}
      >
        <p className="card-text font-semibold p-1 text-center fw-medium mb-0">
          {formatPriceUS}
        </p>
        <button className="btn btn-primary" onClick={() => addToCart(book.id)}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add
        </button>
      </div>
    </div>
  );
}

export default BookCard;
