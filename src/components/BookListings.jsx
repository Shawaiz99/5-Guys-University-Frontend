import BookCard from "./BookCard.jsx";

function BookListings({ books }) {
  return (
    <div className="container">
      <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {books.map((book) => (
          <div key={book.id} className="col">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookListings
