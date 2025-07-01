import { Link, useNavigate, useLocation } from "react-router-dom";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { GrReturn } from "react-icons/gr";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import { useEffect, useState } from "react";
import { getLibrary } from "../../api/user";
import { getToken } from "../../utils/auth";

const My_Library = () => {
  const { store, dispatch } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const [libraryItems, setLibraryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibrary = async () => {
      const token = getToken();
      if (!token) return;
      try {
        const data = await getLibrary(token);
        setLibraryItems(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    };
    fetchLibrary();
  }, []);

  const libraryDetails = libraryItems.map((item) => ({
    ...item,
    checkedOutDate: item.created_at,
    dueDate: "",
    book: {
      id: item.book?.id,
      title: item.book?.title,
      author: item.book?.author,
      price: item.book?.price,
      coverImage: item.book?.cover_image_url,
      isbn: item.book?.isbn,
    },
  }));

  const filteredLibrary = searchText
    ? libraryDetails.filter((item) => {
        const q = searchText.toLowerCase();
        const author = item.book?.author;
        const authorName =
          typeof author === "object"
            ? author?.name?.toLowerCase()
            : typeof author === "string"
            ? author.toLowerCase()
            : "";
        return (
          item.book?.title?.toLowerCase().includes(q) ||
          authorName.includes(q) ||
          item.book?.isbn?.toLowerCase().includes(q)
        );
      })
    : libraryDetails;

  const isEmpty = filteredLibrary.length === 0;

  const removeFromLibrary = (bookId) => {
    dispatch({ type: "REMOVE_FROM_LIBRARY", payload: { bookId } });
  };
  console.log("Library Items:", libraryItems);

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  return (
    <div className="d-flex flex-column border p-4 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Your Library</h1>
      {/* Search Bar */}
      <div className="mb-4">
        <SearchBar
          placeholder="Search your library by title, author, or ISBN..."
          onSearch={setSearchText}
        />
      </div>

      {isEmpty ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your library is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any books to your library yet.
          </p>
          <Link to="/books" className="btn btn-primary">
            Browse Books
          </Link>
        </div>
      ) : (
        <>
          {/* Header Row */}
          <div
            className="d-flex justify-content-between align-items-center px-2 py-2 border-bottom mb-2"
            style={{ fontWeight: 600 }}
          >
            <div className="text-center" style={{ minWidth: 220 }}>
              Books
            </div>
            <div className="text-center" style={{ minWidth: 120 }}>
              Checked Out
            </div>
            <div className="text-center" style={{ minWidth: 120 }}>
              Due Date
            </div>
            <div className="text-center" style={{ minWidth: 120 }}>
              Action
            </div>
          </div>
          {filteredLibrary.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center shadow-sm rounded-1 mb-4 mt-2 py-2"
            >
              {/* Book image and info */}
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minWidth: 220 }}
              >
                <div
                  className="d-flex flex-row rounded-2xl overflow-hidden gap-4 justify-content-center align-items-center"
                  style={{ maxWidth: 260 }}
                >
                  <img
                    src={item.book?.coverImage}
                    alt={item.book?.title}
                    className="cart-image rounded-2xl w-24 h-32 object-cover"
                  />
                  <div style={{ maxWidth: 140, textAlign: "left" }}>
                    <Link
                      to={`/books/${item.book.id}`}
                      className="text-lg text-decoration-none font-semibold text-gray-800 hover:text-primary-600"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        wordBreak: "break-word",
                      }}
                      title={item.book?.title}
                    >
                      {item.book?.title}
                    </Link>
                    <p
                      className="text-sm mb-0"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {(() => {
                        const author = item.book?.author;
                        if (
                          !author ||
                          (typeof author === "string" && author.trim() === "")
                        ) {
                          return null;
                        }
                        if (typeof author === "object" && author.name) {
                          return `By ${author.name}`;
                        }
                        if (typeof author === "string") {
                          return `By ${author}`;
                        }
                        return null;
                      })()}
                    </p>
                    <p className="text-md font-bold mt-2 mb-0">
                      ${(item.book?.price || 0).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              {/* Checked Out Date */}
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minWidth: 120 }}
              >
                <p className="text-sm mb-0">
                  {formatDate(item.checkedOutDate)}
                </p>
              </div>
              {/* Due Date */}
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minWidth: 120 }}
              >
                <p className="text-sm mb-0">{item.dueDate}</p>
              </div>
              {/* Action */}
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{ minWidth: 120 }}
              >
                <button
                  type="button"
                  onClick={() => console.log("save for later", item.bookId)}
                  className="btn btn-sm btn-outline-primary px-2 py-0 d-flex align-items-center justify-content-center"
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: "1",
                    height: "28px",
                    minWidth: "80px",
                  }}
                >
                  <GrReturn size={14} className="me-1" />
                  Return
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default My_Library;
