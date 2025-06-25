import "./Navbar.css";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useGlobalStore } from "../../hooks/useGlobalStore";

function Navbar({ children }) {
  const { store } = useGlobalStore();
  const cartCount = store.cart?.length || 0;

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
            <div className=" d-flex flex-column flex-sm-row justify-content-center align-items-center gap-1 flex-grow-1">
              {children[0]} {/* Home */}
              {children[1]} {/* My Library */}
              {children[2]} {/* Wishlist */}
            </div>
            <div className="text-white rounded-3 mt-2 position-relative">
              <Link
                to="/cart"
                className="me-2 block mt-4 fs-2 position-relative"
              >
                <ShoppingCart />
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>
              <span className="btn btn-sm btn-primary ms-2">
                {children[4]} {/* Sign In */}
              </span>
              <span className="btn btn-sm btn-outline-secondary ms-2">
                {children[5]} {/* Sign Up */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
