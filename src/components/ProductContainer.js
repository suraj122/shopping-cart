import React from "react";
import Products from "./Products";
import SortProducts from "./SortProducts";
import products from "../data/products";
import { useState } from "react";

function ProductContainer({ category }) {
  // State
  const [sortBy, setSortBy] = useState("lowest");

  // Sort Products
  const sortProducts = (sortBy) => {
    switch (sortBy) {
      case "highest":
        return [...products].sort((a, b) => b.price - a.price);
      case "a-z":
        return [...products].sort((a, b) => a.name > b.name);
      case "z-a":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return [...products].sort((a, b) => a.price - b.price);
    }
  };
  let sortedProducts = sortProducts(sortBy);

  // Filter products based on category
  let filteredProducts;
  if (category === "all") {
    filteredProducts = sortedProducts;
  } else {
    filteredProducts = sortedProducts.filter(
      (product) => product.category === category
    );
  }

  return (
    <main className="ml-16 w-full">
      <SortProducts setSortBy={setSortBy} products={filteredProducts} />
      <Products products={filteredProducts} />
    </main>
  );
}

export default ProductContainer;
