import "./Navbar.css";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router";

function Navbar({ children }) {
  return (
    <nav className="navbar navbar-expand-sm navbarcss sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          to="/landing"
          className="navbar-brand"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span>
            <IoLibrary style={{ cursor: "pointer" }} />{" "}
            <span className="fw-bold">UniLib</span>
          </span>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="d-flex flex-sm-row flex-column align-items-center w-100">
            {/* Ortadaki butonlar */}
            <div className=" d-flex flex-column flex-sm-row justify-content-center align-items-center gap-1 flex-grow-1">
              {children[0]} {/* Home */}
              {children[1]} {/* My Library */}
              {children[3]} {/* Wishlist */}
            </div>
            {/* Sağdaki buton */}
            <div className="btn btn-primary text-white rounded-3 mt-2 p-0">
              {children[2]} {/* Sign In */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
