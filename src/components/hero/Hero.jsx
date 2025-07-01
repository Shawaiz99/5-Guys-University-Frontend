// jumbotron
import "./Hero.css";

function Hero({ isLoggedIn }) {
  return (
    <div className="jumbotron jumbotron-fluid position-relative">
      <div className="hero-overlay text-center position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center">
        <h1 className="display-4 fw-bold ms-4 opacity-75">
          Discover Your Next Great Read
        </h1>
        <p className="my-4 fw-bold ms-4 opacity-75">
          Access thousands of books from your university library, anytime and
          anywhere.
        </p>
        <div className="d-flex justify-content-center mt-4 ms-4 gap-2">
          <a className="btn btn-light btn-lg p-2" href="/home" role="button">
            Browse Collection
          </a>
          {!isLoggedIn && (
            <a
              className="btn btn-outline-light btn-lg transparent p-2"
              href="/signin"
              role="button"
            >
              Sign In
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
