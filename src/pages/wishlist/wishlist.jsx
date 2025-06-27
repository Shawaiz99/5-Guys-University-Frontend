import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getToken, getDecodedToken, isTokenValid } from "../../utils/auth";
import { get_user_by_id } from "../../api/user";
import { getAllBooks } from "../../api/books";
import BookCard from "../../components/BookCard";

function WishlistPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Wishlist'i API'den çek
  const fetchWishlist = async () => {
    try {
      if (!isTokenValid()) {
        navigate("/login");
        return;
      }
      setLoading(true);
      const token = getToken();
      const decodedToken = getDecodedToken();
      const userId = parseInt(decodedToken.sub);

      // Kullanıcı verisini çek (wishlist_items: [{book_id, user_id}, ...])
      const userData = await get_user_by_id(token, userId);
      console.log("userData.user:", userData.user);
      console.log(
        "userData.user.wishlist_items:",
        userData.user?.wishlist_items
      );

      const wishlistBookIds = (userData.user?.wishlist_items || []).map(
        (item) => item.book_id
      );

      console.log("wishlistBookIds:", wishlistBookIds);

      const booksData = await getAllBooks();
      const books = Array.isArray(booksData)
        ? booksData
        : booksData.books || [];

      console.log("books:", books);

      // Wishlistteki kitapların detaylarını bul
      const wishlistDetails = books.filter((book) =>
        wishlistBookIds.map(String).includes(String(book.id))
      );

      setWishlistItems(wishlistDetails);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
    // eslint-disable-next-line
  }, [navigate]);

  // Wishlist'ten kitap sil
  const handleRemoveItem = async (bookId) => {
    try {
      const token = getToken();
      const decodedToken = getDecodedToken();
      const userId = parseInt(decodedToken.sub);

      // Sadece bookId yeterli olabilir, backend endpointine göre userId de gerekirse ekle
      await import("../../api/user").then(({ removeFromWishlist }) =>
        removeFromWishlist(token, bookId)
      );

      // API'den tekrar çekmek daha güvenli
      fetchWishlist();
    } catch (error) {
      alert("Failed to remove from wishlist.");
    }
  };
  console.log("Wishlist Items:", wishlistItems);
  if (loading) {
    return (
      <div className="container py-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4">
        <h2>Error Loading Wishlist</h2>
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-3 fw-bold">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-5">
          <div className="alert alert-info">Your wishlist is empty</div>
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            Browse Books
          </button>
        </div>
      ) : (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 mt-3">
          {wishlistItems.map((book) => (
            <div className="col" key={book.id}>
              <BookCard
                book={book}
                isWishlisted={true}
                onWishlistAdded={fetchWishlist}
                onWishlistRemove={handleRemoveItem}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
