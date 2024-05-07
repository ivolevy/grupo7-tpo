import PropTypes from "prop-types";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

export const CardProduct = ({ image, desc, precio, id }) => {
  return (
    <div>
      <Link to={`/product/${id}`} className="card-link">
        <article className="rounded-xl bg-gray-element p-3 shadow-lg hover:border-blue-bizio duration-300 border-2 border-transparent">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img src={image} alt="Product Photo" />
          </div>

          <div className="mt-1 p-2 h-1/3">
            <h2 className="text-white h-9">{desc}</h2>

            <div className="flex items-center justify-between space-y-1 mt-4">
              <p className="text-lg text-blue-500 pr-2">${precio}</p>
              <div className="rounded-lg flex items-center space-x-1.5 bg-blue-500 p-2 mt-0 text-white duration-100 hover:bg-blue-600">
                <button className="text-sm"><CiShoppingCart className="text-xl"/></button>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
