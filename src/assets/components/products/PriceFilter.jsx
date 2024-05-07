import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const PriceFilter = ({ onMinPriceClick, onMaxPriceClick }) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Ordenar:">
      <Dropdown.Item onClick={onMinPriceClick}>Precio mínimo</Dropdown.Item>
      <Dropdown.Item onClick={onMaxPriceClick}>Precio máximo</Dropdown.Item>
    </DropdownButton>
  );
};

export default PriceFilter;
