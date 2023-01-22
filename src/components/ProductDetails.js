import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails({ cart, setCart }) {
  // State
  const [productCount, setProductCount] = useState(1);

  // Product
  const params = useParams();
  let product = products.find((product) => product.id === params.id);

  // Adds an item to cart
  const addToCart = (id) => {
    let cartItemExist = cart.findIndex((item) => item.id === id);
    if (cartItemExist === -1) {
      setCart([...cart, { ...product, count: productCount }]);
    } else {
      cart.map((item) => {
        if (item.id === id) {
          item.count += productCount;
          setCart([...cart]);
        }
      });
    }
    setProductCount(1);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 ">
        <Link
          className="border bg-red-300 px-4 py-2 text-lg rounded-md mb-3 inline-block"
          to="/"
        >
          Back to Products
        </Link>
        <div className="grid grid-cols-2 gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-96 w-full object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <footer className="mt-4">
              <button
                onClick={() =>
                  productCount > 1 && setProductCount(productCount - 1)
                }
                className="text-2xl border px-2"
              >
                -
              </button>
              <span className="text-5xl font-bold mx-8 w-24 inline-block text-center">
                {productCount}
              </span>
              <button
                onClick={() =>
                  productCount < 20 && setProductCount(productCount + 1)
                }
                className="text-2xl border px-2"
              >
                +
              </button>
              <br />
              <Link
                to="/cart"
                className="border bg-red-300 px-4 py-2 text-lg rounded-md mb-3 inline-block mt-4"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
