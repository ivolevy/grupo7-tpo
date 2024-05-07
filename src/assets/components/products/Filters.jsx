import React from 'react';
import { PriceFilter } from "./PriceFilter";
import { CategoryFilter } from "./CategoryFilter";

export const Filters = ({ handleMinPriceClick, handleMaxPriceClick, setCategoryFilter }) => {
  return (
    <aside>
      <PriceFilter 
        onMinPriceClick={handleMinPriceClick} 
        onMaxPriceClick={handleMaxPriceClick} 
      />
      <CategoryFilter setCategoryFilter={setCategoryFilter} />
    </aside>
  );
};
