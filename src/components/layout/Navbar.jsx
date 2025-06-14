import "./Navbar.css";
import { IoLibrary } from "react-icons/io5";

function Navbar({ children }) {
  return (
<nav className="navbar navbar-expand-sm navbarcss sticky-top">
  <div className="container d-flex justify-content-between align-items-center">
    <a className="navbar-brand">
        <span><IoLibrary /> <span className="fw-bold">UniLib</span></span>
    </a>
    <button className="navbar-toggler " 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse " id="navbarNav">
      <div className="d-flex justify-content-center w-100">
        {/* Ortadaki butonlar */}
        <div className="d-flex justify-content-center flex-grow-1">
          {children[0]} {/* Home */}
          {children[1]} {/* Browse */}
        </div>

        {/* Sağdaki buton */}
        <div className="btn btn-primary rounded-3 mt-2 p-0">
          {children[2]} {/* Sign In */}
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
