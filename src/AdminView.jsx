import React, { useState } from 'react';
import { CustomNav } from "./assets/components/Nav";
import { ManageProducts } from './assets/components/admin/ManageProducts';
import { CreateProduct } from './assets/components/admin/CreateProduct';

export const AdminView = () => {
  const [view, setView] = useState('crearProducto');

  const handleViewChange = (viewName) => {
    setView(viewName);
  };

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

  const handleCreateProduct = (productData) => {
    console.log('Datos:', productData);
    // Lógica para guardar el producto en la base de datos o realizar otra acción necesaria
  };

  return (
    <>
      <CustomNav />
      <div className="flex min-h-[50vh]">
        {/* Sidebar */}
        <div className="sidebar bg-blue-bizio text-white w-1/5">
          <h2 className="text-2xl p-4">Admin Dashboard</h2>
          <ul>
            <li
              className={`p-4 cursor-pointer ${
                view === 'crearProducto' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleViewChange('crearProducto')}
            >
              Crear Producto
            </li>
            <li
              className={`p-4 cursor-pointer ${
                view === 'gestionarProductos' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleViewChange('gestionarProductos')}
            >
              Gestionar Productos
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="main-content w-4/5 p-8 bg-white">
          {view === 'crearProducto' && (
            <CreateProduct
              categories={categories}
              onSubmit={handleCreateProduct}
            />
          )}

          {/* Vista para gestionar productos */}
          {view === 'gestionarProductos' && (
            <ManageProducts />
          )}
        </div>
      </div>
    </>
  );
};