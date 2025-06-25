import { Link, useNavigate, useLocation } from "react-router-dom";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { GrReturn } from "react-icons/gr";
import SearchBar from "../../components/searchbar/SearchBar.jsx";

import { useState } from "react";

const My_Library = () => {
  const { store, dispatch } = useGlobalStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");

  const libraryItems = store.library || [];
  const libraryDetails = libraryItems
    .map((item) => {
      const book = store.books.find((b) => b.id === item.id);
      return {
        ...item,
        book,
      };
    })
    .filter((item) => item.book);

  const filteredLibrary = searchText
    ? libraryDetails.filter((item) => {
        const q = searchText.toLowerCase();
        return (
          item.book?.title?.toLowerCase().includes(q) ||
          item.book?.author?.name?.toLowerCase().includes(q) ||
          item.book?.isbn?.toLowerCase().includes(q)
        );
      })
    : libraryDetails;

  const isEmpty = filteredLibrary.length === 0;

  const removeFromLibrary = (bookId) => {
    dispatch({ type: "REMOVE_FROM_LIBRARY", payload: { bookId } });
  };

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
          <Heart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your library is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any books to your library yet.
          </p>
          <Link
            to="/browse"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
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
                <div className="d-flex flex-row rounded-2xl overflow-hidden gap-4 justify-content-center align-items-center">
                  <img
                    src={item.book?.coverImage}
                    alt={item.book?.title}
                    className="cart-image rounded-2xl w-24 h-32 object-cover"
                  />
                  <div>
                    <Link
                      to={`/books/${item.bookId}`}
                      className="text-lg text-decoration-none font-semibold text-gray-800 hover:text-primary-600"
                    >
                      {item.book?.title}
                    </Link>
                    <p className="text-sm mb-0">By {item.book?.author.name}</p>
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
                <p className="text-sm mb-0">{item.checkedOutDate}</p>
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
