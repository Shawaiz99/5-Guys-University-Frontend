import { useState, useEffect } from "react";
import { getCart, clearCart, placeOrder } from "../../api/user";
import { getToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { getBookById } from "../../api/books";
import { triggerCartUpdate } from "../cart/Cart";

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [fetchedBooks, setFetchedBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [form, setForm] = useState({
    address_line: "",
    city: "",
    state: "",
    zipcode: "",
    card_number: "",
    card_cvv: "",
    card_exp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartAndBooks = async () => {
      const token = getToken();
      if (!token) return console.error("Token not found", token);
      const cart = await getCart(token);
      setCartItems(cart.items || []);

      const books = await Promise.all(
        (cart.items || []).map(async (item) => {
          const result = await getBookById(item.book_id);
          return result.book;
        })
      );
      setFetchedBooks(books);
    };
    fetchCartAndBooks();
  }, []);

  useEffect(() => {
    if (success) {
      triggerCartUpdate();
      const timer = setTimeout(() => {
        navigate("/my-library");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  const cartDetails = cartItems
    .map((item) => {
      const book = fetchedBooks.find((b) => b.id === item.book_id);
      return {
        ...item,
        book,
      };
    })
    .filter((item) => item.book);

  const isEmpty = cartDetails.length === 0;
  const totalPrice = cartDetails.reduce(
    (sum, item) => sum + (item.book?.price || 0),
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const token = getToken();
      const card_last4 = form.card_number.slice(-4);
      const items = cartDetails.map((item) => ({
        book_id: item.book_id || item.id,
        quantity: 1,
        price: item.book?.price || 0,
      }));

      await placeOrder(token, {
        address_line: form.address_line,
        city: form.city,
        state: form.state,
        zipcode: form.zipcode,
        card_last4,
        total_price: totalPrice,
        items,
      });

      setSuccess(true);
      await clearCart(token);
      triggerCartUpdate();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="py-5 text-center">
        <h2>Order Successful!</h2>
        <p>Your order has been placed. Redirecting to your library...</p>
      </div>
    );
  }

  return (
    <div className="py-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        {/* Cart Summary */}
        <div className="col-md-6 mb-4">
          <h4>Your Cart</h4>
          {isEmpty ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-group mb-3">
              {cartDetails.map((item, idx) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={item.book_id || item.id || idx}
                >
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={
                        item.book?.coverImage ||
                        item.book?.cover_image_url ||
                        item.book?.coverImageUrl ||
                        "/default-book-cover.png"
                      }
                      alt={item.book?.title}
                      style={{
                        width: "40px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    />
                    <span>{item.book?.title}</span>
                  </div>
                  <span>${(item.book?.price || 0).toFixed(2)}</span>
                </li>
              ))}
              <li
                className="list-group-item d-flex justify-content-between fw-bold"
                key="total"
              >
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </li>
            </ul>
          )}
        </div>
        {/* Checkout Form */}
        <div className="col-md-6">
          <h4>Shipping & Payment</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address_line"
                className="form-control"
                value={form.address_line}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Zipcode</label>
              <input
                type="text"
                name="zipcode"
                className="form-control"
                value={form.zipcode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                name="card_number"
                className="form-control"
                value={form.card_number}
                onChange={handleChange}
                required
                minLength={4}
                maxLength={19}
                pattern="\d{4,19}"
                placeholder="Card Number"
              />
              <div className="form-text">
                Only the last 4 digits will be stored.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">CVV</label>
              <input
                type="password"
                name="card_cvv"
                className="form-control"
                value={form.card_cvv}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={4}
                pattern="\d{3,4}"
                placeholder="CVV"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Expiration Date</label>
              <input
                type="text"
                name="card_exp"
                className="form-control"
                value={form.card_exp}
                onChange={handleChange}
                required
                pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                placeholder="MM/YY"
                autoComplete="off"
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || isEmpty}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
