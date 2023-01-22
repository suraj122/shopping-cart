import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, setCartItems }) {
  // Calculates Total Price of the cart
  let totalPrice = 0;
  if (cart.length !== 0) {
    cart.forEach((item) => (totalPrice += item.price * item.count));
  }

  // Delete an item from the cart
  const handleDelete = (i) => {
    cart.splice(i, 1);
    setCartItems([...cart]);
  };

  // Removes all the item from the cart.
  const clearCart = () => {
    cart.splice(0, cart.length);
    setCartItems([...cart]);
  };

  // Increases the quantity of an item
  const increaseItemCount = (item) => {
    if (item.count < 20) {
      item.count = item.count + 1;
      setCartItems([...cart]);
    }
  };

  // Decreases the quantity of an item
  const decreaseItemCount = (item) => {
    if (item.count > 1) {
      item.count = item.count - 1;
      setCartItems([...cart]);
    }
  };

  return (
    <section className="mt-16">
      {cart.length === 0 ? (
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <Link
            className="border bg-red-300 px-4 py-2 text-lg rounded-md mb-3 inline-block mt-4 font-bold"
            to="/"
          >
            Fill it
          </Link>
        </div>
      ) : (
        <div className="container mx-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 border-b pb-8">
                <th className="py-6">Item</th>
                <th className="py-6">Price</th>
                <th className="py-6">Quantity</th>
                <th className="py-6">Subtotal</th>
              </tr>
            </thead>
            <tbody className="border-b">
              {cart.map((item, i) => (
                <tr key={item.id} className="text-center">
                  <td className="py-6">
                    <img
                      className="w-28 max-h-20 object-cover inline-block"
                      src={item.image}
                      alt={item.name}
                    />
                  </td>
                  <td className="py-6">{item.price}</td>
                  <td className="py-6">
                    <span
                      className="inline-block text-3xl cursor-pointer"
                      onClick={() => decreaseItemCount(item)}
                    >
                      -
                    </span>
                    <h3 className="inline-block w-16 text-3xl font-bold">
                      {item.count}
                    </h3>

                    <span
                      className="inline-block text-3xl cursor-pointer"
                      onClick={() => increaseItemCount(item)}
                    >
                      +
                    </span>
                  </td>
                  <td className="py-6">{item.count * item.price}</td>
                  <td className="py-6">
                    <span
                      onClick={() => handleDelete(i)}
                      className="border py-1 px-2 cursor-pointer"
                    >
                      X
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-12 flex items-center justify-between">
            <Link
              className="border bg-red-300 px-4 py-2 text-lg rounded-md mb-3 inline-block"
              to="/"
            >
              Continue Shopping
            </Link>
            <span
              onClick={clearCart}
              className="border bg-red-300 px-4 py-2 text-lg rounded-md mb-3 inline-block"
            >
              Clear Shopping Cart
            </span>
          </div>
          <div className="text-right mt-4">
            <h2 className="border inline-block px-6 py-3 text-3xl ">
              Subtotal: {totalPrice}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
