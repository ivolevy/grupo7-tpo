import React from 'react';

const CategoryFilter = ({ setCategoryFilter }) => {
  const categories = [
    "Todos",
    "teclados",
    "mouse",
    "auriculares",
    "accesorios",
    "sillas",
    "monitores",
    "perifericos",
    "graficas",
  ];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory === "Todos" ? null : selectedCategory);
  };

  return (
    <div className="relative inline-block text-left mb-6">
      <div className="relative">
        <select
          id="category"
          onChange={handleCategoryChange}
          defaultValue={""}
          className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option disabled value="">Categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9.293 12.95a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L8 10.086l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
