import Hero from "../../components/hero/Hero.jsx";
import { useGlobalStore } from "../../hooks/useGlobalStore.js";
import BookListings from "../../components/BookListings.jsx";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import "./Landing.css";
import { useState } from "react";
import { useNavigate } from "react-router";


function Landing() {
  const { store, dispatch } = useGlobalStore();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const filteredBooks = store.books.filter((book) => {
    const q = searchText.toLowerCase();
    return (
      book.title?.toLowerCase().includes(q) ||
      book.author?.name?.toLowerCase().includes(q) ||
      book.isbn?.toLowerCase().includes(q)
    );
  });
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <Hero />
      </div>
      <div className="container">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="display-5 fw-bold  mt-5">Featured Books</h1>
          <a
            href="/browse"
            className="text-decoration-none text-body-primary mt-5"
          >
            View All
          </a>
        </div>
        <SearchBar
          placeholder="Search by title, author, or ISBN..."
          onSearch={setSearchText}
        />
        <div className="row mb-4">
          <BookListings
            books={
              searchText ? filteredBooks.slice(0, 4) : store.books.slice(0, 4)
            }
          />
        </div>
      </div>
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
    </div>
  );
}

export default Landing;
