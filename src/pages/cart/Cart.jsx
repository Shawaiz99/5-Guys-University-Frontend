import { Link } from "react-router-dom";
import { Trash2, ShoppingCart } from "lucide-react";

export default function CartPage({
  cart = [],
  total = 0,
  removeFromCart,
  updateQuantity,
  clearCart,
}) {
  const productsInCartLength = cart.length;

  if (productsInCartLength === 0) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <p>Your cart is empty</p>
        <Link to="/" className="block mt-4 text-blue-500">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Cart items */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.bookId} className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-24 sm:h-32 flex-shrink-0 mb-4 sm:mb-0">
                      <Link to={`/books/${item.bookId}`}>
                        <img
                          src={item.book?.coverImage}
                          alt={item.book?.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </Link>
                    </div>
                    <div className="sm:ml-6 flex-1">
                      <div className="flex justify-between">
                        <div>
                          <Link
                            to={`/books/${item.bookId}`}
                            className="text-lg font-medium text-gray-900 hover:text-primary-600"
                          >
                            {item.book?.title}
                          </Link>
                          <p className="mt-1 text-sm text-gray-600">
                            By {item.book?.author?.name}
                          </p>
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                          ${(item.book?.price || 0).toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <label
                            htmlFor={`quantity-${item.bookId}`}
                            className="sr-only"
                          >
                            Quantity
                          </label>
                          <select
                            id={`quantity-${item.bookId}`}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.bookId,
                                parseInt(e.target.value)
                              )
                            }
                            className="rounded-md border border-gray-300 py-1.5 text-base text-gray-700 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.bookId)}
                          className="text-sm font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-6 py-4 border-t border-gray-200">
              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
        {/* Order summary */}
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Order Summary
            </h2>
            <dl className="space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ${total.toFixed(2)}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ${total.toFixed(2)}
                </dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button className="w-full">Proceed to Checkout</Button>
              <div className="mt-4">
                <Link
                  to="/books"
                  className="text-sm font-medium text-primary-600 hover:text-primary-500 flex items-center justify-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
