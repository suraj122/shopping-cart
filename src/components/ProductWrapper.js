import React, { useState } from "react";
import Categories from "./Categories";
import ProductContainer from "./ProductContainer";

function ProductWrapper() {
  // State
  const [category, setCategory] = useState("all");
  return (
    <div className="container mx-auto px-4 mt-12 flex items-start">
      <Categories setCategory={setCategory} />
      <ProductContainer category={category} />
    </div>
  );
}

export default ProductWrapper;
