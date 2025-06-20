import { Link } from "react-router";
import "./NavButton.css";

function NavButton({ to, text }) {
  return (
    <>
      <Link className="btn  btn-sm m-2 " to={to}>
        {text}
      </Link>
    </>
  );
}

export default NavButton;
