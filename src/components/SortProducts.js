import React from "react";

function SortProducts({ products, setSortBy }) {
  // Sort products
  const handleSorting = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <header className="flex justify-between">
      <h2 className="text-xl text-gray-600">
        {products.length} Products Found
      </h2>
      <label htmlFor="">
        Sort By
        <select onChange={handleSorting} name="" id="">
          <option value="lowest">Price(Lowest)</option>
          <option value="highest">Price(Highest)</option>
          <option value="a-z">Name(A - Z)</option>
          <option value="z-a">Name(Z - A )</option>
        </select>
      </label>
    </header>
  );
}

export default SortProducts;
