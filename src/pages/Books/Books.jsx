import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BookListings from "../../components/BookListings.jsx";
import { getAllBooks } from "../../api/books";
import SearchBar from "../../components/searchbar/SearchBar.jsx";

function BooksPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genre = params.get("genre");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

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
        <BookListings books={filteredBooks} />
    </div>
    </div>
  );
}

export default BooksPage;
