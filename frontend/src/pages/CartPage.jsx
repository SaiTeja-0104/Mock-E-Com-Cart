import React, { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    updateCartItemQty,
    removeFromCart,
    getTotalCost,
  } = useContext(ContextApi);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.productId.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.productId.price} × {item.qty}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateCartItemQty(item._id, item.qty - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateCartItemQty(item._id, item.qty + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <span className="text-xl font-bold">
              Total: ₹{getTotalCost()}
            </span>
            <Link to="/checkout">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
