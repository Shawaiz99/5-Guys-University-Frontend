import "./Navbar.css";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import { useEffect, useState } from "react";
import { getCart } from "../../api/user";
import { getToken } from "../../utils/auth";

function Navbar({ children }) {
  const { store } = useGlobalStore();
  const [cartCount, setCartCount] = useState(0);

  const childrenArray = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const fetchCartCount = async () => {
      const token = getToken();
      if (!token) return;
      try {
        const cartData = await getCart(token);
        setCartCount(cartData.items ? cartData.items.length : 0);
      } catch {
        setCartCount(0);
      }
    };
    fetchCartCount();

    const handler = () => fetchCartCount();
    window.addEventListener("cart-updated", handler);
    return () => window.removeEventListener("cart-updated", handler);
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbarcss sticky-top ">
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
            <div className=" d-flex flex-column flex-sm-row justify-content-end  align-items-center gap-1 flex-grow-1">
              {childrenArray}
              <div className="text-white rounded-3 mt-2 position-relative">
                <Link
                  to="/cart"
                  className="me-2 block mt-4 fs-2 position-relative"
                >
                  <ShoppingCart />
                  {cartCount > 0 && <span className="badge">{cartCount}</span>}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
