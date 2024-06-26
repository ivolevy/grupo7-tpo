import React, { useState } from 'react';
import { CustomNav } from "./assets/components/Nav";
import { ManageProducts } from './assets/components/admin/ManageProducts';
import { CreateProduct } from './assets/components/admin/CreateProduct';
import { ManageUsers } from './assets/components/admin/ManageUsers';
import { ManageDiscounts } from './assets/components/admin/ManageDiscounts';
import { CreateDiscount } from './assets/components/admin/CreateDiscount';

export const AdminView = () => {
  const [view, setView] = useState('crearProducto');
  const [products, setProducts] = useState([]);

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
              className={`p-4 cursor-pointer ${view === 'crearProducto' ? 'bg-gray-700' : ''
                }`}
              onClick={() => handleViewChange('crearProducto')}
            >
              Crear Producto
            </li>
            <li
              className={`p-4 cursor-pointer ${view === 'crearDescuento' ? 'bg-gray-700' : ''
                }`}
              onClick={() => handleViewChange('crearDescuento')}
            >
              Crear Descuento
            </li>
            <li
              className={`p-4 cursor-pointer ${view === 'gestionarProductos' ? 'bg-gray-700' : ''
                }`}
              onClick={() => handleViewChange('gestionarProductos')}
            >
              Gestionar Productos
            </li>
            <li
              className={`p-4 cursor-pointer ${view === 'gestionarUsuarios' ? 'bg-gray-700' : ''
                }`}
              onClick={() => handleViewChange('gestionarUsuarios')}
            >
              Gestionar Usuarios
            </li>
            <li
              className={`p-4 cursor-pointer ${view === 'gestionarDescuentos' ? 'bg-gray-700' : ''
                }`}
              onClick={() => handleViewChange('gestionarDescuentos')}
            >
              Gestionar Descuentos
            </li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div className="main-content w-4/5 p-8 bg-white">
          {view === 'crearProducto' && (
            <CreateProduct
              categories={categories}
            />
          )}

          {view === 'crearDescuento' && (
            <CreateDiscount />
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

          {view === 'gestionarDescuentos' && (
            <ManageDiscounts />
          )}
        </div>
      </div>
    </>
  );
};