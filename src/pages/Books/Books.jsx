import { useLocation } from "react-router-dom";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import BookListings from "../../components/BookListings.jsx";

function BooksPage() {
  const { store } = useGlobalStore();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genre = params.get("genre");

  const filteredBooks = genre
    ? store.books.filter((b) => b.genre === genre)
    : store.books;

  return (
    <div className="container py-4">
      <h1 className="mb-4">{genre ? `Genre: ${genre}` : "All Books"}</h1>
      <BookListings books={filteredBooks} />
    </div>
  );
}

export default BooksPage;
