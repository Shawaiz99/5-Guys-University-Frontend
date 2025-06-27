import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import BookCard from "../../components/BookCard.jsx";
import { Trash2, ShoppingCart, Heart } from "lucide-react";

const BookDetail = () => {
  const { id: bookId } = useParams();
  const { store } = useGlobalStore();
  const book = store.books.find((b) => String(b.id) === String(bookId));

  if (!book) {
    return (
      <div className="container py-5 text-center">
        <h1 className="display-5 mb-3">Book Not Found</h1>
        <p className="text-muted mb-4">
          The book you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/home" className="btn btn-primary">
          Browse All Books
        </Link>
      </div>
    );
  }
  const moreByAuthor = store.books.filter(
    (b) =>
      (b.author?.id || b.author_id) === (book.author?.id || book.author_id) &&
      b.id !== book.id
  );
  const genres = Array.isArray(book.genres)
    ? book.genres
    : typeof book.genres === "string"
    ? book.genres.split(",").map((g) => g.trim())
    : [];

  console.log("book.genres", book && book.genres);

  return (
    <div className="container py-5 animate-fade-in">
      <nav className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/home">Books</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {book.title}
          </li>
        </ol>
      </nav>

      {/* Book details */}
      <div className="row mb-5">
        {/* Book cover */}
        <div className="col-4">
          <div className="bg-white rounded shadow-sm p-3">
            <img
              src={book.coverImage}
              alt={book.title}
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Book info */}
        <div className="col-lg-8">
          <h1 className="display-6">{book.title}</h1>
          <Link
            to={`/authors/${book.author?.id || book.author_id}`}
            className="h5 text-primary text-decoration-none"
          >
            {book.author?.name || book.author}
          </Link>
          <div className="d-flex align-items-center mt-3 mb-4">
            <div className="me-3">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-warning ${
                    i < Math.round(book.rating || 0) ? "" : "opacity-25"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ms-2 text-muted">
                {book.rating ? book.rating.toFixed(1) : "0.0"}/5.0
              </span>
            </div>
            {/* Availability */}
            {book.availability && (
              <span
                className={`badge ms-3 ${
                  book.availability.status === "available"
                    ? "bg-success"
                    : "bg-secondary"
                }`}
              >
                {book.availability.status}
              </span>
            )}
          </div>

          <p className="lead">{book.description}</p>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>ISBN:</strong> {book.isbn}
                </li>
                <li className="list-group-item">
                  <strong>Publisher:</strong> {book.publisher || "-"}
                </li>
                <li className="list-group-item">
                  <strong>Published:</strong> {book.publicationYear}
                </li>
                <li className="list-group-item">
                  <strong>Language:</strong> {book.language || "-"}
                </li>
                <li className="list-group-item">
                  <strong>Pages:</strong> {book.pages || "-"}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      book.availability?.status === "available"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {book.availability?.status || "Unknown"}
                  </span>
                </li>
                <li className="list-group-item">
                  <strong>Copies:</strong> {book.availability?.copies || "-"}
                </li>
                <li className="list-group-item">
                  <strong>Available:</strong>{" "}
                  {book.availability?.availableCopies || "-"}
                </li>
                {book.availability?.dueDate && (
                  <li className="list-group-item">
                    <strong>Due Date:</strong>{" "}
                    {new Date(book.availability.dueDate).toLocaleDateString()}
                  </li>
                )}
                <li className="list-group-item">
                  <strong>Price:</strong> ${book.price?.toFixed(2)}
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Genre</h3>
            <div className="flex flex-wrap gap-2">
              {book.genre && (
                <Link
                  to={`/books?genre=${encodeURIComponent(book.genre)}`}
                  className="badge badge-primary"
                >
                  {book.genre}
                </Link>
              )}
            </div>
          </div>

          <div className="mb-4">
            <button
              className="btn btn-success me-2"
              onClick={() => alert("Added to cart!")}
            >
              <ShoppingCart className="me-1" />
              Add to Cart
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => alert("Added to wishlist!")}
            >
              <Heart className="me-1" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* More by this author */}
      {moreByAuthor.length > 0 && (
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h4 mb-0">
              More by {book.author?.name || book.author}
            </h2>
            <Link
              to={`/authors/${book.author?.id || book.author_id}`}
              className="text-primary"
            >
              View all;
            </Link>
          </div>
          <div className="row">
            {moreByAuthor.slice(0, 4).map((relatedBook) => (
              <div
                className="col-12 col-md-6 col-lg-3 mb-3"
                key={relatedBook.id}
              >
                <BookCard book={relatedBook} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BookDetail;
