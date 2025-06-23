import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import NavButton from "../components/NavButton.jsx";
import { ShoppingCart } from "lucide-react";

function RootLayout() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar className="d-flex flex-row justify-content-between align-items-center">
        <NavButton to="/" text="Home " />
        <NavButton to="/my-library" text="My Library " />
        <NavButton to="/signin" text="Sign In " />
        <NavButton to="/wishlist" text="Wishlist " />
        <NavButton to="/cart" icon={<ShoppingCart />} />
      </Navbar>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
