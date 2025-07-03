import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookCard from "../../components/BookCard.jsx";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { getBookById, getAllBooks } from "../../api/books";
import { addToCart, addToWishlist } from "../../api/user";
import { getToken, isTokenValid } from "../../utils/auth";

const BookDetail = () => {
  const { id: bookId } = useParams();
  const [book, setBook] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const data = await getBookById(bookId);
        setBook(data.book);
      } catch {
        setBook(null);
      } finally {
        setLoading(false);
      }
    };
    const fetchAllBooks = async () => {
      try {
        const books = await getAllBooks();
        setAllBooks(Array.isArray(books) ? books : books.books || []);
      } catch {
        setAllBooks([]);
      }
    };
    fetchBook();
    fetchAllBooks();
  }, [bookId]);
  console.log("Book Detail:", book);
  if (!book) {
    return <div>Book is null or undefined!</div>;
  }

  if (book) {
    Object.keys(book).forEach((key) => {
      console.log(key, book[key]);
    });
  }

  const moreByAuthor = allBooks.filter(
    (b) =>
      (b.author?.id || b.author_id) === (book.author?.id || book.author_id) &&
      b.id !== book.id
  );

  const genres = Array.isArray(book.genres)
    ? book.genres
    : typeof book.genres === "string"
    ? book.genres.split(",").map((g) => g.trim())
    : [];

  const handleAddToCart = async () => {
    const token = getToken();
    if (!token || !isTokenValid(token)) {
      alert("Please sign in to add items to your cart.");
      return;
    }
    try {
      await addToCart(token, book.id);
      window.dispatchEvent(new Event("cart-updated"));
    } catch (e) {
      alert("It is already in your cart.");
    }
  };

  const handleAddToWishlist = async () => {
    const token = getToken();
    if (!token || !isTokenValid(token)) {
      alert("Please sign in to add items to your wishlist.");
      return;
    }
    try {
      await addToWishlist(token, book.id);
    } catch (e) {
      alert("It is already in your wishlist.");
    }
  };

  return (
    <div className=" py-5 animate-fade-in">
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
              src={book.cover_image_url || ""}
              alt={book.title || ""}
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
            {book.author?.name || ""}
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

            <span
              className={`badge ms-3 ${
                book.availabilaty_status === "Available"
                  ? "bg-success"
                  : "bg-secondary"
              }`}
            >
              {book.availabilaty_status}
            </span>
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
                  <strong>Published:</strong> {book.publication_year}
                </li>

                <li className="list-group-item">
                  <strong>Pages:</strong> {book.pages || "-"}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Status:</strong> {book.availabilaty_status}
                </li>
                <li className="list-group-item">
                  <strong>Copies:</strong> {book.quantity}
                </li>
                <li className="list-group-item">
                  <strong>Price:</strong>{" "}
                  {book.price !== null && book.price !== undefined
                    ? `$${Number(book.price).toFixed(2)}`
                    : "-"}
                </li>
                <li className="list-group-item">
                  <strong>Genre:</strong> {book.genre}
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <button className="btn btn-success me-2" onClick={handleAddToCart}>
              <ShoppingCart className="me-1" />
              Add to Cart
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={handleAddToWishlist}
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
              to={`/books`}
              className="btn btn-light btn-sm bg-primary text-white p-2"
            >
              View All
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
