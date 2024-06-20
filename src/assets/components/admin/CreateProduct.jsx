import React, { useState } from 'react';

export const CreateProduct = ({ categories, onSubmit }) => {
  const [productData, setProductData] = useState({
    id: '',
    name: '',
    description: '',
    brand: '',
    category: 'Todos',
    price: '',
    discounted: false,
    discountAmount: 0,
    image: null,
    stock: '', // Nuevo campo para stock
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      setProductData((prevState) => ({
        ...prevState,
        image: e.target.files[0]
      }));
    } else if (type === 'checkbox') {
      setProductData((prevState) => ({
        ...prevState,
        [name]: e.target.checked,
        discountAmount: e.target.checked ? prevState.discountAmount : 0
      }));
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);
    setProductData({
      id: '',
      name: '',
      description: '',
      brand: '',
      category: 'Todos',
      price: '',
      discounted: false,
      discountAmount: 0,
      image: null,
      stock: '', // Limpiar el campo de stock después de enviar
    });
  };

  return (
    <div>
      <h3 className="text-xl mb-4">Crear Nuevo Producto</h3>
      {/* Formulario para crear producto */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid grid-cols-2 gap-4">
        {/* ID */}
        <div>
          <label
            htmlFor="productId"
            className="block text-sm font-medium text-gray-700"
          >
            ID
          </label>
          <input
            type="text"
            id="productId"
            name="id"
            value={productData.id}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Nombre */}
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="productName"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Descripción */}
        <div className="col-span-2">
          <label
            htmlFor="productDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <textarea
            id="productDescription"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Marca */}
        <div>
          <label
            htmlFor="productBrand"
            className="block text-sm font-medium text-gray-700"
          >
            Marca
          </label>
          <input
            type="text"
            id="productBrand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Categoría */}
        <div>
          <label
            htmlFor="productCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Categoría
          </label>
          <select
            id="productCategory"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Precio */}
        <div>
          <label
            htmlFor="productPrice"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
          </label>
          <input
            type="text"
            id="productPrice"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Producto en Descuento */}
        <div className="flex items-center">
          <input
            id="productDiscounted"
            name="discounted"
            type="checkbox"
            checked={productData.discounted}
            onChange={handleChange}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor="productDiscounted"
            className="ml-2 block text-sm text-gray-900"
          >
            Producto en Descuento
          </label>
        </div>

        {/* Monto de Descuento (%), solo visible si el producto está en descuento */}
        {productData.discounted && (
          <div className="w-full">
            <label
              htmlFor="productDiscountAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Monto de Descuento (%)
            </label>
            <input
              type="number"
              id="productDiscountAmount"
              name="discountAmount"
              value={productData.discountAmount}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
        )}

        {/* Imagen */}
        <div className="col-span-2">
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-gray-700"
          >
            Imagen
          </label>
          <input
            type="file"
            id="productImage"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
          {productData.image && (
            <img
              src={URL.createObjectURL(productData.image)}
              alt="Preview"
              className="mt-2 rounded-md border border-gray-300"
              style={{ maxWidth: '200px' }}
            />
          )}
        </div>

        {/* Stock */}
        <div>
          <label
            htmlFor="productStock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="text"
            id="productStock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>

        {/* Botón de Submit */}
        <div className="col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Crear Producto
          </button>
        </div>
      </form>
    </div>
  );
};
