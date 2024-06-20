import React, { useState } from 'react';

const PriceFilter = ({ onMinPriceClick, onMaxPriceClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMinClick = () => {
    onMinPriceClick();
    setIsOpen(false); // Cerrar el dropdown después de hacer clic
  };

  const handleMaxClick = () => {
    onMaxPriceClick();
    setIsOpen(false); // Cerrar el dropdown después de hacer clic
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="price-filter-button"
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span className="mr-1">Ordenar</span>
        <svg
          className="w-5 h-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9.293 12.95a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L8 10.086l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3z"
          />
        </svg>
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="price-filter-button"
        >
          <button
            onClick={handleMinClick}
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
            role="menuitem"
          >
            Precio mínimo
          </button>
          <button
            onClick={handleMaxClick}
            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
            role="menuitem"
          >
            Precio máximo
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
