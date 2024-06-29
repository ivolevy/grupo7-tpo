import React, { useState } from 'react';
import { CustomNav } from "./assets/components/Nav";
import { ManageProducts } from './assets/components/admin/ManageProducts';
import { CreateProduct } from './assets/components/admin/CreateProduct';
import { ManageUsers } from './assets/components/admin/ManageUsers';

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

  const roles = [
    "ROLE_ADMIN",
    "ROLE_USER",
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
            <li
              className={`p-4 cursor-pointer ${
                view === 'gestionarUsuarios' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleViewChange('gestionarUsuarios')}
            >
              Gestionar Usuarios
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

          {view === 'gestionarProductos' && (
            <ManageProducts 
              categories={categories}
            />
          )}

          {view === 'gestionarUsuarios' && (
            <ManageUsers 
              roles={roles}
            />
          )}
        </div>
      </div>
    </>
  );
};