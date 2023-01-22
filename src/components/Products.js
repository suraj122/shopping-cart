import React from "react";
import Product from "./Product";

function Products({ products }) {
  return (
    <section className="mt-8">
      <ul className="grid grid-cols-3 gap-y-10 gap-x-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}

export default Products;
