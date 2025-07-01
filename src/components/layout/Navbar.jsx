import { Link, NavLink } from "react-router-dom";
import { IoLibrary } from "react-icons/io5";
import { ShoppingCart, User, Heart, Home } from "lucide-react";
import "./Navbar.css";

function Navbar({ isLoggedIn, cartCount, user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-md navbarcss sticky-top">
      <div className="container">
        <Link to="/landing" className="navbar-brand d-flex align-items-center">
          <IoLibrary className="me-2" />
          <span className="fw-bold">UniLib</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/books" className="nav-link">
                    Browse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/wishlist" className="nav-link">
                    <Heart />
                  </NavLink>
                </li>
                <li className="nav-item position-relative">
                  <NavLink to="/cart" className="nav-link">
                    <ShoppingCart />
                    {cartCount > 0 && (
                      <span className="badge bg-danger position-absolute">
                        {cartCount}
                      </span>
                    )}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <User />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="profileDropdown"
                  >
                    <li>
                      <span className="dropdown-item-text fw-bold">
                        {user?.name}
                      </span>
                    </li>
                    <li>
                      <NavLink to="/profile" className="dropdown-item">
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/my-library" className="dropdown-item">
                        My Library
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/order-history" className="dropdown-item">
                        Order History
                      </NavLink>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={onLogout}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signin" className="nav-link">
                    Sign In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
