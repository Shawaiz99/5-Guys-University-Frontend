import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import NavButton from "../components/NavButton.jsx";
import { ShoppingCart } from "lucide-react";

function RootLayout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar className="d-flex flex-row justify-content-between align-items-center">
        <NavButton to="/home" text="Home " />
        <NavButton to="/my-library" text="My Library " />
        <NavButton to="/wishlist" text="Wishlist " />
        <NavButton to="/cart" icon={<ShoppingCart />} />
        <NavButton to="/signin" text="Sign In " />
        <NavButton to="/signup" text="Sign Up " />
      </Navbar>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
