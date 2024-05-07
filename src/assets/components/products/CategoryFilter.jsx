const CategoryFilter = ({ setCategoryFilter }) => {
  const categories = ["Todos", "teclados", "mouse", "auriculares", "accesorios", "sillas", "monitores", "perifericos", "graficas"];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory === "Todos" ? null : selectedCategory);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-2">Categorías</h3>
      <select
        onChange={handleCategoryChange}
        className="block w-full py-2 px-3 rounded-md text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
