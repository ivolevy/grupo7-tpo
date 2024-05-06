const PriceFilter = ({ onMinPriceClick, onMaxPriceClick }) => {
  return (
    <div>
      <button onClick={onMinPriceClick} className="productViewButton bg-blue-bizio">Precio mínimo</button>
      <button onClick={onMaxPriceClick} className="productViewButton bg-blue-bizio">Precio máximo</button>
    </div>
  );
};

export default PriceFilter;
