import { NavLink } from "react-router-dom";
import "./NavButton.css";

function NavButton({ to, text, callback }) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) => `${isActive ? "active" : "not-active"}`}
      >
        <span onClick={callback}>{text}</span>
      </NavLink>
    </>
  );
}

export default NavButton;
