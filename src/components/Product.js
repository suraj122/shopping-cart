import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/${product.id}`}>
      <li>
        <img
          className="max h-56 object-cover w-full"
          src={product.image}
          alt={product.name}
        />
        <footer className="flex justify-between items-center mt-2">
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>
        </footer>
      </li>
    </Link>
  );
}

export default Product;
