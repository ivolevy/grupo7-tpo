import React, { useState } from 'react';

export const AdminView = () => {
  const [view, setView] = useState('crearProducto');

  const handleViewChange = (viewName) => {
    setView(viewName);
  };

  return (
    <div className="flex">
      {/* Barra lateral */}
      <div className="sidebar bg-gray-800 text-white w-1/5 min-h-screen">
        <h2 className="text-2xl font-bold p-4">Dashboard</h2>
        <ul>
          <li className={`p-4 cursor-pointer ${view === 'crearProducto' ? 'bg-gray-900' : ''}`} onClick={() => handleViewChange('crearProducto')}>
            Crear Producto
          </li>
          <li className={`p-4 cursor-pointer ${view === 'gestionarProductos' ? 'bg-gray-900' : ''}`} onClick={() => handleViewChange('gestionarProductos')}>
            Gestionar Productos
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="main-content w-4/5 p-8">
        {view === 'crearProducto' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Crear Nuevo Producto</h3>
            {/* Formulario para crear producto */}
            <form>
              <label htmlFor="productName">Nombre del Producto:</label>
              <input type="text" id="productName" name="productName" className="block mb-2 border rounded-md p-2" />
              <label htmlFor="productPrice">Precio del Producto:</label>
              <input type="text" id="productPrice" name="productPrice" className="block mb-2 border rounded-md p-2" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
                Crear Producto
              </button>
            </form>
          </div>
        )}

        {view === 'gestionarProductos' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Gestionar Productos</h3>
            {/* Lista de productos existentes */}
            <ul>
              <li>Producto 1 - $100 <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md ml-2">Eliminar</button></li>
              <li>Producto 2 - $50 <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md ml-2">Eliminar</button></li>
              <li>Producto 3 - $75 <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md ml-2">Eliminar</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
