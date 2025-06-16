// jumbotron 
import './Hero.css';

function Hero() {
  return (
    <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4 fw-bold ms-4 opacity-75">Discover Your Next Great Read</h1>
        <p className="my-4 fw-bold ms-4 opacity-75">Access thousands of books from your university library, anytime and anywhere.</p>
        <div className="d-flex justify-content-center mt-4 ms-4 gap-2">
            <a className="btn btn-light btn-lg p-2" href="/browse" role="button">Browse Collection</a>
            <a className="btn btn-outline-light btn-lg transparent p-2" href="#" role="button">Sign In</a>
        </div>
    </div>
  )
}

export default Hero

