import { useEffect, useState } from "react";
import { getToken } from "../../utils/auth";
import { getOrders } from "../../api/user";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openOrderId, setOpenOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = getToken();
      if (!token) return;
      try {
        const data = await getOrders(token);
        setOrders(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading order history...</div>;
  }

  if (!orders.length) {
    return (
      <div className="text-center py-5">
        <h2>No orders found</h2>
        <p>You haven't placed any orders yet.</p>
        <Link to="/books" className="btn btn-primary mt-3">
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="mb-4">Order History</h1>
      <ul className="list-group">
        {orders.map((order) => (
          <li key={order.id} className="list-group-item mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>Order Date:</strong>{" "}
                {new Date(order.created_at).toLocaleDateString()}
                <br />
                <strong>Order ID:</strong> {order.id}
              </div>
              <button
                className="btn btn-outline-primary"
                onClick={() =>
                  setOpenOrderId(openOrderId === order.id ? null : order.id)
                }
              >
                {openOrderId === order.id ? "Close" : "Show Details"}
              </button>
            </div>
            {openOrderId === order.id && (
              <div className="mt-3">
                <div className="mb-2">
                  <strong>Address:</strong>
                  <div>
                    {order.address_line}, {order.city}, {order.state}{" "}
                    {order.zipcode}
                  </div>
                  <div>
                    <strong>Card (last 4):</strong> **** **** ****{" "}
                    {order.card_last4}
                  </div>
                  <div>
                    <strong>Status:</strong> {order.status}
                  </div>
                  <div>
                    <strong>Total Price:</strong> ${order.total_price}
                  </div>
                </div>
                <strong>Books:</strong>
                <ul>
                  {order.books?.map((book) => (
                    <li
                      key={book.id}
                      className="d-flex align-items-center gap-2 mb-2"
                    >
                      <img
                        src={book.cover_image}
                        alt={book.title}
                        style={{
                          width: 48,
                          height: 64,
                          objectFit: "cover",
                          borderRadius: 4,
                        }}
                      />
                      <Link to={`/books/${book.id}`} className="ms-2">
                        {book.title}
                      </Link>
                      <span className="text-muted ms-2">
                        {typeof book.author === "object"
                          ? book.author?.name
                          : book.author}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
