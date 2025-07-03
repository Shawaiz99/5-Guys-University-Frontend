import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BookListings from "../../components/BookListings.jsx";
import { getAllBooks } from "../../api/books";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import { getToken, getDecodedToken, isTokenValid } from "../../utils/auth";
import {
  get_user_by_id,
  removeFromWishlist,
  addToWishlist,
  addToCart,
} from "../../api/user";

function BooksPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genre = params.get("genre");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [wishlistBookIds, setWishlistBookIds] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const booksData = await getAllBooks();
        setBooks(Array.isArray(booksData) ? booksData : booksData.books || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  // Fetch wishlist
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

  const filteredBooks = books.filter((b) => {
    const matchesGenre = genre ? b.genre === genre : true;
    const authorName =
      typeof b.author === "object"
        ? b.author?.name || ""
        : typeof b.author === "string"
        ? b.author
        : "";
    const matchesSearch = searchText
      ? b.title.toLowerCase().includes(searchText.toLowerCase()) ||
        authorName.toLowerCase().includes(searchText.toLowerCase())
      : true;
    return matchesGenre && matchesSearch;
  });

  // Remove from wishlist
  const handleRemoveItem = async (bookId) => {
    try {
      const token = getToken();
      await removeFromWishlist(token, bookId);
      // Refresh wishlist
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

  // Add to wishlist
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

  // Add to cart
  const handleAddToCart = async (bookId) => {
    const token = getToken();
    if (!token) {
      alert("Please log in to add items to your cart.");
      return;
    }
    try {
      await addToCart(token, bookId);
      window.dispatchEvent(new Event("cart-updated"));
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <div className="container py-4 text-center">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">Failed to load books: {error}</div>
      </div>
    );
  }

  return (
    <div className=" py-4">
      <div className="container py-4 flex-column">
        <h1 className="mb-4">{genre ? `Genre: ${genre}` : "All Books"}</h1>
        <SearchBar placeholder="Search books..." onSearch={setSearchText} />
        <BookListings
          books={filteredBooks}
          wishlistBookIds={wishlistBookIds}
          onWishlistRemove={handleRemoveItem}
          onWishlistAdded={handleWishlistAdded}
          addToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default BooksPage;
