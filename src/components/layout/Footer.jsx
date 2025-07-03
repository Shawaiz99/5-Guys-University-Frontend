import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row gy-4">
          {/* Logo and description */}
          <div className="col-12 col-md-4">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 text-decoration-none text-light"
            >
              <FaBookOpen size={32} className="me-2 text-primary" />
              <span className="fs-4 fw-bold">UniLib</span>
            </Link>
            <p className="text-secondary small mt-3">
              Empowering university students and staff with access to knowledge
              and resources for academic success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-semibold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/books"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  to="/authors"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  Authors
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  Advanced Search
                </Link>
              </li>
              <li>
                <Link
                  to="/new-arrivals"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-semibold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/login"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/my-library"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  My Library
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="text-secondary text-decoration-none d-block mb-2 hover-text-light"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-12 col-md-4">
            <h6 className="text-uppercase fw-semibold mb-3">Connect With Us</h6>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2 text-secondary" />
                <a
                  href="mailto:library@university.edu"
                  className="text-secondary text-decoration-none hover-text-light"
                >
                  5guysunilib@university.edu
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase fw-semibold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-secondary fs-5 hover-text-light">
                <FaFacebook />
              </a>
              <a href="#" className="text-secondary fs-5 hover-text-light">
                <FaTwitter />
              </a>
              <a href="#" className="text-secondary fs-5 hover-text-light">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} 5 Guys University Library. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
