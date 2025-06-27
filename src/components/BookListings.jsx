import BookCard from "./BookCard.jsx";

function BookListings({
  books,
  wishlistBookIds = [],
  onWishlistRemove,
  onWishlistAdded,
  addToCart,
}) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {books.map((book) => (
        <div key={book.id} className="col d-flex justify-content-start">
          <BookCard
            book={book}
            isWishlisted={wishlistBookIds.includes(book.id)}
            onWishlistRemove={onWishlistRemove}
            onWishlistAdded={onWishlistAdded}
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
}

export default BookListings;
