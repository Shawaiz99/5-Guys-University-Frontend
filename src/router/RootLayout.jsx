import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { useEffect, useState } from "react";
import { useGlobalStore } from "../hooks/useGlobalStore.js";
import { getCart } from "../api/user";
import { isTokenValid, getToken } from "../utils/auth.js";

function RootLayout() {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalStore();
  const [cartCount, setCartCount] = useState(0);

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
  }, [store.auth]);

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("reState_token");
    navigate("/signin");
  };

  const currentUser = store.auth?.user || {
    name: "User",
    email: "user@example.com",
    avatar: null,
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar
        isLoggedIn={isTokenValid()}
        cartCount={cartCount}
        user={currentUser}
        onLogout={handleLogOut}
      />
      <main className="flex-grow-1 app-max-width">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
