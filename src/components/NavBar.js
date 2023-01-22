import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cartItems }) {
  // Calculates total quantity presents in the cart
  let totalItems = 0;
  if (cartItems.length !== 0) {
    cartItems.forEach((item) => (totalItems += item.count));
  }
  return (
    <header className="py-6 border-b shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl">
          Comfy Sloth
        </Link>
        <Link to="/cart" className="text-2xl">
          Cart{" "}
          <span className="text-3xl font-bold text-amber-600">
            {totalItems}
          </span>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
