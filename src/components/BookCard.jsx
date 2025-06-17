import { Link } from "react-router";
import "./BookCard.css";
import { useGlobalStore } from "../hooks/useGlobalStore";

function BookCard({ book }) {
  const { store } = useGlobalStore();
  const author = store.authors.find((a) => a.id === book.author_id);
  const formatPriceUS = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(book.price);

  return (
    <Link to={`/books/${book.id}`} className="text-decoration-none">
      <div className="card shadow-sm book-card">
        <img
          src={book.coverImage}
          className="card-img-top book-card-img"
          alt="..."
        />
        <div className="card-body book-card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text my-1 text-muted">
            by {book.author && book.author.name ? book.author.name : "Unknown"}
          </p>
          <p className="card-text my-1 ">
            {book.genres.length >= 2
              ? `${book.genres[0]} | ${book.genres[2]}`
              : book.genres[0]}
          </p>
          <p className="card-text mb-0 bg-primary p-1 w-50 text-center rounded opacity-75 fw-medium text-bg-info mt-auto">
            {formatPriceUS}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
