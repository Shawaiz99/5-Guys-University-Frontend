import BookListings from "../../components/BookListings.jsx";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, ShoppingCart } from "lucide-react";
import { getAllBooks } from "../../api/books.js";
import { getToken, getDecodedToken, isTokenValid } from "../../utils/auth";
import {
  get_user_by_id,
  removeFromWishlist,
  addToWishlist,
  addToCart,
} from "../../api/user";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const booksPerPage = 8;
  const [wishlistBookIds, setWishlistBookIds] = useState([]);

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

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!isTokenValid()) return;
      const token = getToken();
      const decodedToken = getDecodedToken();
      const userId = parseInt(decodedToken.sub);
      const userData = await get_user_by_id(token, userId);
      const ids = (userData.user?.wishlist_items || []).map(
        (item) => item.book_id
      );
      setWishlistBookIds(ids);
    };
    fetchWishlist();
  }, []);

  const allGenres = Array.isArray(books)
    ? books.map((book) => book.genre).filter(Boolean)
    : [];
  const uniqueGenres = [...new Set(allGenres)];

  const filteredBooks = Array.isArray(books)
    ? books.filter((book) => {
        const q = searchText.toLowerCase();
        return (
          book.title?.toLowerCase().includes(q) ||
          book.author?.name?.toLowerCase().includes(q) ||
          book.isbn?.toLowerCase().includes(q)
        );
      })
    : [];

  const booksToShow = searchText ? filteredBooks : books;
  const paginatedBooks = Array.isArray(booksToShow)
    ? booksToShow.slice(0, visibleCount)
    : [];

  const handleRemoveItem = async (bookId) => {
    try {
      const token = getToken();
      await removeFromWishlist(token, bookId);
      const decodedToken = getDecodedToken();
      const userId = parseInt(decodedToken.sub);
      const userData = await get_user_by_id(token, userId);
      const ids = (userData.user?.wishlist_items || []).map(
        (item) => item.book_id
      );
      setWishlistBookIds(ids);
    } catch (error) {
      alert("Failed to remove from wishlist.");
    }
  };
  const handleWishlistAdded = async () => {
    const token = getToken();
    const decodedToken = getDecodedToken();
    const userId = parseInt(decodedToken.sub);
    const userData = await get_user_by_id(token, userId);
    const ids = (userData.user?.wishlist_items || []).map(
      (item) => item.book_id
    );
    setWishlistBookIds(ids);
  };

  const handleAddToCart = async (bookId) => {
    const token = getToken();
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }
    try {
      await addToCart(token, bookId);
      window.dispatchEvent(new Event("cart-updated"));
      // Optionally, you can show a toast or message on success
      // alert("Added to cart!"); // Optional
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="display-5 fw-bold mt-5">Featured Books</h1>
        </div>
        <SearchBar
          placeholder="Search by title, author, or ISBN..."
          onSearch={setSearchText}
        />
        {/* Error State */}
        {error && (
          <div className="alert alert-warning" role="alert">
            Failed to load listings: {error}
          </div>
        )}
        {/* Loading State */}
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row mb-4">
            <BookListings
              books={paginatedBooks}
              wishlistBookIds={wishlistBookIds}
              onWishlistRemove={handleRemoveItem}
              onWishlistAdded={handleWishlistAdded}
              addToCart={handleAddToCart}
            />
          </div>
        )}

        {visibleCount < booksToShow.length && (
          <div className="text-center mb-4">
            <button
              className="btn btn-primary"
              onClick={() => setVisibleCount((prev) => prev + booksPerPage)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      {/* Browse by Category */}
      <section className="py-5 bg-white">
        <h2 className="h4 fw-bold text-dark mb-4">Browse by Genre</h2>
        <div className="row">
          {uniqueGenres.slice(0, 12).map((genre, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4" key={index}>
              <Link
                to={`/books?genre=${encodeURIComponent(genre)}`}
                className="text-decoration-none"
              >
                <div className="p-3 bg-light rounded border text-center h-100 genre-hover">
                  <BookOpen size={32} className="mb-2 text-primary" />
                  <div className="fw-medium text-dark">{genre}</div>
                  <div className="text-muted small">
                    {books.filter((book) => book.genre === genre).length} books
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
