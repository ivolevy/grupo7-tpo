import React, { useState } from 'react';

export const UserView = () => {
  const [view, setView] = useState('perfil');

  const handleViewChange = (viewName) => {
    setView(viewName);
  };

  return (
    <div className="flex">
      <div className="sidebar bg-gray-800 text-white w-1/5 min-h-screen">
        <h2 className="text-2xl font-bold p-4">Iñaki</h2>
        <ul>
          <li className={`p-4 cursor-pointer ${view === 'perfil' ? 'bg-gray-900' : ''}`} onClick={() => handleViewChange('perfil')}>
            Perfil
          </li>
          <li className={`p-4 cursor-pointer ${view === 'compras' ? 'bg-gray-900' : ''}`} onClick={() => handleViewChange('compras')}>
            Compras
          </li>
        </ul>
      </div>
      <div className="main-content w-4/5 p-8 bg-white">
        {view === 'perfil' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Perfil del Usuario</h3>
            <p>Nombre: Juan </p>
            <p>Apellido:Pérez </p>
            <p>Correo electrónico: juan.perez@example.com</p>
            <p>DNI: 44562908</p>
            <p>Teléfono: (11)3298-7699</p>
          </div>
        )}
        {view === 'compras' && (
          <div>
            <h3 className="text-xl font-bold mb-4">Historial de Compras</h3>
            <ul>
              <li>Producto 1 - $100</li>
              <li>Producto 2 - $50</li>
              <li>Producto 3 - $75</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


