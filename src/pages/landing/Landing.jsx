import Hero from "../../components/hero/Hero.jsx";
import { useGlobalStore } from "../../hooks/useGlobalStore.js";
import BookListings from "../../components/BookListings.jsx";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import "./Landing.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBooks } from "../../api/books";
import { Link } from "react-router-dom";
import { getToken } from "../../utils/auth";

function Landing() {
  const { store, dispatch } = useGlobalStore();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isLoggedIn = !!getToken();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const booksData = await getAllBooks();
        setBooks(Array.isArray(booksData) ? booksData : booksData.books || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const q = searchText.toLowerCase();
    return (
      book.title?.toLowerCase().includes(q) ||
      book.author?.name?.toLowerCase().includes(q) ||
      book.isbn?.toLowerCase().includes(q)
    );
  });

  const allGenres = Array.isArray(books)
    ? books.map((book) => book.genre).filter(Boolean)
    : [];
  const uniqueGenres = [...new Set(allGenres)];

  return (
    <div className="container-fluid p-0">
      <div className="row">
        <Hero isLoggedIn={isLoggedIn} />
      </div>
      <div className="container">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="display-5 fw-bold  mt-5">Featured Books</h1>
          <Link
            to="/home"
            className="text-decoration-none text-body-primary mt-5"
          >
            View All
          </Link>
        </div>
        <SearchBar
          placeholder="Search by title, author, or ISBN..."
          onSearch={setSearchText}
        />
        <div className="col-11 mx-auto mb-4">
          <BookListings
            books={searchText ? filteredBooks.slice(0, 4) : books.slice(0, 4)}
          />
        </div>

        {/* Browse by Category */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="h4 fw-bold text-dark mb-4">Browse by Genre</h2>
            <div className="row">
              {uniqueGenres.slice(0, 12).map((genre, index) => (
                <div
                  className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
                  key={index}
                >
                  <Link
                    to={`/books?genre=${encodeURIComponent(genre)}`}
                    className="text-decoration-none"
                  >
                    <div className="p-3 bg-light rounded border text-center h-100 genre-hover">
                      <div className="fw-medium text-dark">{genre}</div>
                      <div className="text-muted small">
                        {books.filter((book) => book.genre === genre).length}{" "}
                        books
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {!isLoggedIn && (
        <div className="text-center bg-body-secondary py-5">
          <h1>Ready to Get Started?</h1>
          <p>
            Create an account today and access all the resources our library has
            to offer.
          </p>
          <button
            className="btn btn-primary py-2"
            onClick={() => navigate("/signup")}
          >
            Sign Up Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Landing;
