import React from "react";

function Categories({ setCategory }) {
  // Categories
  let categories = [
    "All",
    "Office",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
    "Kids",
  ];

  return (
    <aside>
      <h2 className="text-xl font-bold">Categories</h2>
      <ul className="mt-4">
        {categories.map((category, i) => (
          <li
            onClick={() => setCategory(category.toLowerCase())}
            key={i}
            className="text-gray-600 mt-2 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Categories;
