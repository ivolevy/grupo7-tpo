import React, { useState } from 'react';
import { CustomNav } from "./assets/components/Nav";
import { ManageProducts } from './assets/components/admin/ManageProducts';
import { CreateProduct } from './assets/components/admin/CreateProduct';

export const AdminView = () => {
  const [view, setView] = useState('crearProducto');
  const [products, setProducts] = useState([]);

  const handleViewChange = (viewName) => {
    setView(viewName);
  };

  const handleCreateProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setView('gestionarProductos'); // Cambia a la vista de gestionar productos después de crear uno nuevo
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
            <ManageProducts 
              categories={categories}
            />
          )}
        </div>
      </div>
    </>
  );
};