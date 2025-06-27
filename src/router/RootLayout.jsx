import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import NavButton from "../components/NavButton.jsx";
import { ShoppingCart } from "lucide-react";
import { isTokenValid } from "../utils/auth.js";
import { useEffect } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore.js";
function RootLayout() {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalStore();
  useEffect(() => {}, [store.auth]);
  const handleLogOut = () => {
    console.log("Logging out...");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar>
        {!isTokenValid() ? (
          <>
            <NavButton to="/home" text="Listings" />
            <NavButton to="/signup" text="Sign Up" />
            <NavButton to="/signin" text="Sign In " />
          </>
        ) : (
          <div className="d-flex">
            <div>
              <NavButton to="/home" text="Home " />
              <NavButton to="/my-library" text="My Library " />
              <NavButton to="/wishlist" text="Wishlist " />
            </div>

            <div className="d-flex  align-items-center ms-auto">
              <NavButton to="/profile" text="Profile " />
              <NavButton to="/cart" icon={<ShoppingCart />} />
              <button
                className="btn btn-sm btn-primary ms-3"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </Navbar>

      <main className="flex-grow-1 app-max-width">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
