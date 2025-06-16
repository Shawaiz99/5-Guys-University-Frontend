import { Link } from 'react-router';
import { useGlobalStore } from "../hooks/useGlobalStore";

function BookCard({ book }) {

  const { store } = useGlobalStore();
  const author = store.authors.find((a) => a.id === book.author_id);

  return (
    <Link to={`/books/${book.id}`} className="text-decoration-none">
        <div className="card shadow-sm">
            <img src={book.cover_image_url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>    
                <p className="card-text my-1 text-muted">by {author ? `${author.name}` : "Unknown"}</p>
                <p className="card-text my-1">{book.genre}</p>
                <p className="card-text mb-0 bg-primary p-1 w-50 text-center rounded opacity-75  fw-medium text-bg-info">{book.price}</p>
            </div>
        </div>
    </Link>
  )
}

export default BookCard
